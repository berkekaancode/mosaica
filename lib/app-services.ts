import { prisma } from "@/lib/prisma";
import { LocalV0UserContext } from "@/src/infrastructure/local-v0-user-context";
import { PrismaContentRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-content-repository";
import { PrismaLibraryEntryRepository } from "@/src/infrastructure/persistence/prisma/repositories/prisma-library-entry-repository";
import { Content } from "@/src/domain/content/content";
import { LibraryEntry } from "@/src/domain/library-entry/library-entry";
import { EntityId } from "@/src/domain/shared/entity-id";
import { LibraryEntryDetailService } from "@/src/application/library-entry/library-entry-detail";

const owner = new LocalV0UserContext();
export async function listContents(query = "") { return prisma.content.findMany({ where: { title: { contains: query } }, orderBy: { createdAt: "desc" } }); }
export async function createContent(input: { title: string; mediaType: "MOVIE"|"TV_SERIES"|"GAME"|"BOOK" }) { const content=Content.create({id:EntityId.create(crypto.randomUUID()),...input}); await new PrismaContentRepository(prisma).save(content); return {id:content.properties.id.value}; }
export async function listLibrary() { const userId=await owner.getCurrentUserId(); const rows=await prisma.libraryEntry.findMany({where:{userId},include:{content:true,consumptionEvents:true},orderBy:{createdAt:"desc"}}); return rows.map(x=>({...x,consumptionCount:x.consumptionEvents.length})); }
export async function addToLibrary(contentId:string) { const userId=await owner.getCurrentUserId(); if(!await prisma.content.findUnique({where:{id:contentId}})) return null; const repo=new PrismaLibraryEntryRepository(prisma); if(await repo.existsForUserAndContent(userId,contentId)) throw new Error("CONFLICT"); const entry=LibraryEntry.create({id:EntityId.create(crypto.randomUUID()),userId:EntityId.create(userId),contentId:EntityId.create(contentId),archiveLocation:"ARCHIVE"});await repo.save(entry);return{id:entry.properties.id.value}; }
const libraryEntryDetails = new LibraryEntryDetailService(new PrismaLibraryEntryRepository(prisma), new PrismaContentRepository(prisma), owner);
export async function getLibraryEntryDetail(entryId: string) { return libraryEntryDetails.get(entryId); }
export async function updateLibraryEntryRating(entryId: string, rating: number) { return libraryEntryDetails.updateRating(entryId, rating); }
