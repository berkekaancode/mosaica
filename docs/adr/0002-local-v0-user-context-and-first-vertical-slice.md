# ADR 0002: Local v0.x User Context and Vertical Slice

## Status

Accepted for local development.

## Decision

A single deterministic local owner is resolved only through `LocalV0UserContext`. Authentication is deferred; browser clients never submit an owner ID. Route handlers call the application-facing service composition layer, which owns persistence composition. Future authentication replaces this context implementation without changing domain ownership rules.

## Validation and UI

Routes validate request shapes and return Turkish safe errors. The UI uses native accessible controls, responsive CSS, and no external assets.

## Limitations

This is local single-user mode, not production authentication. External metadata, social features, and cloud sync are deferred.
