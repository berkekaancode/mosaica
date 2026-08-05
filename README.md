# Mosaica

Mosaica is a personal cultural archive platform for preserving a user's relationship with cultural works separately from shared metadata.

## Stack

Next.js, TypeScript, Prisma 7, SQLite, and Vitest.

## Local setup

Set `DATABASE_URL` in `.env` to a local SQLite URL (for example `file:./prisma/dev.db`), then run:

```bash
npm install
npm run prisma:generate
npm run prisma:migrate -- --name core_domain_foundation
npm run quality
```

Run unit tests with `npm run test:unit`. Architecture documentation is in `docs/architecture/`. The current implementation establishes the core Domain and persistence foundation; API and UI work are intentionally not included.
