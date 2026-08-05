import { EntityId } from "@/src/domain/shared/entity-id";
export class User { private constructor(readonly id: EntityId) {} static create(id: EntityId): User { return new User(id); } }
