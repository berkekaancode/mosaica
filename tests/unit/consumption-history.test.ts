import { describe, expect, it } from "vitest";
import { GetConsumptionHistoryService, parseEventDate, RecordConsumptionService } from "@/src/application/library-entry/consumption-history";
import { ConsumptionEvent, LibraryEntry } from "@/src/domain/library-entry/library-entry";
import { EntityId } from "@/src/domain/shared/entity-id";

const id = (suffix: string) => EntityId.create(`30000000-0000-4000-8000-0000000000${suffix}`);
describe("consumption application services", () => {
  it("records for the owner and returns derived newest-first history", async () => {
    let stored = LibraryEntry.create({ id: id("01"), userId: id("02"), contentId: id("03"), archiveLocation: "ARCHIVE", consumptionEvents: [ConsumptionEvent.create(id("04"), new Date("2026-01-01T12:00:00Z"))] });
    const repo = { existsForUserAndContent: async () => false, findById: async () => stored, findByOwnerId: async () => [], save: async (entry: LibraryEntry) => { stored = entry; } }; const user = { getCurrentUserId: async () => id("02").value };
    expect(await new RecordConsumptionService(repo, user).record(stored.properties.id.value, "2026-03-01")).toBe(true);
    const history = await new GetConsumptionHistoryService(repo, user).get(stored.properties.id.value);
    expect(history?.consumptionCount).toBe(2); expect(history?.events[0].occurredAt).toContain("2026-03-01");
  });
  it("enforces ownership and validates calendar dates", async () => {
    const entry = LibraryEntry.create({ id: id("11"), userId: id("12"), contentId: id("13"), archiveLocation: "ARCHIVE" }); const repo = { existsForUserAndContent: async () => false, findById: async () => entry, findByOwnerId: async () => [], save: async () => { throw new Error("must not save"); } };
    expect(await new RecordConsumptionService(repo, { getCurrentUserId: async () => id("14").value }).record(entry.properties.id.value, "2026-01-01")).toBe(false); expect(() => parseEventDate("2026-02-30")).toThrow("INVALID_EVENT_DATE"); expect(() => parseEventDate("01-01-2026")).toThrow("INVALID_EVENT_DATE");
  });
});
