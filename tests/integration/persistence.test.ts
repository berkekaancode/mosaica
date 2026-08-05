import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import { PrismaClient } from "@/app/generated/prisma/client";
import { PrismaLibraryEntryRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-library-entry-repository";
import { LibraryEntry, Rating } from "@/src/domain/library-entry/library-entry";
import { GetConsumptionHistoryService, RecordConsumptionService } from "@/src/application/library-entry/consumption-history";

const client = new PrismaClient({ adapter: new PrismaBetterSqlite3({ url: "file:./prisma/epic1-verification.db" }) });
const userId = "10000000-0000-4000-8000-000000000001";
const contentId = "10000000-0000-4000-8000-000000000002";
const entryId = "10000000-0000-4000-8000-000000000003";

beforeAll(async () => {
  await client.entryTag.deleteMany(); await client.collectionEntry.deleteMany(); await client.consumptionEvent.deleteMany(); await client.libraryEntry.deleteMany(); await client.collection.deleteMany(); await client.tag.deleteMany(); await client.content.deleteMany(); await client.user.deleteMany();
});
afterAll(async () => client.$disconnect());

describe("SQLite persistence foundation", () => {
  it("persists aggregates, owned events, and protects User + Content uniqueness", async () => {
    await client.user.create({ data: { id: userId } });
    await client.content.create({ data: { id: contentId, title: "Test content", mediaType: "MOVIE" } });
    await client.libraryEntry.create({ data: { id: entryId, userId, contentId, archiveLocation: "ARCHIVE", consumptionEvents: { create: [{ id: "10000000-0000-4000-8000-000000000004", occurredAt: new Date("2026-01-01") }] } } });
    const entry = await client.libraryEntry.findUnique({ where: { id: entryId }, include: { consumptionEvents: true } });
    expect(entry?.consumptionEvents).toHaveLength(1); expect(entry?.appreciationLevel).toBe("LIKED"); expect(entry?.favorite).toBe(false);
    await expect(client.libraryEntry.create({ data: { id: "10000000-0000-4000-8000-000000000005", userId, contentId, archiveLocation: "ARCHIVE" } })).rejects.toThrow();
  });
  it("removes Collection and Tag links without deleting LibraryEntry", async () => {
    const collection = await client.collection.create({ data: { id: "10000000-0000-4000-8000-000000000006", userId, name: "Favorites" } });
    const tag = await client.tag.create({ data: { id: "10000000-0000-4000-8000-000000000007", userId, name: "quiet" } });
    await client.collectionEntry.create({ data: { collectionId: collection.id, libraryEntryId: entryId } });
    await client.entryTag.create({ data: { libraryEntryId: entryId, tagId: tag.id } });
    await client.collection.delete({ where: { id: collection.id } }); await client.tag.delete({ where: { id: tag.id } });
    expect(await client.libraryEntry.findUnique({ where: { id: entryId } })).not.toBeNull();
    expect(await client.collectionEntry.count()).toBe(0); expect(await client.entryTag.count()).toBe(0);
  });
  it("persists a rating update through the repository", async () => {
    const repository = new PrismaLibraryEntryRepository(client);
    const current = await repository.findById(entryId);
    expect(current).not.toBeNull();
    await repository.save(LibraryEntry.create({ ...current!.properties, rating: Rating.create(87) }));
    const refreshed = await repository.findById(entryId);
    expect(refreshed?.properties.rating?.tenths).toBe(87);
    expect((await client.libraryEntry.findUnique({ where: { id: entryId } }))?.ratingTenths).toBe(87);
  });
  it("persists independent preferences and can clear a personal note", async () => {
    const repository = new PrismaLibraryEntryRepository(client); const current = await repository.findById(entryId);
    await repository.save(LibraryEntry.create({ ...current!.properties, appreciationLevel: "LEGENDARY", favorite: true, status: "COMPLETED", personalNote: "Kalıcı not" }));
    let persisted = await client.libraryEntry.findUnique({ where: { id: entryId } });
    expect(persisted).toMatchObject({ ratingTenths: 87, appreciationLevel: "LEGENDARY", favorite: true, status: "COMPLETED", personalNote: "Kalıcı not" });
    const withNote = await repository.findById(entryId);
    await repository.save(LibraryEntry.create({ ...withNote!.properties, personalNote: undefined }));
    persisted = await client.libraryEntry.findUnique({ where: { id: entryId } }); expect(persisted?.personalNote).toBeNull(); expect(persisted?.favorite).toBe(true);
  });
  it("persists consumption events and reloads a newest-first derived history", async () => {
    const repository = new PrismaLibraryEntryRepository(client); const user = { getCurrentUserId: async () => userId };
    const record = new RecordConsumptionService(repository, user); await record.record(entryId, "2026-02-01"); await record.record(entryId, "2026-03-01");
    const reloaded = await new GetConsumptionHistoryService(repository, user).get(entryId);
    expect(reloaded?.consumptionCount).toBe(3); expect(reloaded?.events.map((event) => event.occurredAt.slice(0, 10))).toEqual(["2026-03-01", "2026-02-01", "2026-01-01"]);
    expect(await client.consumptionEvent.count({ where: { libraryEntryId: entryId } })).toBe(3);
  });
});
