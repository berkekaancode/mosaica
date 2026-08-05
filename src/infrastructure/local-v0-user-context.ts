import { randomUUID } from "node:crypto";
import { prisma } from "@/lib/prisma";
import type { CurrentUserContext } from "@/src/application/local-user-context";
const LOCAL_OWNER_ID = "9e4d32e8-2f80-4d14-8f7a-2f8d8a760001";
export class LocalV0UserContext implements CurrentUserContext { async getCurrentUserId(): Promise<string> { await prisma.user.upsert({ where: { id: LOCAL_OWNER_ID }, create: { id: LOCAL_OWNER_ID }, update: {} }); return LOCAL_OWNER_ID; } }
export const localOwnerBootstrapToken = randomUUID;
