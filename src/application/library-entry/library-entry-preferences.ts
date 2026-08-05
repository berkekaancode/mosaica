import type { CurrentUserContext } from "@/src/application/local-user-context";
import type { LibraryEntryRepository } from "@/src/application/ports/library-entry-repository";
import { APPRECIATION_LEVELS, LibraryEntry, STATUSES, type AppreciationLevel, type Status } from "@/src/domain/library-entry/library-entry";

export class LibraryEntryPreferencesService {
  constructor(private readonly entries: LibraryEntryRepository, private readonly currentUser: CurrentUserContext) {}

  async updateAppreciationLevel(entryId: string, appreciationLevel: string): Promise<boolean> {
    if (!APPRECIATION_LEVELS.includes(appreciationLevel as AppreciationLevel)) throw new Error("INVALID_APPRECIATION_LEVEL");
    return this.updateOwned(entryId, (entry) => LibraryEntry.create({ ...entry.properties, appreciationLevel: appreciationLevel as AppreciationLevel }));
  }

  async updateFavorite(entryId: string, favorite: unknown): Promise<boolean> {
    if (typeof favorite !== "boolean") throw new Error("INVALID_FAVORITE");
    return this.updateOwned(entryId, (entry) => LibraryEntry.create({ ...entry.properties, favorite }));
  }

  async updateStatus(entryId: string, status: string | null): Promise<boolean> {
    if (status !== null && !STATUSES.includes(status as Status)) throw new Error("INVALID_STATUS");
    return this.updateOwned(entryId, (entry) => LibraryEntry.create({ ...entry.properties, status: status === null ? undefined : status as Status }));
  }

  async updatePersonalNote(entryId: string, personalNote: string | null): Promise<boolean> {
    if (personalNote !== null && typeof personalNote !== "string") throw new Error("INVALID_PERSONAL_NOTE");
    return this.updateOwned(entryId, (entry) => LibraryEntry.create({ ...entry.properties, personalNote: personalNote ?? undefined }));
  }

  private async updateOwned(entryId: string, update: (entry: LibraryEntry) => LibraryEntry): Promise<boolean> {
    const entry = await this.entries.findById(entryId);
    if (!entry || entry.properties.userId.value !== await this.currentUser.getCurrentUserId()) return false;
    await this.entries.save(update(entry));
    return true;
  }
}
