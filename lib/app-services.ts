import { prisma } from "@/lib/prisma";
import { LocalV0UserContext } from "@/src/infrastructure/local-v0-user-context";
import { PrismaContentRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-content-repository";
import { PrismaLibraryEntryRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-library-entry-repository";
import { Content } from "@/src/domain/content/content";
import { LibraryEntry } from "@/src/domain/library-entry/library-entry";
import { EntityId } from "@/src/domain/shared/entity-id";
import { LibraryEntryDetailService } from "@/src/application/library-entry/library-entry-detail";
import { LibraryEntryPreferencesService } from "@/src/application/library-entry/library-entry-preferences";
import { GetConsumptionHistoryService, RecordConsumptionService } from "@/src/application/library-entry/consumption-history";
import { PrismaCollectionRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-collection-repository";
import { AddEntryToCollectionService, CreateCollectionService, DeleteCollectionService, GetCollectionService, GetCollectionsService, RemoveEntryFromCollectionService } from "@/src/application/collection/collection-services";

const owner = new LocalV0UserContext();
export async function listContents(query = "") { return prisma.content.findMany({ where: { title: { contains: query } }, orderBy: { createdAt: "desc" } }); }
export async function createContent(input: { title: string; mediaType: "MOVIE"|"TV_SERIES"|"GAME"|"BOOK" }) { const content=Content.create({id:EntityId.create(crypto.randomUUID()),...input}); await new PrismaContentRepository(prisma).save(content); return {id:content.properties.id.value}; }
export async function listLibrary() { const userId=await owner.getCurrentUserId(); const rows=await prisma.libraryEntry.findMany({where:{userId},include:{content:true,consumptionEvents:true},orderBy:{createdAt:"desc"}}); return rows.map(x=>({...x,consumptionCount:x.consumptionEvents.length})); }
export async function addToLibrary(contentId:string) { const userId=await owner.getCurrentUserId(); if(!await prisma.content.findUnique({where:{id:contentId}})) return null; const repo=new PrismaLibraryEntryRepository(prisma); if(await repo.existsForUserAndContent(userId,contentId)) throw new Error("CONFLICT"); const entry=LibraryEntry.create({id:EntityId.create(crypto.randomUUID()),userId:EntityId.create(userId),contentId:EntityId.create(contentId),archiveLocation:"ARCHIVE"});await repo.save(entry);return{id:entry.properties.id.value}; }
const libraryEntryDetails = new LibraryEntryDetailService(new PrismaLibraryEntryRepository(prisma), new PrismaContentRepository(prisma), owner);
const libraryEntryPreferences = new LibraryEntryPreferencesService(new PrismaLibraryEntryRepository(prisma), owner);
const consumptionHistory = new GetConsumptionHistoryService(new PrismaLibraryEntryRepository(prisma), owner);
const recordConsumption = new RecordConsumptionService(new PrismaLibraryEntryRepository(prisma), owner);
const collections = new PrismaCollectionRepository(prisma); const entries = new PrismaLibraryEntryRepository(prisma); const contents = new PrismaContentRepository(prisma);
const createCollection = new CreateCollectionService(collections, owner); const getCollections = new GetCollectionsService(collections, entries, owner); const getCollection = new GetCollectionService(collections, entries, contents, owner); const addCollectionEntry = new AddEntryToCollectionService(collections, entries, owner); const removeCollectionEntry = new RemoveEntryFromCollectionService(collections, owner); const deleteCollection = new DeleteCollectionService(collections, owner);
export async function getLibraryEntryDetail(entryId: string) { return libraryEntryDetails.get(entryId); }
export async function updateLibraryEntryRating(entryId: string, rating: number) { return libraryEntryDetails.updateRating(entryId, rating); }
async function updatedDetail(updated: boolean, entryId: string) { return updated ? libraryEntryDetails.get(entryId) : null; }
export async function updateLibraryEntryAppreciationLevel(entryId: string, value: string) { return updatedDetail(await libraryEntryPreferences.updateAppreciationLevel(entryId, value), entryId); }
export async function updateLibraryEntryFavorite(entryId: string, value: unknown) { return updatedDetail(await libraryEntryPreferences.updateFavorite(entryId, value), entryId); }
export async function updateLibraryEntryStatus(entryId: string, value: string | null) { return updatedDetail(await libraryEntryPreferences.updateStatus(entryId, value), entryId); }
export async function updateLibraryEntryPersonalNote(entryId: string, value: string | null) { return updatedDetail(await libraryEntryPreferences.updatePersonalNote(entryId, value), entryId); }
export async function getConsumptionHistory(entryId: string) { return consumptionHistory.get(entryId); }
export async function recordConsumptionEvent(entryId: string, occurredAt: string) { return recordConsumption.record(entryId, occurredAt); }
export const createUserCollection = (name: string) => createCollection.create(name); export const listUserCollections = () => getCollections.list(); export const getUserCollection = (id: string) => getCollection.get(id); export const getCollectionsForEntry = (id: string) => getCollections.forEntry(id); export const addEntryToUserCollection = (collectionId: string, entryId: string) => addCollectionEntry.add(collectionId, entryId); export const removeEntryFromUserCollection = (collectionId: string, entryId: string) => removeCollectionEntry.remove(collectionId, entryId); export const deleteUserCollection = (id: string) => deleteCollection.delete(id);
