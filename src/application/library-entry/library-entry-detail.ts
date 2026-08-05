import type { ContentRepository } from "@/src/application/ports/content-repository";
import type { LibraryEntryRepository } from "@/src/application/ports/library-entry-repository";
import type { CurrentUserContext } from "@/src/application/local-user-context";
import { LibraryEntry, Rating } from "@/src/domain/library-entry/library-entry";

export type LibraryEntryDetail = {
  id: string;
  content: { id: string; title: string; mediaType: string; originalTitle?: string; releaseYear?: number; synopsis?: string };
  rating: number | null;
};

export class LibraryEntryDetailService {
  constructor(
    private readonly entries: LibraryEntryRepository,
    private readonly contents: ContentRepository,
    private readonly currentUser: CurrentUserContext,
  ) {}

  async get(entryId: string): Promise<LibraryEntryDetail | null> {
    const entry = await this.findOwned(entryId);
    if (!entry) return null;
    const content = await this.contents.findById(entry.properties.contentId.value);
    if (!content) return null;
    const value = content.properties;
    return { id: entry.properties.id.value, content: { id: value.id.value, title: value.title, mediaType: value.mediaType, originalTitle: value.originalTitle, releaseYear: value.releaseYear, synopsis: value.synopsis }, rating: entry.properties.rating ? entry.properties.rating.tenths / 10 : null };
  }

  async updateRating(entryId: string, rating: number): Promise<LibraryEntryDetail | null> {
    if (!isOneDecimalRating(rating)) throw new Error("INVALID_RATING");
    const entry = await this.findOwned(entryId);
    if (!entry) return null;
    const updated = LibraryEntry.create({ ...entry.properties, rating: Rating.create(Math.round(rating * 10)) });
    await this.entries.save(updated);
    return this.get(entryId);
  }

  private async findOwned(entryId: string): Promise<LibraryEntry | null> {
    const entry = await this.entries.findById(entryId);
    return entry && entry.properties.userId.value === await this.currentUser.getCurrentUserId() ? entry : null;
  }
}

export function isOneDecimalRating(value: number): boolean {
  return Number.isFinite(value) && value >= 0 && value <= 10 && Math.abs(value * 10 - Math.round(value * 10)) < 1e-9;
}
