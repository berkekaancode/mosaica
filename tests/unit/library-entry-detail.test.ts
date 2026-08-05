import { describe, expect, it } from "vitest";
import { LibraryEntryDetailService, isOneDecimalRating } from "@/src/application/library-entry/library-entry-detail";
import { Content } from "@/src/domain/content/content";
import { EntityId } from "@/src/domain/shared/entity-id";
import { LibraryEntry } from "@/src/domain/library-entry/library-entry";

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
});
