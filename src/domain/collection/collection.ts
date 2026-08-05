import { DomainValidationError } from "@/src/domain/shared/domain-error";
import { EntityId } from "@/src/domain/shared/entity-id";
export class Collection { private constructor(readonly id: EntityId, readonly userId: EntityId, readonly name: string) {} static create(id: EntityId, userId: EntityId, name: string) { const normalized = name.trim(); if (!normalized) throw new DomainValidationError("Collection name is required."); return new Collection(id, userId, normalized); } }
