import type { CurrentUserContext } from "@/src/application/local-user-context";
import type { HomeReadRepository } from "@/src/application/ports/home-read-repository";

const mediaTypes = ["MOVIE", "TV_SERIES", "GAME", "BOOK"] as const;
type MediaType = (typeof mediaTypes)[number];

export type HomeEntry = { id: string; title: string; mediaType: MediaType; coverReference: string | null; rating: number | null };
const toEntry = (record: { id: string; title: string; mediaType: string; coverReference: string | null; ratingTenths: number | null }): HomeEntry => ({ id: record.id, title: record.title, mediaType: record.mediaType as MediaType, coverReference: record.coverReference, rating: record.ratingTenths === null ? null : record.ratingTenths / 10 });

export class HomeSummaryService {
  constructor(private readonly readRepository: HomeReadRepository, private readonly currentUser: CurrentUserContext) {}

  async get() {
    const userId = await this.currentUser.getCurrentUserId();
    const [records, collections] = await Promise.all([
      this.readRepository.entriesForUser(userId),
      this.readRepository.collectionsForUser(userId),
    ]);
    const entries = records.map(toEntry);
    const entriesByType = Object.fromEntries(mediaTypes.map((mediaType) => [mediaType, entries.filter((entry) => entry.mediaType === mediaType).slice(0, 8)])) as Record<MediaType, HomeEntry[]>;
    const now = new Date();
    const monthStart = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
    const monthEvents = records.flatMap((entry) => entry.consumptionEvents.filter((event) => event.occurredAt >= monthStart).map((event) => ({ ...event, entry })));
    const monthlyBreakdown = Object.fromEntries(mediaTypes.map((mediaType) => [mediaType, monthEvents.filter((event) => event.entry.mediaType === mediaType).length])) as Record<MediaType, number>;
    const choicePool = records.filter((entry) => entry.status !== "DROPPED").slice(0, 12).map(toEntry);

    return {
      counts: Object.fromEntries(mediaTypes.map((mediaType) => [mediaType, records.filter((entry) => entry.mediaType === mediaType).length])) as Record<MediaType, number>,
      entriesByType,
      collections,
      choicePool,
      monthly: {
        eventCount: monthEvents.length,
        consumedEntryCount: new Set(monthEvents.map((event) => event.entry.id)).size,
        breakdown: monthlyBreakdown,
      },
    };
  }
}
