import type { CurrentUserContext } from "@/src/application/local-user-context";
import type { LibraryEntryRepository } from "@/src/application/ports/library-entry-repository";
import { ConsumptionEvent, LibraryEntry } from "@/src/domain/library-entry/library-entry";
import { EntityId } from "@/src/domain/shared/entity-id";

export type ConsumptionHistory = { consumptionCount: number; events: { id: string; occurredAt: string }[] };

export class GetConsumptionHistoryService {
  constructor(private readonly entries: LibraryEntryRepository, private readonly currentUser: CurrentUserContext) {}
  async get(entryId: string): Promise<ConsumptionHistory | null> {
    validateLibraryEntryId(entryId); const entry = await findOwned(this.entries, this.currentUser, entryId); if (!entry) return null;
    return { consumptionCount: entry.consumptionCount, events: [...entry.events].sort((a, b) => b.occurredAt.getTime() - a.occurredAt.getTime() || b.id.value.localeCompare(a.id.value)).map((event) => ({ id: event.id.value, occurredAt: event.occurredAt.toISOString() })) };
  }
}

export class RecordConsumptionService {
  constructor(private readonly entries: LibraryEntryRepository, private readonly currentUser: CurrentUserContext) {}
  async record(entryId: string, occurredAt: string): Promise<boolean> {
    validateLibraryEntryId(entryId); const date = parseEventDate(occurredAt); const entry = await findOwned(this.entries, this.currentUser, entryId); if (!entry) return false;
    await this.entries.save(LibraryEntry.create({ ...entry.properties, consumptionEvents: [...entry.events, ConsumptionEvent.create(EntityId.create(crypto.randomUUID()), date)] }));
    return true;
  }
}

async function findOwned(entries: LibraryEntryRepository, currentUser: CurrentUserContext, entryId: string): Promise<LibraryEntry | null> {
  const entry = await entries.findById(entryId); return entry && entry.properties.userId.value === await currentUser.getCurrentUserId() ? entry : null;
}
export function validateLibraryEntryId(entryId: string) { try { EntityId.create(entryId); } catch { throw new Error("INVALID_ENTRY_ID"); } }
export function parseEventDate(value: string): Date {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("INVALID_EVENT_DATE");
  const date = new Date(`${value}T12:00:00.000Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw new Error("INVALID_EVENT_DATE");
  return date;
}
