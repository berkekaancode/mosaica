import { describe, expect, it } from "vitest";
import { LibraryEntryDetailService, isOneDecimalRating } from "@/src/application/library-entry/library-entry-detail";
import { Content } from "@/src/domain/content/content";
import { EntityId } from "@/src/domain/shared/entity-id";
import { LibraryEntry, Rating } from "@/src/domain/library-entry/library-entry";
import { LibraryEntryPreferencesService } from "@/src/application/library-entry/library-entry-preferences";

const id = (suffix: string) => EntityId.create(`20000000-0000-4000-8000-0000000000${suffix}`);
describe("LibraryEntryDetailService", () => {
  it("returns only the current user's entry and updates its rating", async () => {
    let saved: LibraryEntry | undefined;
    const entry = LibraryEntry.create({ id: id("01"), userId: id("02"), contentId: id("03"), archiveLocation: "ARCHIVE" });
    const service = new LibraryEntryDetailService({ existsForUserAndContent: async () => false, findById: async () => saved ?? entry, findByOwnerId: async () => [], save: async (value) => { saved = value; } }, { exists: async () => true, findById: async () => Content.create({ id: id("03"), title: "Solaris", mediaType: "MOVIE", releaseYear: 1972 }), save: async () => {} }, { getCurrentUserId: async () => id("02").value });
    expect(await service.get(entry.properties.id.value)).toMatchObject({ content: { title: "Solaris" }, rating: null });
    expect((await service.updateRating(entry.properties.id.value, 8.5))?.rating).toBe(8.5);
    expect(saved?.properties.rating?.tenths).toBe(85);
  });
  it("rejects out-of-range and non-tenth ratings", () => {
    expect(isOneDecimalRating(0)).toBe(true); expect(isOneDecimalRating(10)).toBe(true);
    expect(isOneDecimalRating(8.55)).toBe(false); expect(isOneDecimalRating(-0.1)).toBe(false); expect(isOneDecimalRating(10.1)).toBe(false);
  });
  it("updates preferences independently and refuses another user's entry", async () => {
    let stored = LibraryEntry.create({ id: id("11"), userId: id("02"), contentId: id("03"), archiveLocation: "ARCHIVE", rating: Rating.create(85), appreciationLevel: "LIKED", favorite: false });
    const service = new LibraryEntryPreferencesService({ existsForUserAndContent: async () => false, findById: async () => stored, findByOwnerId: async () => [], save: async (entry) => { stored = entry; } }, { getCurrentUserId: async () => id("02").value });
    await service.updateAppreciationLevel(stored.properties.id.value, "LOVED"); await service.updateFavorite(stored.properties.id.value, true); await service.updateStatus(stored.properties.id.value, "COMPLETED"); await service.updatePersonalNote(stored.properties.id.value, "  Çok iyi.  ");
    expect(stored.properties.rating?.tenths).toBe(85); expect(stored.appreciationLevel).toBe("LOVED"); expect(stored.favorite).toBe(true); expect(stored.properties.status).toBe("COMPLETED"); expect(stored.properties.personalNote).toBe("Çok iyi.");
    await service.updatePersonalNote(stored.properties.id.value, null); expect(stored.properties.personalNote).toBeUndefined();
    await expect(service.updateAppreciationLevel(stored.properties.id.value, "UNKNOWN")).rejects.toThrow("INVALID_APPRECIATION_LEVEL");
    await expect(service.updateStatus(stored.properties.id.value, "WATCHING")).rejects.toThrow("INVALID_STATUS");
    await expect(service.updateFavorite(stored.properties.id.value, "true")).rejects.toThrow("INVALID_FAVORITE");
    const other = new LibraryEntryPreferencesService({ existsForUserAndContent: async () => false, findById: async () => stored, findByOwnerId: async () => [], save: async () => { throw new Error("must not save"); } }, { getCurrentUserId: async () => id("99").value });
    expect(await other.updateFavorite(stored.properties.id.value, false)).toBe(false);
  });
});
