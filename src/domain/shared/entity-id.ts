import { DomainValidationError } from "./domain-error";
const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
export class EntityId { private constructor(readonly value: string) {} static create(value: string): EntityId { if (!UUID_PATTERN.test(value)) throw new DomainValidationError("An entity ID must be a valid UUID."); return new EntityId(value); } }
