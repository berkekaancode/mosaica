import type { UserRepository } from "@/src/application/ports/user-repository";
import { EntityId } from "@/src/domain/shared/entity-id";
import { User } from "@/src/domain/user/user";
import type { PrismaClient } from "@/app/generated/prisma/client";
export class PrismaUserRepository implements UserRepository { constructor(private readonly client: PrismaClient) {} async findById(id: string): Promise<User | null> { const record = await this.client.user.findUnique({ where: { id } }); return record ? User.create(EntityId.create(record.id)) : null; } async save(user: User): Promise<void> { await this.client.user.upsert({ where: { id: user.id.value }, create: { id: user.id.value }, update: {} }); } }
