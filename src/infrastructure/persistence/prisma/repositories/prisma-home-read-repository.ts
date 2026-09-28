import type { HomeReadRepository } from "@/src/application/ports/home-read-repository";
import type { PrismaClient } from "@/app/generated/prisma/client";

export class PrismaHomeReadRepository implements HomeReadRepository {
  constructor(private readonly client: PrismaClient) {}

  async entriesForUser(userId: string) {
    return this.client.libraryEntry.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: { content: true, consumptionEvents: { orderBy: { occurredAt: "desc" } } },
    }).then((rows) => rows.map((row) => ({
      id: row.id, title: row.content.title, mediaType: row.content.mediaType, coverReference: row.content.coverReference, ratingTenths: row.ratingTenths,
      createdAt: row.createdAt, consumptionEvents: row.consumptionEvents, favorite: row.favorite, status: row.status,
    })));
  }

  async collectionsForUser(userId: string) {
    return this.client.collection.findMany({
      where: { userId }, orderBy: { name: "asc" },
      include: { entries: { take: 3, include: { libraryEntry: { include: { content: true } } } }, _count: { select: { entries: true } } },
    }).then((rows) => rows.map((row) => ({
      id: row.id, name: row.name, entryCount: row._count.entries,
      previews: row.entries.map(({ libraryEntry }) => ({ title: libraryEntry.content.title, mediaType: libraryEntry.content.mediaType, coverReference: libraryEntry.content.coverReference })),
    })));
  }
}
