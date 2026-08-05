import { describe, expect, it } from "vitest";
import { Content } from "@/src/domain/content/content";
import { ConsumptionEvent, LibraryEntry, Rating } from "@/src/domain/library-entry/library-entry";
import { EntityId } from "@/src/domain/shared/entity-id";
const id = (n: string) => EntityId.create(`00000000-0000-4000-8000-0000000000${n}`);
describe("core domain", () => {
  it("accepts approved media types and rejects invalid ones", () => { expect(Content.create({ id: id("01"), title: "Mosaica", mediaType: "MOVIE" }).properties.title).toBe("Mosaica"); expect(() => Content.create({ id: id("02"), title: "x", mediaType: "ALBUM" as never })).toThrow(); });
  it("keeps rating, appreciation, and favorite independent", () => { const entry = LibraryEntry.create({ id: id("03"), userId: id("04"), contentId: id("05"), archiveLocation: "ARCHIVE", rating: Rating.create(83), appreciationLevel: "LOVED", favorite: false, consumptionEvents: [ConsumptionEvent.create(id("06"), new Date("2026-01-01")), ConsumptionEvent.create(id("07"), new Date("2026-01-02"))] }); expect(entry.properties.rating?.tenths).toBe(83); expect(entry.appreciationLevel).toBe("LOVED"); expect(entry.favorite).toBe(false); expect(entry.consumptionCount).toBe(2); });
});
