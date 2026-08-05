# ADR 0001: Core Domain and Persistence Foundation

## Status

Accepted for the initial foundation.

## Context

Mosaica needs a local SQLite foundation with Domain code independent of Prisma and a visible Aggregate boundary between shared Content and a User's Library Entry.

## Architecture documents consulted

`01-mosaica-foundation`, `03-mosaica-domain-model`, `04-mosaica-database`, `05-mosaica-api-specification`, `06-mosaica-application-architecture`, `07-mosaica-security-architecture`, `09-mosaica-development-architecture`, `13-mosaica-final-architecture-review`, `14-mosaica-development-preparation`, and `15-mosaica-implementation-phase`.

## Decisions explicitly required by architecture

- Content and LibraryEntry are separate aggregates; personal state is stored only on LibraryEntry.
- LibraryEntry is unique per User and Content. Consumption events are dependent history and the counter is derived.
- Rating uses integer tenths to preserve the approved 0.0–10.0, one-decimal scale without floating-point drift.
- Rating, Appreciation Level, and Favorite remain separate: Appreciation Level is a required enum with a default of Liked; Favorite is an independent boolean preference.
- Content/User deletion is restrictive. Consumption events cascade only from their owning LibraryEntry.

## Reversible implementation decisions

- UUID strings are internal IDs and Prisma model names are singular while tables are plural snake case.
- SQLite stores enum-like values as validated strings; this keeps migration to PostgreSQL straightforward.
- Optional external identifiers are provider-neutral JSON serialized in one nullable column.
- Repository contracts exist only for User, Content, and LibraryEntry aggregates.

## Rejected alternatives

Provider-specific identifier columns, aggregate-crossing cascades, direct Prisma use in Domain/Application code, and persisted counters were rejected.

## Consequences and limitations

The current schema provides users, contents, library entries, collections, tags, shared metadata, explicit join tables, and consumption events. The Prisma schema engine returned an opaque error when asked to generate migration SQL, so the checked-in SQLite migration is a documented engine fallback that was applied successfully to a clean isolated SQLite database.

## Deferred decisions

Application services, API/UI, authentication, external enrichment, and PostgreSQL-specific enum/JSON migration are deferred.
