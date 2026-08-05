# 00_Product_Bible.md

Document Status: Draft

Document Version: 1.0

Project Name: Mosaica

Tagline: Your Culture. Remembered.



# 1. Purpose of This Document

This document is the single source of truth for the identity, philosophy, vision, purpose and long-term direction of Mosaica.

Every other technical document inside this project must be consistent with this document.

If another document contradicts this document, this document has priority.

This document intentionally avoids implementation details.

Its purpose is not to explain how Mosaica will be built.

Its purpose is to explain why Mosaica exists, what problems it solves, what principles guide its evolution, and what kind of product it must become.

Future contributors, developers, AI coding assistants and project managers should read this document before reading any other project documentation.



# 2. Project Identity

## Product Name

Mosaica



## Product Type

Personal Cultural Archive Platform



## Product Category

Productivity

Personal Knowledge Management

Media Tracking

Personal Database



## Platform Strategy

Responsive First Progressive Web Application (PWA)

The product is designed to provide an excellent experience on desktop and mobile devices from the first public version.

No platform is considered secondary.



## Initial Release

Version 1 focuses on building the strongest possible foundation instead of the largest possible feature set.

The architecture must always prioritize scalability over short-term convenience.



# 3. Vision

Mosaica aims to become the user's permanent cultural memory.

Every movie watched.

Every TV series finished.

Every game played.

Every book read.

Every future media category.

Instead of disappearing inside human memory, these experiences become part of a structured, searchable and meaningful archive.

The application should continue growing with its user for years.

Its value should increase over time rather than decrease.

The longer someone uses Mosaica, the more valuable it becomes.

The archive is not temporary.

It represents a lifetime of cultural experiences.



# 4. Mission

Mosaica exists to eliminate one common problem:

People consume an enormous amount of cultural content during their lives, yet they slowly forget it.

Years later they ask themselves questions like:

- Have I already watched this movie?

- Did I like this game?

- What score did I give this book?

- Why did I enjoy this TV series?

- Which Christopher Nolan films have I already seen?

- What should I watch tonight?

- Which games are still waiting in my wishlist?

Human memory is not designed to permanently preserve thousands of cultural experiences.

Mosaica becomes the external memory that fills this gap.

The product should preserve not only the existence of consumed media but also the personal relationship between the user and every piece of media.



# 5. Problem Definition

Existing solutions usually focus on one of the following:

- movie tracking

- TV tracking

- gaming libraries

- book tracking

- recommendation systems

- social communities

Users are forced to spread their personal history across multiple services.

This creates several problems:

- fragmented information

- duplicated effort

- inconsistent ratings

- forgotten experiences

- missing historical context

Mosaica solves this by providing a single unified archive.

The archive is centered around the person, not around the media provider.

The product is not designed to compete with streaming platforms.

It is not designed to replace IMDb, Goodreads, Steam or Letterboxd.

Instead, it complements all of them.

Mosaica stores something those platforms cannot:

The user's personal cultural history.



# 6. Product Philosophy

Mosaica is not a tracking application.

It is not a checklist.

It is not a recommendation engine.

It is not a social media platform.

It is not an online marketplace.

It is not a streaming service.

Mosaica is a personal archive.

Every design decision must reinforce this identity.

If a future feature weakens this identity, the feature should be rejected regardless of how attractive it appears.

The product should always prioritize longevity over trends.

It should remain useful ten years from now.

Temporary technology trends should never define the product.

The archive itself is the product.

Everything else exists to support it.



# 7. Long-Term Product Philosophy

Mosaica follows one fundamental belief:

Culture becomes more valuable when it is remembered.

People rarely remember every detail of what they consume.

However, they usually remember how a work made them feel.

Because of this, Mosaica does not only preserve titles.

It preserves personal meaning.

Ratings.

Notes.

Favorites.

Collections.

Memories.

Statistics.

Relationships.

All these pieces together create something much more valuable than a simple list.

They create a personal cultural identity.

Every new entry should strengthen that identity.

The application should therefore evolve as a living archive instead of becoming an ever-growing database.





# 8. Core Principles

The following principles are permanent.

These principles are not temporary implementation preferences.

They define the identity of Mosaica and should guide every future design, development and product decision.

Changing any of these principles requires an explicit product-level architectural decision.



## 8.1 Problem First Principle

Every new feature proposal must follow this order:

Problem

↓

Goal

↓

System

↓

Architecture

↓

Feature

Features must never become the starting point.

The product exists to solve problems.

Features are only tools.

Whenever discussions begin with:

"Wouldn't it be cool if..."

the discussion should immediately return to:

"Which problem does this solve?"

If no meaningful problem exists, the feature should not be implemented.



## 8.2 MVP Discipline

Version 1 is not intended to become the largest possible application.

It is intended to become the smallest complete application.

Every feature must answer one question:

Can the product successfully fulfill its purpose without this feature?

If the answer is yes, the default decision is:

Move it to a future version.

Complexity should never be added without measurable value.

Small products evolve.

Large unfinished products fail.



## 8.3 User Data First

The user's archive is the most valuable asset inside Mosaica.

Every architectural decision must prioritize protecting user data.

The application must never create unnecessary risk of data loss.

Whenever two implementation options exist, the safer option should be preferred over the simpler one.

Examples include:

- export support

- recoverable deletion

- permanent IDs

- consistent backups

- reliable synchronization

The application exists to preserve memories.

Destroying those memories is considered one of the highest severity failures.



## 8.4 Living Archive Principle

Mosaica should never become a passive storage application.

The archive must actively reconnect the user with their own cultural history.

Instead of waiting for users to search manually, the application should periodically surface meaningful information already stored inside the archive.

Examples include:

- memories

- forgotten wishlist items

- monthly summaries

- personal recommendations

- rediscovery features

The archive should feel alive.

The goal is not to increase screen time.

The goal is to increase the long-term value of the archive.



## 8.5 Responsive First

Mosaica is designed for both desktop and mobile from the beginning.

Desktop is not a secondary platform.

Mobile is not a secondary platform.

Layouts may change.

Navigation may change.

Interaction patterns may change.

However, functionality must remain equivalent.

Users should never feel forced to switch devices in order to access important functionality.



## 8.6 Simplicity First

Power should come from good design.

Not from overwhelming interfaces.

If two solutions solve the same problem equally well, the simpler solution should always be preferred.

The interface should reduce cognitive load.

Complex internal architecture is acceptable.

Complex user experience is not.



## 8.7 Consistency First

Every screen should feel like part of the same application.

Buttons.

Terminology.

Colors.

Navigation.

Interactions.

Animations.

Feedback.

Everything should remain internally consistent.

Users should not need to relearn the application after moving between screens.



# 9. Product Boundaries

Defining what Mosaica is not is as important as defining what it is.

The following capabilities are intentionally outside the scope of Mosaica.



## Mosaica is NOT

A streaming platform.

A social media platform.

A review website.

A content discovery marketplace.

An online store.

A torrent application.

A piracy platform.

A movie database intended to replace IMDb.

A game launcher.

A reading platform.

A recommendation platform driven by public trends.



Instead,

Mosaica is a personal archive built around one person's relationship with culture.

Future features must strengthen this identity rather than compete with specialized platforms.



# 10. Success Definition

The success of Mosaica should never be measured only by downloads or active users.

The primary success metric is different.

A successful Mosaica user should eventually think:

"If I lose this archive, I lose part of my cultural memory."

This emotional attachment is intentional.

It means the application has become valuable.

Secondary success indicators include:

- fast content entry

- high archive completeness

- long-term user retention

- frequent archive rediscovery

- meaningful statistics

- trusted data preservation

The application should become more valuable every year it is used.



# 11. Product Lifetime

Mosaica is not designed around annual releases.

It is designed around decades.

Every database decision.

Every architecture decision.

Every documentation decision.

Should assume that users may continue using the product for ten years or longer.

This philosophy affects:

- scalability

- migrations

- backups

- identifiers

- documentation

- export formats

- maintainability

Short-term convenience should never compromise long-term reliability.



# 12. Evolution Strategy

Mosaica will evolve continuously.

However, growth should remain controlled.

New features must satisfy at least one of the following conditions:

- solve a recurring user problem

- improve archive quality

- improve usability

- reduce user effort

- improve data integrity

- improve long-term maintainability

Features that only increase complexity without strengthening the product should be rejected.

Growth should be intentional.

Not accidental.

# 13. Product Decision Framework

Every future product decision shall be evaluated through the following decision framework.

No feature, architectural change or design proposal should bypass these questions.



## Step 1 — Problem Validation

The first question is never:

"Is this feature interesting?"

The first question is:

"Which real problem does this solve?"

If no meaningful problem can be identified, the proposal should normally be rejected.

Ideas alone are not sufficient justification.



## Step 2 — User Value

The proposal must provide measurable value for the user.

Possible values include:

- reducing effort

- improving organization

- preserving information

- improving discoverability

- improving decision making

- improving archive quality

- improving usability

If the value cannot be clearly described, the proposal should not proceed.



## Step 3 — Identity Check

Every proposal must answer:

Does this strengthen Mosaica as a personal cultural archive?

If the proposal changes the product into something fundamentally different, it should be rejected.

Examples:

Adding a better archive search:

✓ strengthens identity.

Adding a social feed:

✗ weakens identity.



## Step 4 — Complexity Check

Every additional feature introduces maintenance cost.

Therefore the following question must always be asked:

Does the value justify the additional complexity?

Complexity is considered a cost.

Not a benefit.



## Step 5 — Timing Check

A feature may be valuable but still belong to a later release.

Questions:

Should this exist?

and

Should this exist now?

are different questions.

If delaying the feature does not weaken Version 1, the default decision is postponement.



# 14. Permanent Architecture Rules

The software architecture must remain stable over the lifetime of the project.

Temporary shortcuts should never become permanent foundations.

The following rules are considered permanent architectural principles.



## Single Source of Truth

Every piece of information should have exactly one authoritative owner.

Example:

The title of a movie should exist only once.

Ratings belong to the user.

Movie metadata belongs to the content.

Duplicating information increases maintenance cost and inconsistency.



## Separation of Content and Experience

One of the most important architectural decisions of Mosaica is the distinction between:

Content

and

Library Entry.

Content represents the media itself.

Library Entry represents the user's personal relationship with that media.

This separation must never be removed.

It enables:

- multiple users

- efficient storage

- clean architecture

- future scalability



## Stable Identifiers

Every permanent entity must receive an internal identifier.

Identifiers are never shown to regular users.

Identifiers should never change after creation.

Names may change.

IDs must not.



## Extensibility

The architecture should expect future media categories.

Adding:

Music

Podcasts

Comics

Board Games

or any future category

should require minimal structural changes.

Version 1 begins with:

Movies

TV Series

Games

Books

Future expansion has already been considered in the architecture.



# 15. Information Ownership

Every type of information belongs to exactly one owner.

Examples:

Movie release year

→ Content

User rating

→ Library Entry

Favorite status

→ Library Entry

Director

→ Content

Cover image

→ Content

Personal note

→ Library Entry

Collection membership

→ Library Entry

Tag

→ Library Entry

Wishlist status

→ Library Entry

This rule prevents duplicated information and inconsistent behavior.



# 16. Documentation Philosophy

Documentation is considered part of the product.

Documentation is not optional.

Documentation is not written after development.

Documentation drives development.

If code and documentation disagree:

The documentation should be reviewed first.

The goal is not to document existing code.

The goal is to build code that follows the documentation.



## Documentation Quality Standard

Every document produced for Mosaica should satisfy the following criteria:

- complete

- understandable

- consistent

- versioned

- maintainable

- implementation-oriented

Documents should avoid unnecessary repetition.

Whenever possible, a document should reference another document instead of duplicating its content.



# 17. Naming Philosophy

Names are part of the architecture.

Poor naming creates long-term maintenance problems.

Every name inside the project should be:

- meaningful

- unambiguous

- future-proof

- easy to understand

- consistent

Internal names should use English.

User-facing interface language is independent from internal naming.



# 18. Data Ownership Philosophy

Users own their personal archive.

Mosaica stores the archive.

It does not own it.

This principle affects future decisions regarding:

- export

- backups

- migrations

- portability

- account deletion

Users should always have a reasonable way to retrieve their personal data.

The application should never intentionally lock users into the platform.

# 19. User Experience Philosophy

User experience is not decoration.

It is one of the core features of Mosaica.

Users should never feel overwhelmed.

The application should remain approachable regardless of archive size.

Whether a user has:

- 20 entries

- 500 entries

- 10,000 entries

the experience should remain organized and understandable.

The interface should encourage confidence.

Users should always know:

- where they are,

- what they can do next,

- and how to return.

Every interaction should minimize unnecessary effort.

The ideal interaction is the one that requires the fewest steps without sacrificing clarity.



## Fast Interaction Principle

The archive is expected to grow for many years.

Therefore frequent actions must become effortless.

Examples include:

- adding new content,

- rating content,

- updating notes,

- moving entries between Archive and Wishlist,

- filtering,

- searching.

The application should optimize for repeated use rather than occasional use.



## Emotional Design

Mosaica should create emotional attachment.

Not through gamification.

Not through addiction.

But through personal meaning.

The archive should gradually become irreplaceable because it represents the user's own cultural journey.

The interface should celebrate memories rather than compete for attention.



# 20. API Integration Philosophy

External APIs are used to reduce manual work.

They are convenience providers.

They are not sources of truth for user data.

Metadata such as:

- titles,

- release years,

- posters,

- genres,

- creators,

- cast,

may be retrieved automatically.

However:

User ratings,

personal notes,

favorite status,

collections,

tags,

wishlist status,

and every personal decision

always belong to the user.

The application must continue functioning even if an external API changes or becomes temporarily unavailable.

Dependencies should remain replaceable.

No external service should become impossible to substitute.



# 21. Security Philosophy

Security is considered part of user trust.

The application stores personal history accumulated over many years.

Therefore:

Data integrity is more important than development speed.

The following principles apply:

- authenticated access,

- secure communication,

- protected user data,

- recoverable deletion,

- permanent identifiers,

- least-privilege access.

The application should avoid unnecessary collection of personal information.

Only data required to provide the service should be stored.



# 22. Future Development Philosophy

Mosaica is designed to evolve continuously.

However, evolution must remain disciplined.

Every new feature should improve one or more of the following:

- archive quality,

- user experience,

- long-term maintainability,

- data quality,

- discoverability,

- personal value.

Features should not exist simply because competitors have them.

Competitive imitation is not a product strategy.

Identity-driven development is.



# 23. Product Evolution Rules

Future versions should preserve backward compatibility whenever reasonably possible.

Existing user archives must remain usable after updates.

Migration paths should always be planned before structural changes.

Breaking changes require explicit justification.

Every new version should make previous archives more valuable rather than obsolete.



# 24. Definition of Success

Mosaica succeeds when users begin trusting it more than their own memory.

The archive should become the first place users check when they ask themselves questions such as:

- Have I watched this before?

- What did I think about it?

- Why did I rate it this way?

- What should I experience next?

- Which creator has impressed me the most?

- Which forgotten favorite deserves another chance?

The ultimate goal is not engagement.

The ultimate goal is confidence.

Users should feel that their cultural life is safe, organized and always accessible.



# 25. Closing Declaration

Mosaica is built on a simple belief:

People spend their lives collecting experiences.

Most applications focus on delivering the next experience.

Mosaica focuses on preserving every meaningful experience that already happened and every future experience that matters.

The product exists to transform scattered memories into a permanent cultural archive.

Technology will change.

Media formats will evolve.

Platforms will come and go.

But the value of remembered experiences will remain.

That is why Mosaica exists.

# 26. Product Governance

The Product Bible is the permanent constitutional document of Mosaica.

Its purpose is to preserve the product's identity over the lifetime of the project.

This document must remain stable.

Temporary ideas, implementation details and experimental concepts must never be added to this document.

Only long-term product truths belong here.

Changes to this document require explicit architectural approval.

Every approved modification must:

- include a clear justification,

- be versioned,

- preserve internal consistency,

- be reflected in dependent documentation where necessary.

The Product Bible is not expected to change frequently.

Frequent changes indicate unstable product direction and should trigger a product-level review before approval.



# 27. Decision Hierarchy

Whenever multiple design or development options exist, decisions must follow the hierarchy below.

Higher priorities always override lower priorities.

1. Product Identity

2. Core Principles

3. User Data Safety and Integrity

4. Long-Term Maintainability

5. Architectural Consistency

6. User Experience

7. Performance

8. Development Convenience

9. New Features

This hierarchy exists to protect Mosaica from uncontrolled feature growth and architectural drift.

If a proposed feature conflicts with a higher-level principle, the principle takes precedence.

The default answer to new feature requests is not "yes."

The default process is:

- Identify the problem.

- Validate the value.

- Verify alignment with product identity.

- Evaluate architectural impact.

- Decide the appropriate release version.

- Approve or reject the proposal.

This framework ensures that Mosaica grows intentionally rather than accidentally.















# 01_Product_Glossary.md

## Part 1 of ?

Document Status: Draft

Document Version: 1.0

Project: Mosaica



# Purpose of This Document

The Product Glossary defines the official vocabulary of Mosaica.

Every product document, architectural document, database specification, user interface specification and development task must use these definitions consistently.

Each concept has one official meaning.

Alternative interpretations should not exist.

The glossary intentionally defines business concepts rather than technical implementation details.

Technical terminology belongs to technical documentation.

This document defines the language of the product itself.



# Section A — Core Concepts



# User

## Definition

A User is a person who owns and manages a personal cultural archive inside Mosaica.

Every archive belongs to exactly one User.

A User is the owner of all personal information stored within their archive.



## Purpose

The User represents the owner of personal experiences rather than the consumer of public content.

All personal decisions originate from the User.

Examples include:

- ratings

- notes

- favorites

- collections

- tags

- wishlist

- archive entries



## Contains

A User owns:

- personal archive

- wishlist

- collections

- statistics

- dashboard

- settings

- personal preferences



## Does Not Contain

A User does not own Content.

Content exists independently.

Multiple users may reference the same Content while maintaining completely different personal experiences.



## Relationships

One User

↓

Owns many Library Entries.

One User

↓

Owns many Collections.

One User

↓

Owns many Tags.



## Examples

Berke

Ahmet

Ayşe

Every registered account represents one User.



# Content

## Definition

Content represents a cultural work that exists independently of any user.

Content is not personal.

It describes the media itself.

Examples include:

- movies

- TV series

- games

- books

Future versions may introduce additional content categories.



## Purpose

Content exists to eliminate duplicated media information.

Instead of storing movie information separately for every user, Content acts as the shared source of media metadata.



## Contains

Content may include:

- title

- original title

- release year

- media type

- genres

- creators

- cast

- cover image

- description

- runtime

- publisher

- developer

- platform-independent metadata



## Does Not Contain

Content never contains:

- ratings

- notes

- favorites

- wishlist status

- archive status

- personal tags

- personal collections

- rewatch count

- consumption history

These belong to Library Entry.



## Relationships

One Content

↓

May be referenced by many Library Entries.

One Content

↓

May contain multiple Genres.

One Content

↓

May contain multiple Persons.

One Content

↓

May belong to one or more Series or Universes.



## Examples

Interstellar

Breaking Bad

The Witcher 3

The Lord of the Rings

Suç ve Ceza

Each exists only once inside the system.



# Library Entry

## Definition

A Library Entry represents one User's personal relationship with one specific Content.

This is the central concept of Mosaica.

The archive is not built around Content.

The archive is built around Library Entries.



## Purpose

Library Entry stores everything that is personal.

Without Library Entry, Mosaica would become only a media database.

Library Entry transforms a media database into a personal archive.



## Contains

A Library Entry may contain:

- rating

- note

- favorite level

- status

- archive location

- wishlist status

- consumption date

- rewatch count

- custom tags

- collection membership

- personal timestamps

- creation date

- last updated date



## Does Not Contain

Library Entry never stores:

- movie release year

- game developer

- actors

- genres

- cover image

- official metadata

Those belong to Content.



## Relationships

One Library Entry

↓

Belongs to one User.

One Library Entry

↓

References one Content.

One Library Entry

↓

May belong to multiple Collections.

One Library Entry

↓

May contain multiple Tags.



## Examples

Interstellar

Rating:

9.8

Favorite:

Legendary

Status:

Completed

Personal Note:

"Still Nolan's masterpiece."

This information belongs entirely to the Library Entry.

Another user may have:

Rating:

6.5

Favorite:

None

Different note.

Same Content.

Different Library Entry.



# Media Type

## Definition

Media Type defines the primary category of a Content.

Every Content belongs to exactly one Media Type.

Media Types classify what the content fundamentally is.



## Purpose

Media Type determines:

- available fields,

- available behaviors,

- terminology used throughout the interface,

- statistics,

- filters,

- archive organization.



## Current Media Types

Version 1 includes:

- Movie

- TV Series

- Game

- Book

Future versions may introduce additional Media Types without changing the existing architecture.



## Does Not Contain

Media Type is not a Genre.

Media Type answers:

What is this?

Genre answers:

What kind of experience does it provide?

Example:

Movie

Genre:

Science Fiction

Movie is the Media Type.

Science Fiction is the Genre.







# Section B — Archive Concepts



# Archive

## Definition

Archive represents the collection of Library Entries that belong to a User's permanent cultural history.

An item enters the Archive when the User decides it belongs to their personal cultural record.

The Archive is the core destination of Mosaica.



## Purpose

The Archive preserves the User's completed or intentionally stored cultural experiences.

It is designed for long-term organization, rediscovery and reflection.

The Archive becomes more valuable as it grows.



## Contains

Archive entries may contain:

- completed content

- abandoned content

- paused content

- unfinished content

provided the User intentionally decides to keep them.

The Archive is defined by ownership, not by completion.



## Does Not Contain

The Archive does not contain items that exist only as future intentions.

Those belong to the Wishlist.



## Common Misunderstandings

Archive does not mean:

"Everything that has been completed."

A partially watched TV series may belong to the Archive.

An unfinished book may belong to the Archive.

A dropped game may belong to the Archive.

The Archive reflects the User's history, not only completed experiences.



## Relationships

Archive consists of Library Entries.

Archive belongs to exactly one User.

Archive may contain every supported Media Type.



## Examples

Interstellar

Completed

Stored in Archive.



Elden Ring

Paused after 40 hours.

Still stored in Archive.



The Hobbit

Read halfway.

User decided to keep progress.

Stored in Archive.



# Wishlist

## Definition

Wishlist contains cultural works that the User intends to experience in the future.

Wishlist represents future intentions rather than personal history.



## Purpose

Wishlist prevents interesting content from being forgotten before consumption.

It serves as a planning area for future cultural experiences.



## Contains

Wishlist may include:

- movies to watch

- games to play

- books to read

- TV series to start



## Does Not Contain

Wishlist should not contain content that the User has already decided belongs to their Archive.

Normally, a Library Entry belongs to either the Archive or the Wishlist.



## Common Misunderstandings

Wishlist is not a recommendation system.

Wishlist is not a bookmark list created by the application.

Wishlist exists because the User explicitly chose to save something for later.



## Relationships

Wishlist consists of Library Entries.

Each Wishlist item belongs to exactly one User.



## Examples

Dune: Messiah

Waiting to be released.

Wishlist.



Disco Elysium

Planned to play.

Wishlist.



# Trash

## Definition

Trash is a temporary recovery area for deleted Library Entries.

Deleted items are never removed immediately from the database.

Instead, they are moved into the Trash.



## Purpose

Prevent accidental permanent data loss.

Allow recovery of mistakenly deleted entries.

Provide a safer archive management experience.



## Contains

Deleted Library Entries.

Deletion timestamps.

Recovery information.



## Does Not Contain

Trash does not permanently own deleted information.

It acts as a temporary holding area before final deletion.



## Common Misunderstandings

Deleting an item from the Archive does not immediately destroy it.

Deletion occurs in two stages:

Stage 1

Archive

↓

Trash

Stage 2

Trash

↓

Permanent deletion

This behaviour is intentional.



## Relationships

Trash belongs to exactly one User.

Only the owning User may restore or permanently delete items.



# Archive Location

## Definition

Archive Location defines where a Library Entry currently resides.

Every Library Entry must exist in exactly one primary location.



## Current Locations

Archive

Wishlist

Trash



## Purpose

Archive Location allows the application to separate:

Past experiences

Future intentions

Deleted entries

without duplicating data.



## Common Misunderstandings

Archive Location is not the same as Status.

Example:

Archive Location

Archive

Status

Paused

This is perfectly valid.



## Relationships

Every Library Entry always has one Archive Location.

Never zero.

Never multiple.



# Status

## Definition

Status describes the User's current progress or relationship with a Library Entry.

Status represents progression.

Not storage.



## Purpose

Status allows users to understand where they currently stand with a cultural work.



## Initial Status Set (Version 1)

Completed

Paused

Dropped

In Progress



## Does Not Contain

Status does not indicate whether something belongs to Archive or Wishlist.

That decision belongs to Archive Location.



## Common Misunderstandings

Status and Archive Location are intentionally independent.

Example:

Movie

Status:

Completed

Archive Location:

Archive



Game

Status:

Paused

Archive Location:

Archive



Book

Status:

In Progress

Archive Location:

Wishlist

This may occur if the User decides to move it later.

The system should allow such flexibility instead of forcing artificial restrictions.





# Section C — Personal Evaluation Concepts



# Rating

## Definition

Rating represents the User's personal numerical evaluation of a Library Entry.

It reflects the User's subjective opinion.

Ratings are never considered objective truth.

Each User independently evaluates Content according to personal taste.



## Purpose

Ratings allow users to remember not only what they consumed but also how much they appreciated it.

Ratings power:

- statistics

- rankings

- sorting

- recommendations

- archive insights



## Rating Scale

Version 1 uses a decimal ten-point scale.

Minimum:

0.0

Maximum:

10.0

Precision:

One decimal place.

Examples:

6.4

7.8

8.0

9.9

10.0



## Rules

Every Library Entry has at most one current Rating.

Users may update Ratings at any time.

Updating a Rating replaces the previous Rating.

Historical Rating tracking is outside Version 1.



## Does Not Contain

Rating is not:

- Favorite Level

- Review

- Note

- Recommendation

A low Rating may still belong to a favorite actor.

A high Rating does not automatically make something a Favorite.



## Common Misunderstandings

Users often confuse Rating with personal attachment.

Example:

Movie

Rating:

8.3

Favorite:

No

Perfectly valid.



Movie

Rating:

7.1

Favorite:

Legendary

Also valid.

Personal emotional value and perceived quality are different concepts.

Mosaica intentionally separates them.



# Favorite Level

## Definition

Favorite Level represents emotional attachment rather than quality evaluation.

It expresses how personally important a Library Entry is to the User.



## Purpose

Favorite Levels allow users to distinguish between:

"Very good."

and

"I love this."



## Version 1 Levels

Disliked

Liked

Favorite

Legendary



## Rules

Every Library Entry has exactly one Favorite Level.

Default value:

Liked

Users may change Favorite Levels at any time.



## Does Not Depend On

Favorite Level is independent from:

Rating

Status

Collections

Tags

Consumption count



## Common Misunderstandings

Favorite is not automatically calculated.

The application never decides what is Favorite.

Only the User can decide.



# Personal Note

## Definition

A Personal Note stores the User's own thoughts regarding a Library Entry.

Notes are optional.



## Purpose

Help users remember:

- feelings

- impressions

- opinions

- memorable moments

- reasons behind Ratings



## Rules

One Library Entry stores one current Personal Note.

Users may edit Notes without restrictions.

Historical Note versions are outside Version 1.



## Does Not Contain

Personal Notes are not:

public reviews,

critic reviews,

social comments.

They exist only for the owner.



## Common Misunderstandings

Notes do not need to explain Ratings.

A Rating answers:

"How much?"

A Note answers:

"Why?"



# Consumption Date

## Definition

Consumption Date records when the User experienced a Library Entry.

The date is optional.



## Purpose

Improve:

statistics,

memories,

timeline features,

monthly summaries.



## Rules

Users are never forced to enter a Consumption Date.

If unknown, the field remains empty.

Unknown dates are considered valid information.

Guessing incorrect dates is discouraged.



## Common Misunderstandings

An empty Consumption Date does not indicate missing data.

It indicates that the User intentionally does not know or remember the exact date.

This distinction is important.



# Consumption Counter

## Definition

Consumption Counter records how many separate times the User experienced the same Content.

Depending on the Media Type, the interface terminology changes.

Movie

↓

Watch Count

TV Series

↓

Watch Count

Game

↓

Play Count

Book

↓

Read Count

Internally these represent the same concept.



## Purpose

Track repeated cultural experiences without creating duplicate Library Entries.



## Rules

A User owns only one Library Entry per Content.

Repeated experiences increase the Consumption Counter.

Users may optionally update:

Rating

Favorite Level

Note

after additional experiences.



## Common Misunderstandings

Repeated consumption never creates duplicate archive entries.

One Content

↓

One Library Entry

↓

Many experiences

This rule is permanent.



# Personal Ranking

## Definition

Personal Ranking represents ordering generated from the User's own Ratings.

It is not manually maintained.



## Purpose

Allow users to answer questions such as:

"My highest rated movies."

"My favorite books."

"My top games."

without manually building lists.



## Rules

Rankings are dynamic.

Whenever Ratings change,

Rankings automatically update.



## Does Not Contain

Rankings are derived information.

They are never manually edited.

# Section D — Organization Concepts



# Genre

## Definition

A Genre describes the thematic nature of a Content.

Genres are objective classifications.

They describe what the Content is generally recognized as.

Genres belong to the Content itself.

Not to the User.



## Purpose

Genres improve:

- searching,

- filtering,

- browsing,

- statistics,

- recommendations.



## Rules

One Content may have multiple Genres.

Genres are shared by all Users.

Users cannot create personal Genres.



## Examples

Science Fiction

Drama

Fantasy

Thriller

Action

Comedy

Mystery



## Does Not Contain

Genres do not describe personal opinions.

Genre is not:

Favorite

Tag

Collection



## Common Misunderstandings

Genre answers:

What kind of work is this?

It does not answer:

What does this mean to me?



# Tag

## Definition

A Tag is a personal label created by the User.

Tags are completely personal.

Different Users may use completely different Tags for the same Content.



## Purpose

Allow flexible personal organization.

Tags help users organize their archive according to their own thinking.



## Examples

Mind-blowing

Comfort Movie

Christmas

Date Night

Underrated

Masterpiece

To Discuss

Childhood

Philosophy



## Rules

Users may create unlimited Tags.

One Library Entry may have multiple Tags.

Tags belong to the User.

Not to the Content.



## Does Not Contain

Tags are not Genres.

Tags are not Collections.

Tags are not Status.



## Common Misunderstandings

Genre:

Science Fiction

Tag:

Mind-blowing

Both may exist simultaneously.



# Collection

## Definition

A Collection is a user-defined group of Library Entries created around a personal purpose.

Collections represent intentional organization.



## Purpose

Collections allow users to create meaningful groups beyond metadata.



## Examples

Best of Nolan

2026 Favorites

Movies to Rewatch

Best Detective Stories

Co-op Games

Books That Changed My Life



## Rules

One Library Entry may belong to multiple Collections.

Collections belong to the User.

Collections may contain different Media Types unless restricted by the User.



## Does Not Contain

Collections do not replace Genres.

Collections do not replace Tags.

Collections are curated by the User.



## Common Misunderstandings

Genre:

Drama

Collection:

Best Courtroom Movies

These are completely different concepts.



# Series

## Definition

A Series represents works released as parts of the same sequence.

The relationship is structural.

Not thematic.



## Purpose

Allow users to navigate between related works.



## Examples

Harry Potter

The Lord of the Rings

Mass Effect

Dark Souls

John Wick



## Rules

One Content may belong to one Series.

Series may contain many Contents.



## Does Not Contain

Series does not describe fictional universes.

Series describes release relationships.



## Common Misunderstandings

Series asks:

"What comes before or after this?"

Not:

"What world does this belong to?"



# Universe

## Definition

A Universe represents the fictional world shared by multiple Contents.

Unlike Series, a Universe focuses on lore and continuity.



## Purpose

Connect works sharing the same fictional setting.



## Examples

Marvel Cinematic Universe

Star Wars

Middle-earth

The Witcher

Warhammer 40,000



## Rules

A Universe may contain multiple Series.

A Series normally belongs to one Universe.

Some Contents may belong to a Universe without belonging to a traditional Series.



## Common Misunderstandings

Series:

The Hobbit Trilogy

Universe:

Middle-earth

Different concepts.

Both may exist simultaneously.



# Person

## Definition

A Person represents a real individual associated with a Content.



## Purpose

Allow browsing and searching across creators and contributors.



## Examples

Christopher Nolan

Ryan Reynolds

J. R. R. Tolkien

Hideo Kojima

Hans Zimmer



## Rules

One Person may participate in many Contents.

One Content may include many Persons.



## Does Not Contain

Persons are not Favorites by default.

A User may personally favorite a Person independently of any specific Content.

This is an intentional design decision.



# Role

## Definition

Role describes the relationship between a Person and a Content.



## Examples

Director

Actor

Author

Composer

Developer

Publisher

Producer

Narrator



## Purpose

Allow searching by contribution.

Example:

All movies directed by Christopher Nolan.

All books written by Stephen King.



## Rules

One Person may have multiple Roles.

One Content may contain multiple Persons with different Roles.

Harika.

Bu bölümle birlikte Glossary'nin en önemli kısmına geliyoruz.

Çünkü burada artık Mosaica'yı diğer arşiv uygulamalarından ayıran kavramları tanımlıyoruz.

Ve bu bölümü yazarken çok önemli bir karar daha aldım:

Bazı kavramlar "özellik" değil, ürün kimliğinin bir parçasıdır.

Örneğin "Memory" veya "Living Archive" aslında bir özellik değildir.

Onlar ürünün davranış biçimidir.

Bu ayrımı özellikle koruyacağım.



# 01_Product_Glossary.md

## Part 5 of ?



# Section E — Discovery & Experience Concepts



# Dashboard

## Definition

The Dashboard is the primary home screen of Mosaica.

It provides a personalized overview of the User's archive rather than acting as a navigation menu.

The Dashboard changes over time as the archive evolves.



## Purpose

Allow users to immediately understand the current state of their archive.

Surface useful information without requiring manual searching.

Encourage rediscovery.

Reduce decision fatigue.



## May Display

- archive overview

- wishlist overview

- recent activity

- statistics

- memories

- forgotten items

- recommendations

- monthly summaries

- quick actions



## Does Not Contain

The Dashboard is not a complete archive view.

It summarizes information.

It does not replace Archive browsing.



# Statistics

## Definition

Statistics represent automatically calculated insights generated from the User's archive.

Statistics never require manual maintenance.



## Purpose

Transform personal data into meaningful information.

Help users understand long-term patterns.



## Examples

Average Rating

Highest Rated Movie

Favorite Genre

Most Watched Director

Most Played Game Genre

Favorite Author

Total Library Size

Completion Ratios

Average Rating per Media Type



## Rules

Statistics are always generated.

Users never manually edit statistics.



## Common Misunderstandings

Statistics are derived information.

They are never primary data.

Changing a Rating changes Statistics automatically.



# Memory

## Definition

A Memory is a rediscovered moment from the User's archive.

Memories reconnect Users with previous experiences.



## Purpose

Strengthen emotional attachment to the archive.

Encourage reflection.

Create long-term value.



## Examples

Three years ago today...

You watched:

Interstellar

Rating:

9.8

Personal Note:

"This soundtrack still gives me chills."



## Rules

Memories are generated automatically.

Users do not manually create Memories.



## Does Not Contain

Memories are not notifications.

They are moments of rediscovery.



# Monthly Culture Summary

## Definition

A Monthly Culture Summary is an automatically generated report describing the User's cultural activity during a calendar month.



## Purpose

Allow reflection on personal habits.

Provide historical snapshots.

Increase archive value.



## May Include

Movies watched

Games played

Books read

TV Series started

Average Rating

Favorite Genre

Favorite Creator

New Favorites

Consumption Trends



## Rules

Summaries are generated from Library Entries.

Users do not manually edit summaries.



# What Should I Do Today?

## Definition

"What Should I Do Today?" is a decision assistance feature.

It helps Users choose their next cultural experience.



## Purpose

Reduce decision fatigue.

Encourage Wishlist usage.

Promote archive rediscovery.



## User Flow

Choose Media Type

↓

Choose Source

Archive

or

Wishlist

↓

Optional Filters

↓

Random Selection



## Rules

Selections always originate from the User's own archive.

The application never recommends content the User has not already stored.



## Common Misunderstandings

This is not an AI recommendation engine.

It is an archive navigation feature.

The User has already decided that every available option deserves consideration.

The feature simply helps choose among them.



# Living Archive

## Definition

Living Archive is the core behavioral philosophy of Mosaica.

It describes how the application actively reconnects Users with their own cultural history.



## Purpose

Prevent the archive from becoming passive storage.

Encourage continuous interaction.

Increase long-term archive value.



## Living Archive Features

Examples include:

Memories

Forgotten Wishlist

Monthly Summaries

Today's Recommendation

Recently Forgotten Categories

Personal Statistics

Rediscovery Cards



## Rules

Living Archive should never manipulate Users into unnecessary engagement.

Its purpose is assistance.

Not addiction.



## Common Misunderstandings

Living Archive is not gamification.

It does not use streaks.

It does not use artificial rewards.

It does not create fear of missing out.

It creates meaningful reconnection.



# Metadata

## Definition

Metadata describes objective information about Content.

Metadata is normally retrieved from external providers.



## Examples

Title

Original Title

Release Year

Poster

Runtime

Genres

Developers

Actors

Authors

Studios

Publishers



## Rules

Metadata belongs to Content.

Metadata never belongs to Library Entry.



## Common Misunderstandings

Metadata may change.

Personal information must never be overwritten by Metadata updates.



# Search

## Definition

Search allows Users to locate Library Entries or Content using structured queries.



## Purpose

Provide immediate access to large archives.



## Search Sources

Content Title

Original Title

Persons

Collections

Tags

Genres

Series

Universe

Personal Notes



## Rules

Search results should prioritize relevance.

Not alphabetical order alone.



# Filtering

## Definition

Filtering temporarily limits visible Library Entries according to selected conditions.



## Examples

Media Type

Genre

Favorite Level

Rating Range

Status

Collections

Tags

Archive Location



## Rules

Filtering never changes data.

Filtering only changes visibility.



## Common Misunderstandings

Search answers:

"What am I looking for?"

Filtering answers:

"What do I want to see?"

Both may be combined.

Harika.

Bu bölümle birlikte 01_Product_Glossary.md tamamlanıyor.

Ve şunu söyleyebilirim:

Product Bible ürünün anayasasıydı.

Product Glossary ise ürünün ortak dili oldu.

Bence bu belge, ileride Codex'e en çok yardımcı olacak ilk üç belgeden biri olacak.



# 01_Product_Glossary.md

## Part 6 of 6



# Section F — Recommendation & Personal Preference Concepts



# Recommendation

## Definition

A Recommendation is a suggestion generated exclusively from the User's own archive.

Recommendations exist to reduce decision fatigue, not to discover unknown content.



## Purpose

Help the User make use of an already curated personal library.

Encourage rediscovery.

Increase the practical value of the archive.



## Sources

Recommendations may originate from:

- Wishlist

- Archive

- Favorite Collections

- Random Selection

- Personal Statistics

- Forgotten Entries

- Recently Neglected Categories



## Rules

Recommendations must never prioritize sponsored, commercial or trending content.

Recommendations are always centered around the User's own archive.

Future versions may optionally introduce external discovery systems, but those remain outside the scope of Version 1.



## Common Misunderstandings

Recommendation is not:

"Find something new."

Recommendation means:

"Help me choose among things that already matter to me."



# Favorite Person

## Definition

A Favorite Person is a real individual explicitly marked as personally important by the User.

Favorite Persons exist independently from any individual Library Entry.



## Purpose

Allow Users to maintain a personal list of creators they admire.

This avoids incorrect assumptions based solely on Ratings.



## Examples

Christopher Nolan

Ryan Reynolds

J. R. R. Tolkien

Hans Zimmer

Hideo Kojima



## Rules

Favorite Persons are always selected manually.

The application never automatically favorites a Person based on highly rated Content.



## Common Misunderstandings

Loving a movie does not automatically mean loving its Director.

Likewise, admiring a Director does not require every one of their works to receive the highest Rating.

These concepts intentionally remain independent.



# Favorite Creator

## Definition

Favorite Creator is a broader concept describing personally favored creative contributors.

Depending on the Role, a Favorite Creator may be:

- Director

- Author

- Game Director

- Composer

- Actor

- Voice Actor

- Studio (future consideration if supported)



## Purpose

Provide a unified way to represent admiration across different media industries.



## Rules

Favorite Creator is derived from manually favorited Persons.

It is a presentation concept rather than a separate stored entity.



# External Metadata Provider

## Definition

An External Metadata Provider is a third-party service used to retrieve objective information about Content.



## Purpose

Reduce manual entry.

Improve consistency.

Improve visual quality.

Reduce typing effort.



## Examples (Version 1 Planning)

Movies / TV Series

TMDb

Books

Open Library

Games

RAWG



## Rules

Metadata Providers never own User information.

Only objective Content metadata may originate from external providers.

If an external provider becomes unavailable, Users must still be able to maintain their archive manually.



## Common Misunderstandings

Metadata Providers assist Mosaica.

They do not define Mosaica.

The archive remains functional without them.



# Section G — Permanent Terminology Rules



## Official Terminology

The following names are considered official and should remain consistent across all documentation.

| Official Term | Usage |
| --- | --- |
| User | Archive owner |
| Content | Cultural work |
| Library Entry | User's relationship with Content |
| Archive | Permanent personal archive |
| Wishlist | Planned future experiences |
| Archive Location | Current storage location of a Library Entry |
| Status | User progress |
| Rating | Numerical evaluation |
| Favorite Level | Emotional importance |
| Personal Note | User-written note |
| Genre | Objective category |
| Tag | Personal label |
| Collection | User-defined grouping |
| Series | Release sequence |
| Universe | Shared fictional world |
| Person | Real individual |
| Role | Person's contribution |
| Dashboard | Home screen |
| Memory | Rediscovered archive moment |
| Living Archive | Core behavioral philosophy |

These terms should not be replaced with alternative wording in technical documentation.

Consistency improves understanding.



# Section H — Glossary Maintenance Rules

The Product Glossary is a controlled document.

New terms should only be introduced when they represent genuinely new concepts.

Synonyms should generally be avoided.

Every concept should have:

- one official name,

- one official definition,

- one official responsibility.

If a concept overlaps significantly with an existing concept, the existing concept should be expanded instead of creating a duplicate.

This document acts as the authoritative vocabulary of Mosaica.



# Closing Declaration

The quality of a software product depends not only on its code but also on the precision of the language used to describe it.

The Product Glossary establishes that language.

Every future discussion, specification, database design, interface definition and development task should use these terms consistently.

When everyone speaks the same language, architectural mistakes become significantly less likely.



# Appendix A — Domain Examples

The following examples illustrate how the official concepts of Mosaica interact in real scenarios.

These examples are intended to improve understanding of the domain model and should be considered informative rather than exhaustive.



## Example 1 — Completed Movie

User:

Berke

Content:

Interstellar

Media Type:

Movie

Genres:

Science Fiction

Drama

Persons:

Christopher Nolan (Director)

Matthew McConaughey (Actor)

Hans Zimmer (Composer)

Library Entry:

Archive Location:

Archive

Status:

Completed

Rating:

9.8

Favorite Level:

Legendary

Watch Count:

3

Consumption Date:

2026-07-21

Personal Note:

"Still Nolan's masterpiece."

Collections:

Best of Nolan

Tags:

Mind-blowing

Space

Masterpiece

This example demonstrates the separation between shared Content information and User-owned Library Entry information.



## Example 2 — Planned Future Game

Content:

Hollow Knight: Silksong

Media Type:

Game

Library Entry:

Archive Location:

Wishlist

Status:

In Progress (not yet started is intentionally represented by Wishlist rather than a separate status)

Rating:

None

Favorite Level:

Liked (default)

Play Count:

0

Personal Note:

"Play after finishing current backlog."

This example illustrates how Wishlist represents future intention rather than completed experience.



## Example 3 — Paused Book

Content:

The Brothers Karamazov

Media Type:

Book

Library Entry:

Archive Location:

Archive

Status:

Paused

Rating:

8.7

Read Count:

1

Personal Note:

"Paused around the middle. Continue later."

This example demonstrates that Archive and Status are independent concepts.



## Example 4 — Different Users, Same Content

Content:

The Witcher 3

User A

Rating:

10.0

Favorite Level:

Legendary

Play Count:

5

User B

Rating:

7.4

Favorite Level:

Liked

Play Count:

1

The Content remains identical.

Only the Library Entry differs.

This separation is a permanent architectural principle.



# Appendix B — Concept Relationship Overview

The following overview summarizes the primary conceptual relationships inside Mosaica.

User

↓

Owns

↓

Library Entry

↓

References

↓

Content

Content

↓

Contains

- Media Type

- Genres

- Persons

- Roles

- Series

- Universe

- Metadata

Library Entry

↓

Contains

- Rating

- Favorite Level

- Personal Note

- Status

- Archive Location

- Consumption Counter

- Consumption Date

- Tags

- Collections

Dashboard

↓

Displays information generated from

- Library Entries

- Statistics

- Memories

- Wishlist

- Archive

Living Archive

↓

Uses

- Memories

- Monthly Culture Summary

- What Should I Do Today?

- Statistics

- Recommendations

This overview is intended to provide a high-level mental model of the product domain.

Detailed implementation belongs to the Domain Model and Database Specification documents.



# Appendix C — Forbidden Terminology

To maintain consistency throughout the project, the following unofficial terminology should be avoided whenever an official equivalent exists.

| Avoid | Use Instead |
| --- | --- |
| Movie Record | Library Entry |
| Game Record | Library Entry |
| Book Record | Library Entry |
| TV Record | Library Entry |
| Media Record | Library Entry |
| Database Record | Library Entry (when referring to the product domain) |
| Category | Media Type or Genre (depending on context) |
| Media | Content (when referring to a cultural work) |
| Item | Content or Library Entry (depending on context) |
| Score | Rating |
| Review | Personal Note (unless referring to public reviews outside Mosaica) |
| Folder | Collection |
| Label | Tag |
| History | Archive (unless referring to system logs) |

These restrictions exist to preserve a single, unambiguous product language.

Whenever uncertainty exists, the official Product Glossary terminology always takes precedence.



# Final Review Statement

The Product Glossary defines the official business language of Mosaica.

Every future document should use these concepts exactly as defined.

If a new concept becomes necessary, it should be added to this document before being used elsewhere.

The Product Glossary is therefore considered the authoritative vocabulary of the entire project.







































# 02_Business_Rules/README.md

Document Status: Draft

Document Version: 1.0

Project: Mosaica



# Purpose

The Business Rules documentation defines how Mosaica behaves.

While the Product Bible explains why the product exists and the Product Glossary defines what each concept means, the Business Rules define how those concepts behave.

Every user interaction, data transition and business decision inside Mosaica must follow the rules defined in this section.

Business Rules are implementation-independent.

They describe expected behavior rather than technical implementation.

How a rule is implemented is a software engineering decision.

Whether the rule exists is a product decision.



# Scope

The Business Rules documentation defines:

- how Library Entries are created,

- how they change over time,

- how they are archived,

- how they are deleted,

- how Ratings behave,

- how Wishlist behaves,

- how Statistics are generated,

- how Dashboard information is produced,

- how Search and Filtering behave,

- how Recommendations are generated,

- how Metadata is managed.

Technical implementation details such as database schemas, API endpoints and source code are intentionally excluded.

Those belong to later documentation.



# Relationship with Other Documents

This documentation depends on:

- 00_Product_Bible.md

- 01_Product_Glossary.md

The Business Rules must never redefine concepts already defined in those documents.

Whenever terminology is required, the Product Glossary is the authoritative source.

Whenever product philosophy is required, the Product Bible is the authoritative source.



# Structure

The Business Rules are divided into independent modules.

Each module owns one business area.

## 02.01 — Content Lifecycle

Defines how Content enters, changes and remains inside the system.



## 02.02 — Library Entry Lifecycle

Defines the complete lifecycle of a User's Library Entry.



02.03 — Statistics Rules



Defines how statistical information is calculated, maintained and updated throughout the application.



________________________________________

02.04 — Dashboard Rules



Defines the business behavior of the User Dashboard and its derived information.



________________________________________



02.05 — Metadata Rules



Defines how official Content metadata behaves independently from User-owned data.



________________________________________



02.06 — Search & Filtering Rules



Defines search, filtering, sorting and result behavior throughout the application.



________________________________________



02.07 — Recommendation Rules



Defines personalized recommendation behavior derived from the User's Library.





________________________________________



02.99 — Architecture Review



Records the final architectural review of the Business Rules module before proceeding to the next architectural phase.





# Rule Writing Standard

Every Business Rule document must use the same structure.

Each rule should contain, where applicable:

- Purpose

- Scope

- Preconditions

- Trigger

- Rule Definition

- Exceptions

- Postconditions

- Validation Rules

- User Experience Notes

- Future Version Notes (if intentionally postponed)

This standard ensures consistency across all rule documents.



# Business Rule Principles

All Business Rules must respect the following priorities:

1. Product Identity

2. Product Bible

3. Product Glossary

4. User Data Safety

5. Simplicity

6. Consistency

7. Long-Term Maintainability

If a proposed rule conflicts with a higher priority, the higher priority always prevails.



# Change Management

Business Rules may evolve over time.

Unlike the Product Bible, Business Rules are expected to receive revisions as new features are introduced.

Every revision must:

- include a version increment,

- include a clear rationale,

- preserve compatibility whenever reasonably possible,

- remain consistent with higher-level documentation.



# Exit Criteria

The Business Rules section is considered complete only when every user action inside Version 1 can be explained through the documented rules without relying on assumptions.

If a developer must guess how the product should behave, the Business Rules are incomplete.



Rule Priority

Business Rule modules may reference one another.

If two modules appear to conflict, the module describing the original source of truth always takes precedence over any module describing derived behavior.

Examples:

- Rating Rules define how Ratings behave.

- Statistics Rules consume Ratings but never redefine them.

- Library Entry Lifecycle defines ownership of Library Entries.

- Dashboard Rules display Library Entries but never modify their lifecycle.

Derived modules must never override source modules.



Rule Classification

Every Business Rule should be classified according to its role within the product.

The following classifications are used throughout the Business Rules documentation.

Mandatory Rule

A rule that must always be enforced.

Example:

A Library Entry belongs to exactly one User.



Optional Rule

A rule representing optional user behavior.

Example:

Consumption Date may remain empty.



Derived Rule

A rule whose behavior depends entirely on other primary rules.

Example:

Statistics are calculated from Ratings.



Future Rule

A rule intentionally postponed to a future version of the product.

Future Rules remain documented to preserve architectural intent but are not implemented in Version 1.



Cross-Reference Standard

Every Business Rule document should end with a "Related Documents" section.

The section should identify:

Depends On

Documents that define concepts required by the current document.

Referenced By

Documents that consume or build upon the rules defined in the current document.

This structure improves navigation, reduces duplication and helps maintain consistency as the documentation grows.



# 02.01_Content_Lifecycle.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the complete business lifecycle of Content inside Mosaica.

It explains how Content is introduced, identified, maintained and preserved throughout its lifetime.

This document focuses exclusively on Content.

User-specific behavior belongs to the Library Entry Lifecycle document.



# Scope

This document defines:

- how new Content is created,

- how existing Content is identified,

- duplicate prevention,

- metadata ownership,

- manual creation,

- metadata enrichment,

- Content updates,

- Content retirement,

- Content deletion restrictions,

- Content integrity.



# Guiding Principle

Content represents a cultural work.

It does not represent a user's experience.

This distinction is permanent.

One Content may be referenced by many Users.

Removing or modifying Content must never unintentionally damage User archives.



# Content Lifecycle Overview

The lifecycle of Content follows this simplified flow:

Unknown Content

↓

Content Search

↓

Existing Content Found

or

New Content Created

↓

Metadata Validation

↓

Content Available

↓

Referenced by one or more Library Entries

↓

Metadata Maintenance

↓

Archived (system level, if ever required)

Content itself is intended to be long-lived.

Unlike Library Entries, Content is rarely removed.



# Rule Group A — Content Creation

## Rule A.1 — Content Must Exist Before a Library Entry

### Rule Type

Mandatory Rule



### Description

A Library Entry cannot exist without referencing exactly one Content.

Whenever a User wishes to add something to their archive or wishlist, the application must first resolve the corresponding Content.

Only after Content exists may a Library Entry be created.



### Reason

This guarantees:

- elimination of duplicate metadata,

- clean relationships,

- scalability,

- multi-user support.



### Result

Content is always created before the User's personal archive entry.

Never afterwards.



## Rule A.2 — Search Before Create

### Rule Type

Mandatory Rule



### Description

Before creating new Content, Mosaica must first determine whether equivalent Content already exists.

This check should occur regardless of whether the User is entering data manually or using metadata providers.



### Matching Strategy

The application should compare available identifying information such as:

- title,

- original title,

- release year,

- media type.

Future versions may expand matching criteria.



### Purpose

Prevent duplicate Content records.

Maintain a single source of truth.



### Exception

If the system cannot confidently determine that two records represent the same work, creation of a new Content is allowed.

False positives are considered more harmful than temporary duplicate entries.



## Rule A.3 — Manual Content Creation

### Rule Type

Mandatory Rule



### Description

Users must always be able to create Content manually.

The application must never require an external metadata provider in order to function.



### Purpose

Guarantee long-term independence.

Support obscure or unavailable works.

Allow uninterrupted archive growth.



### Examples

An unreleased indie game.

A local documentary.

An academic publication.

A self-published book.

These should all be valid Content.



## Rule A.4 — Metadata Is Optional During Creation

### Rule Type

Optional Rule



### Description

Only the minimum information required to uniquely identify the Content should be mandatory during manual creation.

Additional metadata may be completed later.



### Guiding Principle

Fast archive entry has higher priority than complete metadata.

Users should never abandon adding a work because they are forced to complete unnecessary fields.



## Rule A.5 — Media Type Is Permanent

### Rule Type

Mandatory Rule



### Description

Every Content belongs to exactly one Media Type.

A Content cannot simultaneously be both a Movie and a TV Series.



### Allowed Version 1 Media Types

- Movie

- TV Series

- Game

- Book



### Future Expansion

Additional Media Types may be introduced without changing existing records.



# Rule Group B — Content Identity

## Rule B.1 — Stable Internal Identifier

### Rule Type

Mandatory Rule



### Description

Every Content receives a permanent internal identifier at creation.

This identifier:

- never changes,

- is unique,

- is never reused,

- is hidden from regular Users.

Names may change.

Identifiers must not.



## Rule B.2 — One Content Represents One Cultural Work

### Rule Type

Mandatory Rule



### Description

A Content record represents one distinct cultural work.

Different editions, translations or releases should not automatically create new Content unless they represent materially different works according to future edition policies.

Version 1 intentionally treats edition management as out of scope unless it affects the identity of the work itself.

# Rule Group C — Metadata Management



## Rule C.1 — Metadata May Evolve

### Rule Type

Mandatory Rule



### Description

Content metadata may improve over time.

Additional information may become available after the initial creation of a Content.

Examples include:

- poster images,

- runtime,

- genres,

- cast,

- publishers,

- descriptions.

Improving metadata must never affect User-owned information.



## Rule C.2 — User Data Is Immutable During Metadata Updates

### Rule Type

Mandatory Rule



### Description

Metadata synchronization must never overwrite:

- Ratings,

- Favorite Levels,

- Personal Notes,

- Tags,

- Collections,

- Consumption Dates,

- Consumption Counters,

- Archive Location,

- Status.

These belong exclusively to the User.



## Rule C.3 — Metadata Providers Are Replaceable

### Rule Type

Mandatory Rule



### Description

Mosaica must never become dependent on a single metadata provider.

Metadata sources are implementation details.

Content remains valid even if every external provider becomes unavailable.

Manual editing must always remain possible.



# Rule Group D — Duplicate Resolution



## Rule D.1 — Duplicate Detection

### Rule Type

Mandatory Rule



### Description

Whenever potentially duplicated Content is identified, the system should evaluate whether both records represent the same cultural work.

Duplicate detection should prioritize preventing accidental merges.

False merges are considered more damaging than temporary duplicates.



## Rule D.2 — Duplicate Merge

### Rule Type

Future Rule



### Description

Version 1 does not automatically merge duplicate Content.

If duplicate Content exists, administrative tools introduced in future versions may resolve the situation.

Automatic merging is intentionally postponed.



# Rule Group E — Content Preservation



## Rule E.1 — Content Is Never Permanently Deleted During Normal Operation

### Rule Type

Mandatory Rule



### Description

Content represents shared system knowledge.

Deleting Content may invalidate multiple User archives.

Therefore, Content should never be permanently deleted through normal user actions.

Only Library Entries are deleted by Users.



## Rule E.2 — Content Visibility

### Rule Type

Derived Rule



### Description

Content may exist without any active Library Entries.

This allows future reuse without recreating metadata.



## Rule E.3 — Content States

### Rule Type

Mandatory Rule



### Version 1 States

Active

Hidden

Deprecated



### Definitions

Active

Available for normal use.



Hidden

Temporarily unavailable for ordinary searches but preserved internally.



Deprecated

Retained for compatibility reasons but no longer recommended for future use.



### Rule

State changes affect Content visibility.

They never destroy Content.



# Rule Group F — Long-Term Integrity



## Rule F.1 — One Source of Truth

### Rule Type

Mandatory Rule



Every objective property of a cultural work should exist only once inside the system.

Duplicating metadata is prohibited.



## Rule F.2 — User Independence

### Rule Type

Mandatory Rule



User archives must remain independent.

Two Users referencing the same Content must never influence each other's Library Entries.



## Rule F.3 — Future-Proof Content

### Rule Type

Mandatory Rule



The Content model should accommodate future Media Types without requiring structural redesign.

Expansion is expected.

Breaking existing Content is not.



# Behavior Matrix

| Current State | Action | Next State | Allowed |
| --- | --- | --- | --- |
| Unknown | Create | Active | ✅ |
| Unknown | Match Existing | Active | ✅ |
| Active | Metadata Update | Active | ✅ |
| Active | Hide | Hidden | ✅ |
| Hidden | Restore | Active | ✅ |
| Active | Deprecate | Deprecated | ✅ |
| Deprecated | Restore | Active | ✅ |
| Active | Permanent Delete (User) | — | ❌ |
| Hidden | Permanent Delete (User) | — | ❌ |
| Deprecated | Permanent Delete (User) | — | ❌ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02_Business_Rules/README.md

## Referenced By

- 02.02_Library_Entry_Lifecycle.md

- 04_Database_Specification/

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/

## Rule F.4 — System Ownership

### Rule Type

Mandatory Rule



### Description

Content belongs to the Mosaica system rather than to any individual User.

Users do not own Content.

Users own only the Library Entries that reference Content.

This distinction allows multiple Users to reference the same cultural work while maintaining completely independent personal archives.



### Purpose

Maintain a single shared representation of every cultural work.

Prevent unnecessary duplication.

Support future multi-user architecture.

Protect system integrity.



## Rule F.5 — Immutable Identity

### Rule Type

Mandatory Rule



### Description

Once a Content has been created, its identity becomes permanent.

The following properties must never change:

- Internal Identifier

- Original Creation Timestamp

Other metadata may evolve over time, but identity-defining properties remain immutable.



### Purpose

Guarantee long-term referential integrity.

Prevent broken relationships.

Support reliable synchronization, migration and backups.



## Rule F.6 — Canonical Representation

### Rule Type

Mandatory Rule



### Description

Every Content stored inside Mosaica becomes the canonical representation of that cultural work within the system.

External metadata providers may enrich Content by supplying or updating objective metadata.

However, they never replace the Mosaica Content itself.

Once created, the internal Content record becomes the authoritative source for every Library Entry referencing it.



### Purpose

Protect the archive from external dependency.

Ensure long-term consistency.

Allow metadata providers to be replaced without affecting the integrity of the archive.

Preserve the stability of internal relationships regardless of changes in external services.













# 02.02_Library_Entry/README.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This module defines the complete lifecycle of a Library Entry.

A Library Entry is the central business entity of Mosaica.

While Content represents a cultural work, a Library Entry represents one User's personal relationship with that work.

Every personal action performed inside Mosaica ultimately affects a Library Entry.

For this reason, Library Entry behavior is documented separately from Content behavior.



# Scope

This module defines:

- how Library Entries are created,

- how they evolve,

- how Users interact with them,

- how they move between Archive, Wishlist and Trash,

- how they are updated,

- how they are restored,

- how they are protected,

- and how they eventually leave the active archive.

This module intentionally excludes Content behavior.

Content is documented separately in 02.01_Content_Lifecycle.md.



# Relationship with Other Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02_Business_Rules/README.md

- 02.01_Content_Lifecycle.md

## Referenced By

- 02.03_Rating_Rules.md

- 02.04_Wishlist_Rules.md

- 02.06_Statistics_Rules.md

- 02.07_Dashboard_Rules.md

- 02.08_Deletion_Recovery_Rules.md

- 04_Database_Specification/

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



# Guiding Principle

A Library Entry belongs to exactly one User.

It is the User's personal history.

Everything personal inside Mosaica is ultimately attached to a Library Entry.

Examples include:

- Rating

- Favorite Level

- Personal Note

- Status

- Archive Location

- Consumption Counter

- Consumption Date

- Tags

- Collections

No personal information belongs directly to Content.



# Library Entry Lifecycle

Every Library Entry follows a controlled lifecycle.

The complete lifecycle is divided into dedicated documents.

Each document owns one stage of the lifecycle.



## 02.02.01 — Creation

Defines how a Library Entry is created after a valid Content has been identified.



## 02.02.02 — Updates

Defines how Users modify existing Library Entries.



## 02.02.03 — Status Transitions

Defines every allowed Status transition and their business rules.



## 02.02.04 — Archive Movement

Defines movement between Archive and other valid archive locations.



## 02.02.05 — Wishlist Movement

Defines every rule governing Wishlist behavior.



## 02.02.06 — Deletion

Defines soft deletion and movement into Trash.



## 02.02.07 — Restoration

Defines how deleted Library Entries are recovered.



## 02.02.08 — History

Defines historical information preserved throughout the lifetime of a Library Entry.



## 02.02.09 — Behavior Matrix

Provides the complete state transition matrix covering the entire Library Entry lifecycle.



# Rule Writing Standard

Every document inside this module follows the common Business Rule format.

Where applicable, each rule includes:

- Purpose

- Rule Type

- Preconditions

- Trigger

- Rule Definition

- Exceptions

- Postconditions

- Validation Rules

- User Experience Notes

- Future Version Notes



# Permanent Principles

Every Library Entry rule must preserve the following principles:

- One User owns one Library Entry.

- One Library Entry references one Content.

- Personal information belongs only to the owning User.

- Library Entries are never duplicated for repeated consumption.

- Repeated experiences update the existing Library Entry rather than creating a new one.

- User history is preserved whenever reasonably possible.

- Recoverability is preferred over destructive operations.



# Exit Criteria

The Library Entry module is considered complete only when every possible user interaction involving a Library Entry is documented without ambiguity.

Developers should never need to infer how a Library Entry behaves.

Every transition must be explicitly defined.













































# 02.02.01_Creation.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Lifecycle

Project: Mosaica



# Purpose

This document defines the business rules governing the creation of a Library Entry.

A Library Entry represents the beginning of a User's personal relationship with a specific Content.

Creation is one of the most frequently performed actions inside Mosaica.

The creation process must therefore be:

- fast,

- predictable,

- consistent,

- and safe.



# Scope

This document defines:

- creation prerequisites,

- Content resolution,

- duplicate prevention,

- required information,

- optional information,

- default values,

- creation completion,

- validation rules.



# Guiding Principle

Users do not create database records.

Users record cultural experiences.

The application is responsible for transforming those intentions into correctly structured data.



# User Goal

From the User's perspective, the goal is simple:

"I want to add this movie, game, TV series or book to my archive."

The system must translate this request into all required internal operations.

Complexity should remain invisible.



# Rule Group A — Preconditions

## Rule A.1 — Valid User

### Rule Type

Mandatory Rule



### Description

A Library Entry may only be created for an authenticated User.

Every Library Entry must belong to exactly one User.

Ownership cannot be transferred during creation.



## Rule A.2 — Existing Content

### Rule Type

Mandatory Rule



### Description

A valid Content must exist before a Library Entry can be created.

If no matching Content exists, the system must create Content first according to the Content Lifecycle rules.

Only after successful Content creation may the Library Entry be created.



## Rule A.3 — One Library Entry Per User Per Content

### Rule Type

Mandatory Rule



### Description

A User may own only one active Library Entry referencing a specific Content.

Duplicate active Library Entries are prohibited.



### Example

User:

Berke

Content:

Interstellar

Existing Library Entry:

Yes

Result:

Creating a second active Library Entry is not allowed.

Instead, the existing Library Entry should be opened for editing.



### Purpose

Prevent duplicate archive entries.

Preserve a single personal history for each cultural work.



# Rule Group B — Creation Trigger

## Rule B.1 — User-Initiated Creation

### Rule Type

Mandatory Rule



### Description

Library Entries are created only through explicit User actions.

The system must never automatically create Library Entries without User intent.



### Examples of Valid Triggers

User selects:

"Add Movie"

User selects:

"Add Book"

User selects:

"Add Game"

User selects:

"Add TV Series"



### Invalid Trigger

Receiving metadata from an external provider alone must never create a Library Entry.

Metadata supports creation.

It does not initiate it.



## Rule B.2 — Creation Starts with User Intent

### Rule Type

Mandatory Rule



### Description

The creation process begins the moment a User expresses the intention to preserve a cultural work.

The system should immediately begin assisting the User in completing the entry with the least possible effort.



### Design Principle

The User should never feel that they are filling in a database.

They should feel that they are saving a memory.



# Rule Group C — Required Information

## Rule C.1 — Minimum Required Data

### Rule Type

Mandatory Rule



### Description

Creating a Library Entry should require the smallest possible amount of information.

The required information is intentionally minimized.



### Required

- Media Type

- Content Selection (existing or newly created)

- Archive Location



### Automatically Assigned

- User

- Internal Identifier

- Creation Timestamp

- Last Updated Timestamp



### Optional

- Rating

- Favorite Level

- Personal Note

- Consumption Date

- Status

- Tags

- Collections



### Purpose

Support the product goal that a new entry can normally be created within approximately thirty seconds.





# User Flow Summary

The creation of a Library Entry follows a predictable user-centered flow.

User decides to preserve a cultural work.

↓

Select Media Type

↓

Search for existing Content

↓

Content Found?

├── Yes → Continue

└── No → Create new Content

↓

Select Archive Location

(Archive or Wishlist)

↓

Optionally provide personal information

↓

Validate

↓

Create Library Entry

↓

Update Dashboard and Statistics

↓

Creation Complete

This flow summarizes the creation process.

The detailed business rules below define each step.



# Rule Group D — Default Values

## Rule D.1 — Default Favorite Level

### Rule Type

Mandatory Rule



### Description

If the User does not explicitly choose a Favorite Level during creation, the system assigns the default value:

Liked

This value may be changed at any time.



## Rule D.2 — Default Status

### Rule Type

Derived Rule



### Description

The default Status depends on the selected Archive Location.

Archive

↓

Completed

Wishlist

↓

In Progress

The User may immediately change the Status if desired.



### Design Principle

The application should provide sensible defaults while never restricting User choice.



## Rule D.3 — Default Consumption Counter

### Rule Type

Mandatory Rule



### Description

Every newly created Library Entry starts with a Consumption Counter of:

1

The counter represents the first known personal experience.

Future experiences increase the existing counter.



# Rule Group E — Validation Rules

## Rule E.1 — Successful Validation

### Rule Type

Mandatory Rule



A Library Entry can only be created if:

- a valid User exists,

- a valid Content exists,

- no duplicate active Library Entry exists,

- Archive Location is selected.



## Rule E.2 — Duplicate Prevention

### Rule Type

Mandatory Rule



If an active Library Entry already exists for the same User and Content:

The system must not create another one.

Instead, it should navigate the User to the existing Library Entry.



## Rule E.3 — Missing Optional Information

### Rule Type

Optional Rule



Missing optional fields must never prevent creation.

Examples include:

- Rating

- Personal Note

- Consumption Date

- Tags

- Collections

These may all be completed later.



# Rule Group F — Creation Completion

## Rule F.1 — Atomic Creation

### Rule Type

Mandatory Rule



### Description

Creation succeeds only if every required operation completes successfully.

Partial creation is prohibited.

Either the entire Library Entry exists, or nothing is created.



### Purpose

Prevent inconsistent archives.

Protect data integrity.



## Rule F.2 — Automatic Updates

### Rule Type

Derived Rule



Immediately after successful creation, the application updates all affected derived information.

Examples include:

- Dashboard

- Statistics

- Collection counters

- Wishlist counters

- Archive counters

The User should never manually refresh these values.



## Rule F.3 — Immediate Availability

### Rule Type

Mandatory Rule



After successful creation, the new Library Entry becomes immediately available throughout the application.

Search,

Filtering,

Statistics,

Dashboard,

Recommendations,

Collections

must all recognize the newly created entry.



# Rule Group G — User Experience Principles

## Rule G.1 — Minimum Friction

The creation process should minimize unnecessary decisions.

The application should intelligently provide defaults wherever possible.



## Rule G.2 — User Control

Although defaults exist, every automatically assigned value should remain editable by the User.

The system assists.

The User decides.



## Rule G.3 — Fast Completion

The application should optimize the creation flow so that an average Library Entry can normally be created within approximately thirty seconds.

Speed should never compromise correctness.

# Rule Group H — Exceptional Scenarios



## Rule H.1 — Existing Active Library Entry

### Rule Type

Mandatory Rule



### Description

If the User attempts to create a Library Entry for a Content that already exists in their active library, the system must prevent duplicate creation.

Instead, the existing Library Entry should be opened.

The User should be informed that the work already exists in their archive.



## Rule H.2 — Previously Deleted Library Entry

### Rule Type

Mandatory Rule



### Description

If a matching Library Entry exists inside the User's Trash, the system should offer restoration instead of creating a completely new Library Entry.

This preserves personal history and prevents fragmentation.



## Rule H.3 — Creation Failure

### Rule Type

Mandatory Rule



### Description

If validation fails or a required operation cannot be completed, no Library Entry should be created.

Partial records are prohibited.

The User must receive a clear explanation of the failure.



# Rule Group I — Creation Behavior Principles



## Rule I.1 — Simplicity Before Completeness

The application should always prioritize allowing the User to save a cultural experience quickly.

Additional information may always be added later.



## Rule I.2 — Preserve User Intent

The application should never make assumptions that alter the User's intention.

Defaults assist the User.

They never replace User choice.



## Rule I.3 — Preserve Personal History

Whenever possible, existing personal history should be reused rather than replaced.

Restoration is preferred over recreation.

Updating is preferred over duplication.



# Creation Behavior Matrix

| Current Situation | System Action | Result | Allowed |
| --- | --- | --- | --- |
| Content exists | Create Library Entry | Success | ✅ |
| Content missing | Create Content → Create Library Entry | Success | ✅ |
| Duplicate active Library Entry | Open existing entry | No duplicate | ✅ |
| Matching entry in Trash | Offer restoration | Restore or cancel | ✅ |
| Validation failure | Cancel creation | No data written | ✅ |
| Metadata unavailable | Continue with manual creation | Success | ✅ |
| Optional fields empty | Create with defaults | Success | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02_Business_Rules/README.md

- 02.01_Content_Lifecycle.md

## Referenced By

- 02.02.02_Updates.md

- 02.03_Rating_Rules.md

- 02.04_Wishlist_Rules.md

- 04_Database_Specification/

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



# Final Review

The Library Entry creation process is considered complete when:

- every Library Entry references exactly one valid Content,

- every Library Entry belongs to exactly one User,

- duplicate entries are prevented,

- creation remains fast,

- optional information never blocks creation,

- personal history is preserved whenever possible,

- data integrity is maintained under all defined scenarios.

The creation workflow should consistently allow most Users to create a complete Library Entry in approximately thirty seconds while preserving the architectural principles of Mosaica.















































# 02.02.02_Modifications/README.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Lifecycle

Project: Mosaica



# Purpose

This module defines every modification that may occur after a Library Entry has been created.

Creation is documented separately.

Deletion is documented separately.

This module focuses exclusively on changes made to an existing Library Entry during its lifetime.

Every modification follows the same architectural principles:

- preserve User intent,

- preserve data integrity,

- update derived information,

- avoid unnecessary duplication.



# Scope

This module defines the behavior of individual modifications applied to a Library Entry.

Each modification is isolated into its own document to reduce complexity and improve long-term maintainability.



# Relationship with Other Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

## Referenced By

- 02.06_Statistics_Rules.md

- 02.07_Dashboard_Rules.md

- 02.10_Search_Filtering_Rules.md

- 02.11_Recommendation_Rules.md

- 04_Database_Specification/

- 05_UI_UX_Specification/

- 09_Testing_and_QA/



# Modification Modules

## 02.02.02.01 — Rating Modification

Defines how Ratings are created, updated and validated.



## 02.02.02.02 — Appreciation Level Modification

Defines changes to Favorite Levels.



## 02.02.02.03 — Status Modification

Defines every valid Status transition.



## 02.02.02.04 — Personal Note Modification

Defines creation and editing of Personal Notes.



## 02.02.02.05 — Tag Modification

Defines personal Tag behavior.



## 02.02.02.06 — Collection Modification

Defines Collection membership behavior.



## 02.02.02.07 — Consumption Modification

Defines repeated consumption, counters and optional Rating updates after additional experiences.



# Modification Principles

Every modification must satisfy the following principles:

- Only the owning User may modify a Library Entry.

- Every modification must preserve the integrity of the Library Entry.

- Derived information must update automatically.

- User-owned information must never be overwritten by external metadata.

- Every modification must remain reversible whenever reasonably possible.



# Exit Criteria

This module is considered complete when every editable property of a Library Entry has its own dedicated behavior document.

No modification should rely on undocumented assumptions.















# 02.02.02.01_Rating_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule related to the creation, modification and maintenance of Ratings.

Ratings represent one of the most valuable pieces of personal information inside Mosaica.

Many system features depend directly or indirectly on Ratings.

For this reason, Rating behavior must remain consistent throughout the lifetime of a Library Entry.



# Scope

This document defines:

- initial Rating creation,

- Rating updates,

- Rating validation,

- automatic system updates,

- Rating ownership,

- Rating integrity.

Historical Rating tracking is intentionally outside the scope of Version 1.



# Guiding Principle

A Rating represents the User's current opinion.

It is not intended to permanently preserve every opinion ever expressed.

Version 1 always reflects the User's latest evaluation.



# User Flow Summary

User opens an existing Library Entry.

↓

User modifies the Rating.

↓

System validates the new Rating.

↓

Library Entry is updated.

↓

Derived information is recalculated.

↓

Changes become immediately visible.



# Rule Group A — Rating Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



### Description

Every Rating belongs exclusively to the User who owns the corresponding Library Entry.

Ratings are never shared between Users.



## Rule A.2 — Independent Evaluation

### Rule Type

Mandatory Rule



### Description

Two Users may assign completely different Ratings to the same Content.

Neither Rating affects the other.

Every Rating is independent.



# Rule Group B — Rating Creation

## Rule B.1 — Optional During Initial Creation

### Rule Type

Optional Rule



### Description

A Rating is not required when creating a new Library Entry.

Users may leave the Rating empty.



### Purpose

Reduce friction during archive creation.

Support fast entry.



## Rule B.2 — Rating May Be Added Later

### Rule Type

Mandatory Rule



### Description

A Rating may be added at any time after the Library Entry has been created.

The application must never require recreation of the Library Entry.



# Rule Group C — Rating Validation

## Rule C.1 — Allowed Range

### Rule Type

Mandatory Rule



### Description

Ratings must remain within the official Mosaica Rating Scale.

Minimum:

0.0

Maximum:

10.0



## Rule C.2 — Precision

### Rule Type

Mandatory Rule



### Description

Ratings use one decimal place.

Examples:

7.3

8.8

9.5

10.0

Higher precision is intentionally not supported in Version 1.



## Rule C.3 — Invalid Values

### Rule Type

Mandatory Rule



### Description

Values outside the allowed range must be rejected.

The existing Rating must remain unchanged.



# Rule Group D — Rating Modification

## Rule D.1 — Unlimited Updates

### Rule Type

Mandatory Rule



### Description

Users may change their Rating as often as they wish.

There is no limit on Rating updates.



## Rule D.2 — Replace Current Rating

### Rule Type

Mandatory Rule



### Description

Every new Rating replaces the previous Rating.

Version 1 stores only the current Rating.



## Rule D.3 — User Intent

### Rule Type

Mandatory Rule



### Description

The application must never question or reinterpret a User's Rating.

The User's opinion is considered authoritative.

No automatic normalization, adjustment or recommendation may modify a Rating.

# Rule Group E — Automatic System Effects



## Rule E.1 — Immediate Update

### Rule Type

Derived Rule



### Description

Immediately after a Rating has been successfully modified, all dependent information must be recalculated automatically.

The User should never manually refresh or rebuild personal statistics.



### Affected Components

- Statistics

- Rankings

- Dashboard

- "What Should I Do Today?" suggestions

- Recommendation engine (current and future versions)



## Rule E.2 — Immediate Visibility

### Rule Type

Mandatory Rule



### Description

The updated Rating becomes immediately visible throughout the application.

Every view referencing the Library Entry should display the latest Rating.



## Rule E.3 — Current Opinion Wins

### Rule Type

Mandatory Rule



### Description

The most recent Rating always represents the User's official opinion.

Previous Ratings are not considered active.

Historical Rating tracking is intentionally postponed to a future version.



# Rule Group F — Validation Exceptions



## Rule F.1 — Empty Rating

### Rule Type

Optional Rule



### Description

Removing a Rating is allowed.

An unrated Library Entry remains fully valid.

Statistics should automatically ignore unrated entries where appropriate.



## Rule F.2 — Invalid Modification

### Rule Type

Mandatory Rule



### Description

If a submitted Rating fails validation, no changes should be applied.

The previously stored Rating remains unchanged.

The User should receive a clear validation message.



# Rule Group G — User Experience Principles



## Rule G.1 — Respect Personal Opinion

The application never evaluates whether a Rating is "correct."

Every Rating is considered valid if it satisfies the official Rating Scale.



## Rule G.2 — No Artificial Restrictions

Users may freely increase or decrease Ratings without limitations.

There are no cooldowns, confirmations or penalties.



## Rule G.3 — Personal Evolution

Changing a Rating represents the natural evolution of personal opinion.

The application should support this process rather than discourage it.

A changed opinion is not treated as inconsistent data.

It is treated as updated personal knowledge.



# Rating Behavior Matrix

| Current State | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Empty | Add Rating | Rating Stored | ✅ |
| Existing Rating | Change Rating | Previous Rating Replaced | ✅ |
| Existing Rating | Remove Rating | Rating Cleared | ✅ |
| Existing Rating | Enter Invalid Value | Validation Error | ✅ |
| Existing Rating | Same Rating Again | No Functional Change | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02.01_Creation.md

## Referenced By

- 02.06_Statistics_Rules.md

- 02.07_Dashboard_Rules.md

- 02.11_Recommendation_Rules.md

- 04_Database_Specification/

- 05_UI_UX_Specification/

- 09_Testing_and_QA/



# Final Review

A Rating is the User's current personal evaluation of a cultural work.

Version 1 intentionally stores only the latest Rating.

The system should encourage Users to refine their opinions over time without introducing unnecessary complexity.

The latest Rating is always considered the authoritative representation of the User's opinion.























# 02.02.02.02_Appreciation_Level_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing Favorite Level behavior.

Favorite Level represents the User's personal emotional relationship with a cultural work.

It intentionally measures personal significance rather than objective quality.



# Scope

This document defines:

- Favorite Level assignment,

- Favorite Level modification,

- validation,

- automatic system effects,

- ownership,

- integrity.



# Guiding Principle

Favorite Level reflects emotional importance.

Rating reflects perceived quality.

These concepts are intentionally independent.

Neither should determine the other.



# User Flow Summary

User opens an existing Library Entry.

↓

User selects a Favorite Level.

↓

System validates the selection.

↓

Library Entry is updated.

↓

Dependent information is refreshed.

↓

Changes become immediately visible.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Favorite Level belongs exclusively to the User who owns the Library Entry.

Different Users may assign different Favorite Levels to the same Content.



## Rule A.2 — Independent Evaluation

### Rule Type

Mandatory Rule



Favorite Level never affects another User's Library Entry.

Every Favorite Level is personal.



# Rule Group B — Assignment

## Rule B.1 — Optional Assignment

### Rule Type

Optional Rule



Assigning a Favorite Level is optional.

Library Entries remain fully valid without one.



## Rule B.2 — Manual Selection Only

### Rule Type

Mandatory Rule



Favorite Level may only be assigned by explicit User choice.

The application must never automatically assign or upgrade Favorite Levels.



## Rule B.3 — Allowed Levels

### Rule Type

Mandatory Rule



Version 1 supports the following official Favorite Levels:

- Disliked

- Liked

- Favorite

- Legendary

No additional levels are permitted.



# Rule Group C — Validation

## Rule C.1 — Single Selection

### Rule Type

Mandatory Rule



A Library Entry may have only one active Favorite Level at a time.

Selecting a new Favorite Level replaces the previous one.



## Rule C.2 — Valid Values Only

### Rule Type

Mandatory Rule



Only officially defined Favorite Levels are accepted.

Invalid values must be rejected.











# 02.02.02.03_Status_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing the Status of a Library Entry.

Status represents the current stage of the User's relationship with a cultural work.

It is independent from Rating, Appreciation Level and Favorite.



# Scope

This document defines:

- Status assignment,

- Status modification,

- validation,

- automatic system behavior,

- interaction with Archive Location,

- interaction with repeated consumption.



# Guiding Principle

Status represents the current progress of the User's interaction with a cultural work.

It does not measure quality, emotional appreciation or personal importance.



# User Flow Summary

User opens an existing Library Entry.

↓

User selects a new Status.

↓

System validates the transition.

↓

Cross-module validation is executed.

↓

Library Entry is updated.

↓

Derived information is refreshed.

↓

Changes become immediately visible.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Status belongs exclusively to the User who owns the Library Entry.

Different Users may assign different Status values to the same Content.



## Rule A.2 — Independent Progress

### Rule Type

Mandatory Rule



A User's Status never affects another User's Library Entry.

Every progression remains personal.



# Rule Group B — Allowed Status Values

## Rule B.1 — Official Status Values

### Rule Type

Mandatory Rule



Version 1 officially supports:

- In Progress

- Completed

- Dropped

No additional Status values are permitted.



## Rule B.2 — Optional Assignment

### Rule Type

Optional Rule



Assigning a Status is optional.

If omitted, the application should provide a sensible default based on the creation flow.



# Rule Group C — Status Integrity

## Rule C.1 — Single Active Status

### Rule Type

Mandatory Rule



A Library Entry may have only one active Status at any given time.

Selecting a new Status replaces the previous one.



## Rule C.2 — Manual Control

### Rule Type

Mandatory Rule



The application must never change a Status automatically based solely on repeated consumption.

Only explicit User actions may modify Status.

# Rule Group D — Status Transition Rules

## Rule D.1 — User Controlled Transitions

### Rule Type

Mandatory Rule



### Description

The User may change the Status of a Library Entry at any time.

The application should not unnecessarily restrict valid Status transitions.

The User remains the authoritative source of their own progress.



## Rule D.2 — One Active Status

### Rule Type

Mandatory Rule



### Description

Changing the Status immediately replaces the previous Status.

Historical Status values are not stored in Version 1.

Only the current Status is considered active.



## Rule D.3 — Repeated Consumption

### Rule Type

Mandatory Rule



### Description

Recording an additional consumption must never change the current Status automatically.

Repeated consumption only updates the Consumption Counter and any related optional information.

Status remains unchanged unless explicitly modified by the User.



# Rule Group E — Archive and Wishlist Interaction

## Rule E.1 — Moving from Wishlist to Archive

### Rule Type

Mandatory Rule



### Description

When a Library Entry is moved from Wishlist to Archive, the application should request the User to select an appropriate Status if none has already been defined.

The application may suggest a sensible default, but the final decision always belongs to the User.



### Design Principle

The system assists.

The User decides.



## Rule E.2 — Archive Entries

### Rule Type

Mandatory Rule



### Description

Archive entries may use any officially supported Status value.

The Archive represents stored experiences.

Status represents the current stage of those experiences.

These concepts are related but independent.



# Rule Group F — Automatic System Effects

## Rule F.1 — Statistics Refresh

### Rule Type

Derived Rule



### Description

Whenever a Status changes, all dependent statistics must update automatically.

Examples include:

- Completed counts

- In Progress counts

- Dropped counts

- Monthly statistics

- Dashboard summaries



## Rule F.2 — Immediate Visibility

### Rule Type

Mandatory Rule



### Description

A modified Status becomes immediately visible throughout the application.

Search results, filters, dashboards and statistics must reflect the latest Status without requiring manual refresh.



# Rule Group G — User Experience Principles

## Rule G.1 — Respect User Progress

The application should never assume that a User's journey follows a fixed path.

Status exists to reflect reality, not to enforce it.



## Rule G.2 — Clear Terminology

Every Status value should be immediately understandable without additional explanation.

Users should always know what each Status represents.



## Rule G.3 — Low Friction

Changing a Status should require only a single interaction whenever possible.

The process should remain fast, simple and reversible.



# Rule Group H — Validation Exceptions

## Rule H.1 — Empty Status

### Rule Type

Optional Rule



### Description

A Library Entry may exist without a Status.

The absence of a Status must never invalidate the Library Entry.

Users may assign or change a Status at any time.



## Rule H.2 — Independent Consumption Counter

### Rule Type

Mandatory Rule



### Description

Changing the Status must never modify the Consumption Counter.

Status and Consumption represent different concepts and are managed independently.



## Rule H.3 — Invalid Status Value

### Rule Type

Mandatory Rule



### Description

Values outside the officially supported Status list must be rejected.

The previous Status remains unchanged.

The User should receive a clear validation message.



# Status Behavior Matrix

| Current Status | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Empty | Set In Progress | Updated | ✅ |
| Empty | Set Completed | Updated | ✅ |
| Empty | Set Dropped | Updated | ✅ |
| In Progress | Set Completed | Updated | ✅ |
| Completed | Set In Progress | Updated | ✅ |
| Completed | Set Dropped | Updated | ✅ |
| Dropped | Set In Progress | Updated | ✅ |
| Dropped | Set Completed | Updated | ✅ |
| Any | Invalid Status | Validation Error | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

## Referenced By

- 02.06_Statistics_Rules.md

- 02.07_Dashboard_Rules.md

- 05_UI_UX_Specification/

- 09_Testing_and_QA/



# Final Review

Status represents the current stage of a User's relationship with a cultural work.

It intentionally does not measure quality, emotional appreciation or personal importance.

Status remains fully controlled by the User.

The application assists by providing sensible defaults and validation but never overrides explicit User decisions.

Status modifications must remain simple, reversible and independent from unrelated Library Entry properties.























# 02.02.02.04_Personal_Note_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing Personal Notes attached to a Library Entry.

A Personal Note allows the User to preserve thoughts, memories or observations related to a cultural work.

Notes are entirely personal and exist to support long-term memory rather than public review.



# Scope

This document defines:

- note creation,

- note modification,

- note deletion,

- validation,

- ownership,

- integrity.



# Guiding Principle

A Personal Note is written by the User for the User.

It is not intended for public consumption.

The application should encourage authenticity rather than polished writing.



# User Flow Summary

User opens an existing Library Entry.

↓

User creates or edits a Personal Note.

↓

System validates the content.

↓

Library Entry is updated.

↓

The latest version becomes immediately available.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Every Personal Note belongs exclusively to the User who owns the Library Entry.

No other User may view or modify it unless a future sharing feature explicitly allows it.



## Rule A.2 — Independent Notes

### Rule Type

Mandatory Rule



Different Users may write completely different Personal Notes for the same Content.

Notes are never shared between Library Entries.



# Rule Group B — Creation

## Rule B.1 — Optional Feature

### Rule Type

Optional Rule



Creating a Personal Note is entirely optional.

A Library Entry remains fully valid without one.



## Rule B.2 — Single Active Note

### Rule Type

Mandatory Rule



Each Library Entry may contain one active Personal Note.

Editing the note updates the existing note rather than creating a second one.

Version 1 stores only the latest version of the note.



## Rule B.3 — Manual Editing Only

### Rule Type

Mandatory Rule



The application must never generate, rewrite or modify a Personal Note automatically.

Only explicit User actions may change its content.

Rule Group C — Validation

Rule C.1 — Empty Note

Rule Type

Optional Rule



Description

A Personal Note may be empty or absent.

Removing a note never invalidates the Library Entry.



Rule C.2 — Content Integrity

Rule Type

Mandatory Rule



Description

A Personal Note must preserve exactly what the User has written.

The application must not rewrite, summarize, translate or otherwise alter the content automatically.



Rule C.3 — Technical Limits

Rule Type

Implementation Rule



Description

Reasonable technical limits may be applied to Personal Notes.

Specific limits are defined outside the Business Rules documentation.



Rule Group D — Automatic System Effects

Rule D.1 — Immediate Availability

Rule Type

Mandatory Rule



Description

Changes to a Personal Note become immediately visible throughout the application.

Every view displaying the Library Entry must show the latest saved note.



Rule D.2 — No Derived Statistics

Rule Type

Mandatory Rule



Description

Personal Notes do not directly affect Ratings, Statistics, Rankings or Recommendations.

Their purpose is personal memory preservation.



Rule Group E — User Experience Principles

Rule E.1 — Encourage Authenticity

The application should encourage Users to write naturally.

Personal Notes are reminders to one's future self, not public reviews.



Rule E.2 — Preserve Original Meaning

The application should faithfully preserve the User's words.

Formatting, spelling or writing style should never be modified automatically.



Rule E.3 — Low Friction

Creating or editing a Personal Note should remain simple and optional.

Users should never feel obligated to write notes.



Rule Group F — Validation Exceptions

Rule F.1 — Note Removal

Rule Type

Mandatory Rule



Description

The User may remove a Personal Note at any time.

Removing a note does not affect the validity of the Library Entry.

After removal, the Library Entry simply contains no active Personal Note.



Rule F.2 — Invalid Content

Rule Type

Mandatory Rule



Description

If a Personal Note exceeds technical implementation limits or cannot be saved successfully, the existing note must remain unchanged.

The User should receive a clear validation message.



Rule F.3 — Independent Property

Rule Type

Mandatory Rule



Description

Modifying or removing a Personal Note must not automatically modify any unrelated Library Entry property.

Examples include:

- Rating

- Appreciation Level

- Favorite

- Status

- Consumption Counter

These properties remain unchanged unless explicitly modified by the User.



Personal Note Behavior Matrix

| Current State | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Empty | Create Note | Note Saved | ✅ |
| Existing Note | Edit Note | Existing Note Updated | ✅ |
| Existing Note | Delete Note | Note Removed | ✅ |
| Existing Note | Invalid Save | Validation Error | ✅ |
| Empty | Leave Empty | No Change | ✅ |



Related Documents

Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

Referenced By

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



Final Review

A Personal Note represents the User's private memory associated with a cultural work.

It is intentionally personal, optional and editable.

The application should preserve authenticity, minimize friction and ensure that Personal Notes never interfere with other Library Entry properties.

Version 1 stores only the latest active note.

Future versions may introduce note history or multiple notes without changing the core behavior defined in this document.





















# 02.02.02.05_Tag_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing personal Tags attached to a Library Entry.

Tags allow Users to create their own organizational system independently of official metadata such as Genres or Collections.

Tags are entirely personal and exist to improve discovery, filtering and long-term memory.



# Scope

This document defines:

- Tag creation,

- Tag assignment,

- Tag removal,

- validation,

- ownership,

- integrity.



# Guiding Principle

Genres describe what a cultural work is.

Tags describe what that cultural work means to the User.

Tags are personal knowledge.

Genres are shared metadata.

These concepts must remain independent.



# User Flow Summary

User opens an existing Library Entry.

↓

User searches for an existing Tag.

↓

Matching Tags suggested?

├── Yes → User may select one.
│
└── No → User may create a new Tag.

↓

Tag is assigned to the Library Entry.

↓

Changes become immediately available for search and filtering.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Every Tag belongs exclusively to the User who created it.

Tags are never shared between Users.

Different Users may create identical Tag names without affecting one another.



## Rule A.2 — Personal Vocabulary

### Rule Type

Mandatory Rule



Each User builds an independent Tag vocabulary.

The application must never merge, rename or synchronize Tags between different Users.



# Rule Group B — Tag Creation

## Rule B.1 — Manual Creation

### Rule Type

Mandatory Rule



New Tags may only be created through explicit User action.

The application must never generate Tags automatically.



## Rule B.2 — Similar Tag Suggestions

### Rule Type

Mandatory Rule



Before creating a new Tag, the application should search the User's existing Tags for similar names.

If similar Tags are found, they should be presented as suggestions.

The User remains free to:

- select an existing Tag, or

- continue creating a new Tag.

Suggestions must never prevent Tag creation.



## Rule B.3 — Case-Insensitive Identity

### Rule Type

Mandatory Rule



Tag comparison must be case-insensitive.

Examples:

- Mind Blowing

- mind blowing

- MIND BLOWING

are considered the same Tag for comparison purposes.

The original capitalization chosen by the User should be preserved for display.



## Rule B.4 — Duplicate Prevention

### Rule Type

Mandatory Rule



A User cannot create two Tags that are identical after normalization.

If an equivalent Tag already exists, the application should recommend using the existing Tag instead of creating a duplicate.

Rule Group C — Tag Assignment

Rule C.1 — Multiple Tags Allowed

Rule Type

Mandatory Rule



Description

A Library Entry may have any reasonable number of Tags.

The application must support assigning multiple Tags to the same Library Entry.

Specific technical limits are defined outside the Business Rules documentation.



Rule C.2 — No Duplicate Assignments

Rule Type

Mandatory Rule



Description

The same Tag cannot be assigned more than once to the same Library Entry.

Duplicate assignments must be prevented.



Rule C.3 — Independent Tags

Rule Type

Mandatory Rule



Description

Tags are independent.

Adding or removing one Tag must never affect any other assigned Tag.



Rule Group D — Tag Removal

Rule D.1 — Remove from Library Entry

Rule Type

Mandatory Rule



Description

Removing a Tag from a Library Entry affects only that Library Entry.

The Tag itself continues to exist if it is still referenced elsewhere.



Rule D.2 — Delete Personal Tag

Rule Type

Mandatory Rule



Description

Deleting a Tag removes it from the User's personal Tag library.

The application should clearly warn the User if the Tag is currently used by one or more Library Entries.

The User must explicitly confirm the deletion.



Design Principle

Prevent accidental loss of personal organization.



Rule Group E — Automatic System Effects

Rule E.1 — Search Update

Rule Type

Derived Rule



Description

Tag modifications immediately update Search results.



Rule E.2 — Filter Update

Rule Type

Derived Rule



Description

Tag modifications immediately update Filter availability and results.



Rule E.3 — Dashboard Consistency

Rule Type

Mandatory Rule



Description

Every view displaying assigned Tags must immediately reflect the latest Tag state.



Rule Group F — User Experience Principles

Rule F.1 — Personal Language

Users should feel free to organize their library using their own terminology.

The application should never encourage a standardized Tag vocabulary.



Rule F.2 — Helpful Suggestions

Suggestions should reduce duplication without restricting creativity.

The User always makes the final decision.



Rule F.3 — Fast Assignment

Assigning an existing Tag should normally require no more than a few interactions.

The experience should remain lightweight even for large personal Tag libraries.

# Rule Group G — Validation Exceptions

## Rule G.1 — Empty Tag Library

### Rule Type

Optional Rule



### Description

A User may have no personal Tags.

An empty Tag library is a fully valid system state.

The application should continue functioning normally.



## Rule G.2 — Global Assignment Refresh

### Rule Type

Mandatory Rule



### Description

If a Personal Tag is permanently deleted, every Library Entry referencing that Tag must immediately reflect the deletion.

The application must not leave orphaned Tag references.



## Rule G.3 — Invalid Tag Assignment

### Rule Type

Mandatory Rule



### Description

If Tag assignment fails validation, the existing Tag assignments remain unchanged.

The User should receive a clear validation message.



# Tag Behavior Matrix

| Current State | User Action | Result | Allowed |
| --- | --- | --- | --- |
| No Tags | Create Tag | Tag Created | ✅ |
| Existing Tag | Assign to Library Entry | Assigned | ✅ |
| Assigned Tag | Remove from Library Entry | Assignment Removed | ✅ |
| Existing Tag | Delete Tag | Confirmation Required | ✅ |
| Existing Tag | Attempt Duplicate Assignment | Prevented | ✅ |
| Empty Tag Library | Continue Using Application | Fully Supported | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

## Referenced By

- 02.10_Search_Filtering_Rules.md

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



# Final Review

Tags provide a flexible, User-defined organizational layer independent of official metadata.

They exist to improve discovery, filtering and long-term memory while remaining entirely under the User's control.

Version 1 intentionally keeps the Tag model lightweight.

Future versions may extend the system with hierarchical Tags, colors or advanced organization without changing the core behavior defined in this document.













































# 02.02.02.06_Collection_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing personal Collections.

Collections allow Users to intentionally group multiple Library Entries according to their own organizational logic.

Collections are completely independent from Genres and Tags.



# Scope

This document defines:

- Collection creation,

- Collection modification,

- Collection assignment,

- Collection removal,

- validation,

- ownership,

- integrity.



# Guiding Principle

Genres classify cultural works.

Tags describe personal meaning.

Collections intentionally group Library Entries.

Collections represent personal curation rather than metadata.



# User Flow Summary

User opens an existing Library Entry.

↓

User searches for an existing Collection.

↓

Matching Collection found?

├── Yes → Select Collection.
│
└── No → Create new Collection.

↓

Library Entry is assigned to the selected Collection.

↓

Changes become immediately available.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Every Collection belongs exclusively to the User who created it.

Collections are never shared between Users.



## Rule A.2 — Independent Collections

### Rule Type

Mandatory Rule



Different Users may create Collections with identical names.

These Collections remain completely independent.



# Rule Group B — Collection Creation

## Rule B.1 — Manual Creation Only

### Rule Type

Mandatory Rule



Collections may only be created through explicit User action.

The application must never automatically create Collections.



## Rule B.2 — User-Defined Organization

### Rule Type

Mandatory Rule



The application must never interpret the purpose of a Collection.

Collection names and meanings belong entirely to the User.



## Rule B.3 — Duplicate Prevention

### Rule Type

Mandatory Rule



A User cannot create two Collections with the same normalized name.

The application should recommend using the existing Collection instead.



## Rule B.4 — Case-Insensitive Comparison

### Rule Type

Mandatory Rule



Collection names are compared case-insensitively.

The User's preferred capitalization is preserved for display purposes.

Rule Group C — Collection Assignment

Rule C.1 — Multiple Collection Membership

Rule Type

Mandatory Rule



Description

A Library Entry may belong to multiple Collections simultaneously.

Assigning a Library Entry to one Collection must never remove it from another Collection.



Rule C.2 — No Duplicate Assignment

Rule Type

Mandatory Rule



Description

The same Library Entry cannot be assigned to the same Collection more than once.

Duplicate assignments must be prevented.



Rule C.3 — Independent Membership

Rule Type

Mandatory Rule



Description

Adding or removing a Library Entry from one Collection must not affect its membership in any other Collection.



Rule Group D — Collection Removal

Rule D.1 — Remove from Collection

Rule Type

Mandatory Rule



Description

Removing a Library Entry from a Collection affects only that Collection.

The Library Entry itself remains unchanged.



Rule D.2 — Delete Collection

Rule Type

Mandatory Rule



Description

Deleting a Collection removes only the Collection.

Library Entries previously assigned to that Collection must remain intact.

The application should clearly warn the User before deleting a Collection that contains one or more Library Entries.

User confirmation is required.



Design Principle

Protect User-created organization.



Rule Group E — Automatic System Effects

Rule E.1 — Collection Refresh

Rule Type

Derived Rule



Description

Collection changes become immediately visible throughout the application.



Rule E.2 — Search and Filter Update

Rule Type

Derived Rule



Description

Search results and Collection filters must immediately reflect Collection changes.



Rule E.3 — Collection Counts

Rule Type

Derived Rule



Description

Whenever Library Entries are added to or removed from a Collection, the Collection item count must update automatically.



Rule Group F — User Experience Principles

Rule F.1 — Personal Curation

Collections exist to help Users organize their personal cultural library.

The application should never attempt to interpret the purpose of a Collection.



Rule F.2 — Flexible Organization

Users should freely reorganize their Collections at any time.

The application should support experimentation without unnecessary restrictions.



Rule F.3 — Fast Assignment

Assigning a Library Entry to an existing Collection should require only a few interactions.

The experience should remain lightweight regardless of library size.

# Rule Group G — Validation Exceptions

## Rule G.1 — Empty Collection

### Rule Type

Optional Rule



### Description

A Collection may exist without any assigned Library Entries.

Empty Collections are fully supported.

Users may populate them at any time.



## Rule G.2 — Independent Library Entries

### Rule Type

Mandatory Rule



### Description

Deleting a Collection must never delete, modify or invalidate any Library Entry.

Only the organizational relationship is removed.



## Rule G.3 — Invalid Assignment

### Rule Type

Mandatory Rule



### Description

If assigning a Library Entry to a Collection fails validation, the existing Collection assignments remain unchanged.

The User should receive a clear validation message.



# Collection Behavior Matrix

| Current State | User Action | Result | Allowed |
| --- | --- | --- | --- |
| No Collections | Create Collection | Collection Created | ✅ |
| Empty Collection | Add Library Entry | Assignment Created | ✅ |
| Assigned Entry | Remove from Collection | Assignment Removed | ✅ |
| Existing Collection | Delete Collection | Confirmation Required | ✅ |
| Empty Collection | Leave Empty | Valid State | ✅ |
| Duplicate Assignment | Assign Again | Prevented | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

## Referenced By

- 02.10_Search_Filtering_Rules.md

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



# Final Review

Collections provide a User-defined organizational layer for grouping Library Entries.

They intentionally remain independent from official metadata such as Genres and from personal descriptors such as Tags.

Collections are flexible, optional and fully controlled by the User.

Deleting a Collection never affects the existence or validity of the Library Entries it previously contained.

Version 1 intentionally focuses on manual Collections.

Future versions may introduce Smart Collections or visual enhancements without changing the core behavior defined in this document.

# 02.02.02.07_Wishlist_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing Wishlist behavior.

Wishlist represents the User's intention to experience a cultural work in the future.

Wishlist is a Library Entry location.

It is not a Rating, Status, Favorite or Appreciation Level.



# Scope

This document defines:

- moving Library Entries into Wishlist,

- moving Library Entries out of Wishlist,

- validation,

- ownership,

- integrity.



# Guiding Principle

A Wishlist Library Entry represents future intent.

The Library Entry itself continues to exist regardless of its current location.

Changing the location never creates a second Library Entry.



# User Flow Summary

User creates or selects a Library Entry.

↓

User chooses Wishlist as the current location.

↓

System validates the request.

↓

Location is updated.

↓

The same Library Entry continues its lifecycle.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Wishlist membership belongs exclusively to the owning User.

Different Users maintain completely independent Wishlists.



## Rule A.2 — Single Library Entry

### Rule Type

Mandatory Rule



Moving a Library Entry into Wishlist must never create a duplicate Library Entry.

Only the Location changes.

The Library Entry identity remains unchanged.



# Rule Group B — Wishlist Membership

## Rule B.1 — Single Active Location

### Rule Type

Mandatory Rule



A Library Entry may exist in only one Location at any given time.

Version 1 officially supports:

- Wishlist

- Archive

- Trash



## Rule B.2 — Wishlist Represents Future Intent

### Rule Type

Mandatory Rule



A Wishlist Library Entry represents content the User intends to experience in the future.

Wishlist should not normally contain completed cultural works.



## Rule B.3 — User Controlled Movement

### Rule Type

Mandatory Rule



Moving a Library Entry into or out of Wishlist requires explicit User action.

The application must never relocate Library Entries automatically.

# Rule Group C — Location Transitions

## Rule C.1 — Wishlist → Archive

### Rule Type

Mandatory Rule



### Description

A Library Entry may be moved from Wishlist to Archive at any time.

The same Library Entry continues to exist.

Only its Location changes.

Its identity, metadata and User-generated information remain unchanged.



## Rule C.2 — Archive → Wishlist

### Rule Type

Mandatory Rule



### Description

A Library Entry may be moved from Archive back to Wishlist.

This supports future plans such as rewatching, rereading or replaying a cultural work.

The application must not restrict this transition.



## Rule C.3 — Identity Preservation

### Rule Type

Mandatory Rule



### Description

Changing the Location must preserve every property of the Library Entry.

Examples include:

- Rating

- Appreciation Level

- Favorite

- Status

- Personal Note

- Tags

- Collections

- Images

- Consumption Counter

No User data may be lost during a Location change.



# Rule Group D — Automatic System Effects

## Rule D.1 — Immediate Refresh

### Rule Type

Derived Rule



### Description

Changing the Location immediately updates all affected views throughout the application.

Wishlist, Archive, Dashboard, Search and Filters must reflect the new Location without requiring manual refresh.



## Rule D.2 — Statistics Refresh

### Rule Type

Derived Rule



### Description

Statistics depending on Library Entry Location must automatically update after every successful Location change.



# Rule Group E — User Experience Principles

## Rule E.1 — Reversible Actions

Location changes should always remain simple and reversible.

Users should feel comfortable reorganizing their library over time.



## Rule E.2 — Preserve Personal History

Changing a Library Entry's Location must never erase or reset personal information associated with that entry.

The User's history should travel together with the Library Entry.



## Rule E.3 — Clear Intent

The application should clearly communicate that moving a Library Entry changes only its current Location.

It does not create a new Library Entry or duplicate existing information.

# Rule Group F — Validation Exceptions

## Rule F.1 — Empty Wishlist

### Rule Type

Optional Rule



### Description

A User may have no Library Entries in the Wishlist.

An empty Wishlist is a fully valid system state.

The application should continue functioning normally.



## Rule F.2 — Independent Consumption History

### Rule Type

Mandatory Rule



### Description

Changing the Location of a Library Entry must never modify its Consumption Counter or historical User data.

Location changes only affect organizational placement.



## Rule F.3 — Invalid Location Change

### Rule Type

Mandatory Rule



### Description

If moving a Library Entry fails validation, the current Location remains unchanged.

The User should receive a clear validation message.



# Wishlist Behavior Matrix

| Current Location | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Wishlist | Move to Archive | Location Updated | ✅ |
| Archive | Move to Wishlist | Location Updated | ✅ |
| Wishlist | Leave in Wishlist | No Change | ✅ |
| Wishlist | Invalid Move | Validation Error | ✅ |
| Empty Wishlist | Continue Using Application | Fully Supported | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

## Referenced By

- 02.02.02.08_Archive_Modification.md

- 02.06_Statistics_Rules.md

- 05_UI_UX_Specification/

- 09_Testing_and_QA/



# Final Review

Wishlist represents a User's future intention regarding a cultural work.

It is defined as a Library Entry Location rather than a Status or evaluation.

Moving a Library Entry into or out of Wishlist preserves its identity, personal history and all associated User data.

Version 1 intentionally maintains a single Library Entry throughout the entire lifecycle of a cultural work.







# 02.02.02.08_Archive_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing Archive behavior.

Archive represents the User's primary cultural library.

Library Entries stored in Archive remain fully manageable and preserve all personal information.



# Scope

This document defines:

- moving Library Entries into Archive,

- moving Library Entries out of Archive,

- validation,

- ownership,

- integrity.



# Guiding Principle

Archive is the primary Location of a Library Entry.

Archive stores the User's long-term cultural history.

The Library Entry continues to exist as a single identity throughout its lifecycle.



# User Flow Summary

User selects a Library Entry.

↓

User moves it to Archive.

↓

Location is updated.

↓

The same Library Entry continues its lifecycle.

↓

All personal information remains available.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Every Archive Library Entry belongs exclusively to the owning User.

Different Users maintain completely independent Archives.



## Rule A.2 — Identity Preservation

### Rule Type

Mandatory Rule



Moving a Library Entry into Archive must never create a duplicate Library Entry.

Only the Location changes.

The Library Entry identity remains unchanged.



# Rule Group B — Archive Membership

## Rule B.1 — Primary Library

### Rule Type

Mandatory Rule



Archive represents the User's primary personal library.

Most long-term Library Entries are expected to reside in Archive.



## Rule B.2 — Full Management

### Rule Type

Mandatory Rule



Library Entries located in Archive remain fully editable.

Users may modify any supported Library Entry property while the entry resides in Archive.



## Rule B.3 — User Controlled Movement

### Rule Type

Mandatory Rule



Moving a Library Entry into or out of Archive requires explicit User action.

The application must never relocate Library Entries automatically.

Rule Group C — Archive Lifecycle

Rule C.1 — Continuous Management

Rule Type

Mandatory Rule



Description

A Library Entry stored in Archive remains fully editable throughout its lifetime.

Archive does not lock or finalize Library Entries.



Rule C.2 — Archive ↔ Wishlist

Rule Type

Mandatory Rule



Description

A Library Entry may be moved freely between Archive and Wishlist.

Both Locations are permanent parts of the Library Entry lifecycle.



Rule C.3 — Archive → Trash

Rule Type

Mandatory Rule



Description

A Library Entry may be moved from Archive to Trash through explicit User action.

Only the Location changes.

The Library Entry identity and all associated User data remain preserved.



Rule Group D — Automatic System Effects

Rule D.1 — Immediate Refresh

Rule Type

Derived Rule



Description

Moving a Library Entry into or out of Archive immediately updates all affected application views.



Rule D.2 — Statistics Refresh

Rule Type

Derived Rule



Description

Location-dependent statistics update automatically after every successful Archive transition.



Rule D.3 — Search Availability

Rule Type

Derived Rule



Description

Search and filtering results must immediately reflect Archive Location changes.



Rule Group E — User Experience Principles

Rule E.1 — Living Archive

Archive represents an evolving personal cultural history.

Users should always feel free to improve, reorganize and update their Library Entries.



Rule E.2 — Preserve Everything

Moving a Library Entry into Archive must never remove any personal information.

Archive is intended to preserve rather than simplify.



Rule E.3 — No Artificial Restrictions

The application should never prevent legitimate Archive modifications without a valid business reason.

# Rule Group F — Validation Exceptions

## Rule F.1 — Empty Archive

### Rule Type

Optional Rule



### Description

A User may have no Library Entries in Archive.

An empty Archive is a fully valid system state.

The application should continue functioning normally.



## Rule F.2 — Preserve Library Entry Data

### Rule Type

Mandatory Rule



### Description

Moving a Library Entry out of Archive must never remove, reset or modify any User-generated information.

Only the Location changes.

All associated Library Entry data must remain intact.



## Rule F.3 — Invalid Location Change

### Rule Type

Mandatory Rule



### Description

If moving a Library Entry fails validation, the current Location remains unchanged.

The User should receive a clear validation message.



# Archive Behavior Matrix

| Current Location | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Wishlist | Move to Archive | Location Updated | ✅ |
| Archive | Move to Wishlist | Location Updated | ✅ |
| Archive | Move to Trash | Location Updated | ✅ |
| Archive | Invalid Move | Validation Error | ✅ |
| Empty Archive | Continue Using Application | Fully Supported | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

- 02.02.02.07_Wishlist_Modification.md

## Referenced By

- 02.02.02.09_Trash_Modification.md

- 02.06_Statistics_Rules.md

- 05_UI_UX_Specification/

- 09_Testing_and_QA/



# Final Review

Archive is the primary Location of a Library Entry.

It represents the User's long-term personal cultural library.

Moving a Library Entry into or out of Archive preserves its identity, history and every User-generated property.

Version 1 intentionally treats Archive as a living environment where Library Entries continue to evolve over time.

















# 02.02.02.09_Trash_Modification.md

Document Status: Draft

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document defines every business rule governing Trash behavior.

Trash provides a protected intermediate stage before permanent deletion.

It exists to prevent accidental data loss while preserving the User's ability to restore Library Entries.



# Scope

This document defines:

- moving Library Entries into Trash,

- restoring Library Entries,

- permanent deletion,

- validation,

- ownership,

- integrity.



# Guiding Principle

Trash is a temporary Location.

A Library Entry stored in Trash continues to exist until permanently deleted.

The application prioritizes recovery over immediate deletion.



# User Flow Summary

User selects a Library Entry.

↓

User moves it to Trash.

↓

Library Entry remains recoverable.

↓

User may:

- Restore it, or

- Permanently delete it.



# Rule Group A — Ownership

## Rule A.1 — Personal Ownership

### Rule Type

Mandatory Rule



Every Library Entry in Trash belongs exclusively to its owning User.

Trash contents are never shared between Users.



## Rule A.2 — Identity Preservation

### Rule Type

Mandatory Rule



Moving a Library Entry into Trash must never create a duplicate Library Entry.

Only the Location changes.

The Library Entry identity remains unchanged.



# Rule Group B — Trash Membership

## Rule B.1 — Temporary Location

### Rule Type

Mandatory Rule



Trash represents a temporary holding area before permanent deletion.

Library Entries remain fully recoverable while stored in Trash.



## Rule B.2 — Restore Previous Location

### Rule Type

Mandatory Rule



Restoring a Library Entry must return it to its previous Location before it was moved to Trash.

The application must preserve the User's organizational structure.



## Rule B.3 — User Controlled Actions

### Rule Type

Mandatory Rule



Moving a Library Entry into Trash, restoring it or permanently deleting it all require explicit User action.

The application must never perform these actions automatically.

# Rule Group C — Permanent Deletion

## Rule C.1 — Explicit Confirmation

### Rule Type

Mandatory Rule



### Description

Permanent deletion requires explicit User confirmation.

The application must clearly communicate that the operation cannot be undone.



## Rule C.2 — Irreversible Operation

### Rule Type

Mandatory Rule



### Description

Once permanent deletion has been successfully completed, the Library Entry is permanently removed.

Restoration is no longer possible.



## Rule C.3 — Complete Removal

### Rule Type

Mandatory Rule



### Description

Permanent deletion removes the Library Entry together with all associated User-generated information.

Examples include:

- Rating

- Appreciation Level

- Favorite

- Status

- Personal Note

- Tags

- Collections

- Images

- Consumption Counter

No recoverable User data remains after permanent deletion.



# Rule Group D — Automatic System Effects

## Rule D.1 — Immediate Refresh

### Rule Type

Derived Rule



### Description

Trash, Archive, Wishlist, Search, Dashboard and all related views must immediately reflect successful deletion or restoration.



## Rule D.2 — Statistics Refresh

### Rule Type

Derived Rule



### Description

Every statistic depending on Library Entries must update automatically after permanent deletion or restoration.



# Rule Group E — User Experience Principles

## Rule E.1 — Safety First

The application should prioritize accidental deletion prevention over deletion speed.



## Rule E.2 — Clear Communication

Users must always understand whether they are:

- Moving to Trash,

- Restoring,

- Permanently deleting.

These actions should never appear identical.



## Rule E.3 — Respect User Intent

The application should never perform permanent deletion without explicit confirmation.



Rule C.4 — Empty Trash

Rule Type

Mandatory Rule



Description

The User may permanently delete all Library Entries currently stored in Trash through a dedicated "Empty Trash" operation.

This operation permanently deletes every Library Entry currently located in Trash.

The application must require explicit User confirmation before execution.

Once successfully completed, restoration is no longer possible for any affected Library Entry.



Design Principle

Bulk deletion is supported only after the User has intentionally moved Library Entries into Trash.

The application prioritizes both efficiency and deliberate user intent.

# Rule Group F — Validation Exceptions

## Rule F.1 — Empty Trash

### Rule Type

Optional Rule



### Description

A User may have no Library Entries in Trash.

An empty Trash is a fully valid system state.

The application should continue functioning normally.



## Rule F.2 — Failed Restore

### Rule Type

Mandatory Rule



### Description

If a restore operation fails validation or cannot be completed successfully, the Library Entry remains in Trash.

No partial restoration is permitted.

The User should receive a clear validation message.



## Rule F.3 — Atomic Bulk Deletion

### Rule Type

Mandatory Rule



### Description

The "Empty Trash" operation must be treated as a single logical operation.

If the operation cannot be completed successfully, no partial permanent deletion should occur.

The application should preserve data consistency and clearly notify the User of the outcome.



# Trash Behavior Matrix

| Current Location | User Action | Result | Allowed |
| --- | --- | --- | --- |
| Archive | Move to Trash | Location Updated | ✅ |
| Wishlist | Move to Trash | Location Updated | ✅ |
| Trash | Restore | Previous Location Restored | ✅ |
| Trash | Permanently Delete | Library Entry Removed Forever | ✅ |
| Trash | Empty Trash | All Trash Entries Permanently Deleted | ✅ |
| Empty Trash | Continue Using Application | Fully Supported | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/README.md

- 02.02.02.07_Wishlist_Modification.md

- 02.02.02.08_Archive_Modification.md

## Referenced By

- 02.06_Statistics_Rules.md

- 05_UI_UX_Specification/

- 06_Software_Requirements/

- 09_Testing_and_QA/



# Final Review

Trash represents a protected recovery stage before permanent deletion.

Library Entries stored in Trash remain recoverable until the User explicitly chooses permanent deletion.

The application prioritizes data safety, intentional actions and complete preservation of User information until irreversible deletion is confirmed.

Version 1 supports both individual permanent deletion and the deliberate "Empty Trash" operation.

























# 02.02.02.99_Completion_Review.md

Document Status: Approved

Document Version: 1.0

Module: Library Entry Modifications

Project: Mosaica



# Purpose

This document records the successful completion of the Library Entry Modifications module.

Its purpose is to verify that all Version 1 User-controlled modification behaviors have been fully defined, reviewed and internally validated before the Business Rules module proceeds to the Architecture Review stage.



# Scope

This Completion Review covers the following documents:

- README

- Rating Modification

- Appreciation Level Modification

- Status Modification

- Personal Note Modification

- Tag Modification

- Collection Modification

- Wishlist Modification

- Archive Modification

- Trash Modification



# Module Objectives

The objectives of this module were to define every supported User modification while preserving:

- Library Entry identity,

- User ownership,

- Data integrity,

- Architectural consistency,

- Long-term maintainability.



# Completion Verification

The following objectives have been successfully achieved.

## Functional Coverage

✓ Rating management

✓ Appreciation Level management

✓ Status management

✓ Personal Note management

✓ Personal Tag management

✓ Personal Collection management

✓ Wishlist transitions

✓ Archive transitions

✓ Trash management

✓ Permanent deletion workflow



## Architectural Verification

The module consistently follows the architectural principles defined by the Product Bible.

Verified principles include:

- Single Library Entry

- Explicit User Actions

- User Ownership

- Location-based Lifecycle

- Separation of Content and User Data

- Reversible Operations where applicable

- Preservation of User-generated information



## Consistency Verification

Every modification document follows the same documentation structure.

Verified sections include:

- Purpose

- Scope

- Guiding Principle

- User Flow Summary

- Business Rules

- Automatic System Effects

- User Experience Principles

- Validation Exceptions

- Behavior Matrix

- Related Documents

- Final Review

This consistency improves long-term maintainability and implementation clarity.



# Version 1 Scope Confirmation

The following functionality has been intentionally excluded from Version 1.

## User-uploaded Personal Images

This feature has been postponed to a future version.

Its exclusion is intentional and does not reduce the completeness of the Version 1 Business Rules.

Official Content artwork such as Posters, Covers and Backdrops remains part of the Content Metadata system and will be documented separately.



# Module Result

The Library Entry Modifications module is considered functionally complete.

No unresolved architectural conflicts were identified during the module review.

The module is ready to proceed to the Business Rules Architecture Review.



# Approval

Completion Status

APPROVED

Next Stage

02.99_Architecture_Review.md



































# 02.03_Statistics_Rules.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the business rules governing all statistical information generated from User Library Entries.

Statistics provide calculated insights into a User's personal cultural archive.

Statistics are always derived from existing data and are never directly editable by the User.



# Scope

This document defines:

- statistical calculations,

- automatic updates,

- included data,

- excluded data,

- integrity rules,

- User interaction.



# Guiding Principle

Statistics represent derived information.

They summarize the User's Library without becoming independent data.



# User Flow Summary

User performs an action affecting a Library Entry.

↓

The application validates the modification.

↓

Relevant statistics are automatically recalculated.

↓

Updated statistics become immediately available throughout the application.



# Rule Group A — General Principles

## Rule A.1 — Derived Information

### Rule Type

Mandatory Rule



All Statistics are derived from existing User and Content data.

Statistics are never entered or modified manually by the User.



## Rule A.2 — Automatic Updates

### Rule Type

Mandatory Rule



Whenever a Library Entry changes in a way that affects Statistics, the application must automatically update all affected statistical information.

No manual refresh is required.



## Rule A.3 — Read-only Data

### Rule Type

Mandatory Rule



Statistics are read-only.

Users may view statistical information but cannot edit calculated values directly.

# Rule Group B — Inclusion Rules

## Rule B.1 — Archive-based Statistics

### Rule Type

Mandatory Rule



Statistics representing the User's personal Library shall be calculated exclusively from Library Entries currently located in the Archive.

Library Entries stored in Wishlist or Trash shall not contribute to the User's primary Library statistics.



## Rule B.2 — Independent Counters

### Rule Type

Mandatory Rule



Wishlist and Trash maintain their own independent counters.

These counters represent the number of Library Entries currently stored in each respective Location.

They are informational only and do not affect Library-wide statistical calculations.



## Rule B.3 — Real-time Consistency

### Rule Type

Mandatory Rule



Whenever a Library Entry changes Location, all affected statistical values shall be updated automatically.

The User shall always see statistics that accurately reflect the current state of the Library.



# Rule Group C — Statistical Integrity

## Rule C.1 — Single Source of Truth

### Rule Type

Mandatory Rule



Statistics shall always be derived from the current state of Library Entries.

No statistical value shall exist independently from its underlying data source.



## Rule C.2 — No Manual Editing

### Rule Type

Mandatory Rule



Users cannot directly modify any calculated statistical value.

Statistics change only as a consequence of valid Library Entry modifications.



## Rule C.3 — Consistent Calculations

### Rule Type

Mandatory Rule



The same calculation rules shall be applied consistently throughout the application.

Dashboard, Statistics pages, recommendations and other application features must always use the same statistical source.

# Rule Group D — Calculation Rules

## Rule D.1 — Average Rating Calculation

### Rule Type

Mandatory Rule



Average Rating shall be calculated exclusively from Library Entries that have an assigned Rating.

Library Entries without a Rating are excluded from the calculation.

An unrated Library Entry shall never be interpreted as a Rating of zero.



## Rule D.2 — Automatic Recalculation

### Rule Type

Mandatory Rule



Whenever a User action affects one or more Statistics, the application shall automatically recalculate all impacted statistical values.

The User shall never be required to manually refresh Statistics.



## Rule D.3 — Immediate Availability

### Rule Type

Mandatory Rule



Updated Statistics shall become immediately available throughout the application after successful recalculation.

Every application component shall reference the same statistical values.



# Rule Group E — Dashboard Integration

## Rule E.1 — Shared Statistical Source

### Rule Type

Mandatory Rule



Dashboard information shall always be generated from the same statistical source used throughout the application.

No component may maintain independent statistical calculations.



## Rule E.2 — Consistent Presentation

### Rule Type

Derived Rule



Different application sections may present Statistics differently.

However, identical statistical values must always remain numerically consistent.

Presentation may vary.

Calculated values may not.



# Rule Group F — Validation Exceptions

## Rule F.1 — Empty Library

### Rule Type

Mandatory Rule



A User may have no Library Entries.

An empty Library represents a valid system state.

The application shall continue functioning normally.



## Rule F.2 — No Rated Entries

### Rule Type

Mandatory Rule



A User may have no rated Library Entries.

In such cases, the application shall not calculate an Average Rating.

Instead, an appropriate empty state shall be presented.

Rule F.3 — Current State Statistics

Rule Type

Mandatory Rule



Statistics represent only the current state of the User's Library.

The application does not maintain historical statistical snapshots as part of Version 1.

Historical analytics may be introduced in future versions without altering the current statistical model.



Statistics Behavior Matrix

| User Action | Statistics Updated | Allowed |
| --- | --- | --- |
| Add Library Entry | Yes | ✅ |
| Change Rating | Yes | ✅ |
| Change Appreciation Level | Yes | ✅ |
| Change Status | Yes | ✅ |
| Add or Remove Tags | Yes (if applicable) | ✅ |
| Move to Archive | Yes | ✅ |
| Move to Wishlist | Yes | ✅ |
| Move to Trash | Yes | ✅ |
| Restore from Trash | Yes | ✅ |
| Permanently Delete | Yes | ✅ |



Related Documents

Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

- 02.02.02_Modifications/

Referenced By

- 02.04_Dashboard_Rules.md

- 02.06_Search_Filtering_Rules.md

- 02.07_Recommendation_Rules.md

- 03_Domain_Model/



Final Review

Statistics provide a consistent, automatically maintained representation of the User's current Library.

They are entirely derived from Library Entry data and never exist as independently editable information.

The Version 1 statistical model intentionally represents only the current state of the Library, providing a simple, reliable and scalable foundation for future analytical features.







































# 02.04_Dashboard_Rules.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the business rules governing the User Dashboard.

The Dashboard provides a personalized overview of the User's Library and presents meaningful information and actions based on the current state of the Library.

The Dashboard never owns data.

It only presents information derived from existing Business Rules.



# Scope

This document defines:

- Dashboard behavior,

- displayed information,

- personalization,

- automatic updates,

- business constraints.



# Guiding Principle

The Dashboard is the primary entry point of the application.

Its purpose is to help the User understand the current state of their Library and encourage meaningful interaction.



# User Flow Summary

User opens the application.

↓

The application retrieves the current Library state.

↓

Relevant Dashboard information is generated.

↓

The User receives an up-to-date overview of their Library.



# Rule Group A — General Principles

## Rule A.1 — Personalized Dashboard

### Rule Type

Mandatory Rule



Each User has an independent Dashboard generated exclusively from their own Library Entries.

No Dashboard information is shared between Users.



## Rule A.2 — Read-only Information

### Rule Type

Mandatory Rule



The Dashboard presents information derived from existing Business Rules.

The Dashboard never stores independent data.



## Rule A.3 — Automatic Updates

### Rule Type

Mandatory Rule



Whenever underlying Library information changes, the Dashboard shall automatically reflect the updated state.

No manual refresh is required.

# Rule Group B — Dashboard Content

## Rule B.1 — Relevant Information

### Rule Type

Mandatory Rule



Every Dashboard component shall satisfy at least one of the following purposes:

- inform the User,

- encourage meaningful action,

- improve understanding of the current Library.

Components that satisfy none of these purposes shall not be included in the Dashboard.



## Rule B.2 — Current State Representation

### Rule Type

Mandatory Rule



The Dashboard shall always represent the current state of the User's Library.

Displayed information shall never intentionally present outdated or historical values.



## Rule B.3 — Personalized Content

### Rule Type

Mandatory Rule



Dashboard content shall be generated according to the current state of the individual User's Library.

Different Users may therefore receive different Dashboard content.



# Rule Group C — Dashboard Actions

## Rule C.1 — Action-oriented Design

### Rule Type

Mandatory Rule



Where appropriate, Dashboard components should allow the User to continue interacting with their Library through meaningful actions.

The Dashboard serves as an entry point to the application's primary workflows.



## Rule C.2 — Navigation

### Rule Type

Derived Rule



Dashboard components may navigate the User to other application sections.

The Dashboard itself does not perform Library modifications.

All modifications shall occur within their respective functional modules.



# Rule Group D — Statistics Integration

## Rule D.1 — Shared Statistics

### Rule Type

Mandatory Rule



All statistical information presented on the Dashboard shall originate from the Statistics module.

The Dashboard shall never calculate statistical values independently.



## Rule D.2 — Consistent Values

### Rule Type

Mandatory Rule



Identical statistical values shall remain consistent throughout the application.

The Dashboard shall always display the same calculated values used by other application modules.

# Rule Group E — Dashboard Configuration

## Rule E.1 — Fixed Dashboard Layout

### Rule Type

Mandatory Rule



Version 1 provides a fixed Dashboard layout for all Users.

The arrangement of Dashboard components is defined by the application and cannot be customized by the User.

Dashboard personalization is achieved through displayed content rather than layout customization.



# Rule Group F — Validation Exceptions

## Rule F.1 — Empty Library

### Rule Type

Mandatory Rule



A User may have an empty Library.

The Dashboard shall remain fully functional and present appropriate empty states instead of statistical information where applicable.



## Rule F.2 — Partial Information

### Rule Type

Mandatory Rule



Dashboard components may legitimately contain incomplete information when the corresponding Library data does not yet exist.

The application shall present meaningful empty states rather than invalid or misleading values.



# Dashboard Behavior Matrix

| Situation | Dashboard Behavior | Allowed |
| --- | --- | --- |
| Library Entry Added | Dashboard updates automatically | ✅ |
| Rating Changed | Related Dashboard information updates | ✅ |
| Statistics Updated | Dashboard reflects new values | ✅ |
| Empty Library | Empty state displayed | ✅ |
| No Rated Entries | Rating-related components display an appropriate empty state | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.03_Statistics_Rules.md

## Referenced By

- 02.06_Search_Filtering_Rules.md

- 02.07_Recommendation_Rules.md

- 03_Domain_Model/



# Final Review

The Dashboard serves as the User's primary entry point into Mosaica.

It provides a personalized, automatically updated overview of the current Library without maintaining independent data.

Version 1 intentionally prioritizes simplicity, consistency and meaningful guidance over interface customization.



















# 02.05_Metadata_Rules.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the business rules governing external Content metadata used by Mosaica.

Metadata provides descriptive information about Content and forms the shared informational foundation of the application.

Metadata is not User-owned.

It exists independently from individual Library Entries.



# Scope

This document defines:

- metadata ownership,

- metadata usage,

- metadata integrity,

- missing metadata,

- User interaction with metadata.



# Guiding Principle

Metadata describes Content.

It never describes an individual User's experience.

User-specific information is stored exclusively within Library Entries.



# User Flow Summary

Content is retrieved from an external metadata source.

↓

Metadata is validated.

↓

Content becomes available within Mosaica.

↓

Users create their own Library Entries linked to that Content.



# Rule Group A — Ownership

## Rule A.1 — Shared Metadata

### Rule Type

Mandatory Rule



Metadata belongs to the shared Content database.

All Users reference the same Content metadata.



## Rule A.2 — User Independence

### Rule Type

Mandatory Rule



Modifying a Library Entry shall never modify the underlying Content metadata.

User actions affect only User-owned information.



## Rule A.3 — Metadata Integrity

### Rule Type

Mandatory Rule



Metadata shall preserve a consistent representation of the underlying Content.

User interactions shall not compromise metadata integrity.

Rule Group B — Metadata Availability

Rule B.1 — Optional Metadata Fields

Rule Type

Mandatory Rule



Metadata may legitimately contain missing or unavailable information.

The absence of individual metadata fields shall not prevent the Content from existing within the application.



Rule B.2 — Graceful Handling

Rule Type

Mandatory Rule



Whenever metadata is unavailable, the application shall continue functioning normally.

Missing metadata shall never invalidate an existing Library Entry.



Rule Group C — User Interaction

Rule C.1 — Read-only Metadata

Rule Type

Mandatory Rule



Version 1 treats Content metadata as read-only.

Users cannot directly modify, replace or remove official metadata associated with Content.



Rule C.2 — Independent User Data

Rule Type

Mandatory Rule



User-generated information shall always remain independent from official Content metadata.

Changes made by the User affect only the associated Library Entry.



Rule Group D — External Sources

Rule D.1 — Provider Independence

Rule Type

Mandatory Rule



Business Rules shall remain independent from any specific external metadata provider.

The application may support one or more metadata providers without changing the business behavior defined by this document.



Rule D.2 — Consistent Metadata

Rule Type

Mandatory Rule



The application shall present a consistent representation of official metadata regardless of the originating provider.

Users shall experience a unified Content model throughout the application.



Rule Group E — Validation Exceptions

Rule E.1 — Incomplete Metadata

Rule Type

Mandatory Rule



Content with incomplete metadata represents a valid system state.

The application shall continue operating without requiring every metadata field to be populated.



Rule E.2 — Metadata Updates

Rule Type

Mandatory Rule



Official metadata may be updated when newer information becomes available from supported metadata providers.

Such updates shall never overwrite User-owned Library Entry data.

# Rule E.3 — Silent Metadata Updates

### Rule Type

Mandatory Rule



Metadata updates shall be applied silently.

Version 1 does not notify Users when official Content metadata is updated.



# Metadata Behavior Matrix

| Situation | Application Behavior | Allowed |
| --- | --- | --- |
| Metadata Retrieved | Content Created or Updated | ✅ |
| Metadata Missing | Application Continues Normally | ✅ |
| Metadata Updated | Content Metadata Updated | ✅ |
| User Modifies Library Entry | Metadata Unchanged | ✅ |
| Metadata Updated | User Data Preserved | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.01_Content_Lifecycle.md

- 02.02.01_Creation.md

## Referenced By

- 02.06_Search_Filtering_Rules.md

- 02.07_Recommendation_Rules.md

- 03_Domain_Model/

- 04_Database_Specification/



# Final Review

Metadata provides the shared descriptive foundation of Mosaica.

It remains independent from User-owned Library Entries while ensuring a consistent representation of Content across the application.

Version 1 intentionally treats metadata as read-only, automatically maintained information supplied by external providers.

Official metadata may evolve over time without affecting any User-owned information.















































# 02.06_Search_Filtering_Rules.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the business rules governing Search and Filtering throughout Mosaica.

Search enables Users to locate Content and Library Entries efficiently.

Filtering allows Users to refine result sets according to specific criteria.



# Scope

This document defines:

- Search behavior,

- Filtering behavior,

- Combined filtering,

- Result consistency,

- User interaction.



# Guiding Principle

Search finds.

Filtering refines.

Together they provide efficient access to the User's Library.



# User Flow Summary

User enters a search query or applies one or more filters.

↓

The application evaluates the current Library.

↓

Matching Library Entries are identified.

↓

Results are presented to the User.



# Rule Group A — Search

## Rule A.1 — Library Search

### Rule Type

Mandatory Rule



Users may search their Library using supported searchable information.



## Rule A.2 — Read-only Operation

### Rule Type

Mandatory Rule



Searching never modifies Library Entries.

Search operations are entirely read-only.



## Rule A.3 — Consistent Results

### Rule Type

Mandatory Rule



Identical search criteria shall always produce identical result sets while the underlying Library remains unchanged.

Rule Group B — Filtering

Rule B.1 — Independent Filters

Rule Type

Mandatory Rule



Each filtering criterion shall operate independently.

Applying one filter shall not disable or modify the behavior of another filter.



Rule B.2 — Combined Filtering

Rule Type

Mandatory Rule



Users may apply multiple filters simultaneously.

The application shall evaluate all active filters together to produce the final result set.



Rule B.3 — Consistent Filtering

Rule Type

Mandatory Rule



Identical filter combinations shall always produce identical results while the underlying Library remains unchanged.



Rule Group C — Sorting

Rule C.1 — Independent Sorting

Rule Type

Mandatory Rule



Sorting is applied after Search and Filtering have determined the result set.

Sorting changes only the presentation order of results.

It never changes the result set itself.



Rule C.2 — Read-only Operation

Rule Type

Mandatory Rule



Sorting shall never modify Library Entries or their associated data.

Only the displayed order of matching results may change.



Rule Group D — Search Results

Rule D.1 — Empty Results

Rule Type

Mandatory Rule



Searches or filter combinations may legitimately produce no matching results.

An empty result set represents a valid system state.

The application shall present an appropriate empty state.



Rule D.2 — Automatic Updates

Rule Type

Mandatory Rule



Whenever Library Entries change, future Search and Filtering operations shall automatically reflect the updated Library state.

No manual refresh is required.

# Rule D.3 — AND Filtering

### Rule Type

Mandatory Rule



When multiple filters are applied simultaneously, the application shall evaluate them using AND logic.

Only Library Entries satisfying all active filtering criteria shall be included in the result set.

Advanced filtering logic (such as OR conditions) is outside the scope of Version 1.



# Search & Filtering Behavior Matrix

| User Action | Application Behavior | Allowed |
| --- | --- | --- |
| Enter Search Query | Matching results displayed | ✅ |
| Apply Single Filter | Results refined | ✅ |
| Apply Multiple Filters | All active filters evaluated using AND logic | ✅ |
| Change Sorting | Result order updated | ✅ |
| No Matching Results | Empty state displayed | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02_Library_Entry_Lifecycle/

- 02.03_Statistics_Rules.md

- 02.05_Metadata_Rules.md

## Referenced By

- 02.07_Recommendation_Rules.md

- 03_Domain_Model/

- 05_UI_UX_Specification/



# Final Review

Search and Filtering enable efficient access to the User's Library while preserving a clear separation of responsibilities.

Search identifies potential matches.

Filtering refines the result set.

Sorting determines presentation order.

Each operation is independent, read-only and fully consistent with the current state of the Library.

















# 02.07_Recommendation_Rules.md

Document Status: Draft

Document Version: 1.0

Module: Business Rules

Project: Mosaica



# Purpose

This document defines the business rules governing Recommendations within Mosaica.

Recommendations encourage meaningful interaction with the User's personal Library by presenting relevant suggestions derived from existing Library data.

Recommendations do not modify the Library.

They only assist User decision-making.



# Scope

This document defines:

- recommendation behavior,

- recommendation sources,

- personalization,

- recommendation integrity,

- User interaction.



# Guiding Principle

Recommendations shall always be generated from meaningful relationships within the User's Library.

Recommendations assist the User.

They never replace User choice.



# User Flow Summary

The application evaluates the current Library.

↓

Relevant recommendation candidates are identified.

↓

Appropriate recommendations are presented.

↓

The User decides whether to act upon them.



# Rule Group A — General Principles

## Rule A.1 — Personalized Recommendations

### Rule Type

Mandatory Rule



Recommendations shall be generated individually for each User.

No recommendation shall depend upon another User's Library.



## Rule A.2 — Read-only Operation

### Rule Type

Mandatory Rule



Recommendations never modify Library Entries.

All recommendations are informational.



## Rule A.3 — Optional Feature

### Rule Type

Mandatory Rule



The application may legitimately present no recommendations.

The absence of recommendations represents a valid system state.



Rule Group B — Recommendation Sources

Rule B.1 — Library-derived Recommendations

Rule Type

Mandatory Rule



Recommendations shall be generated exclusively from information already available within the User's Library.

Version 1 does not recommend external Content.



Rule B.2 — Meaningful Recommendations

Rule Type

Mandatory Rule



Every Recommendation shall have a meaningful relationship to the User's Library.

Recommendations shall never be generated randomly.



Rule B.3 — Explainable Recommendations

Rule Type

Mandatory Rule



Each Recommendation shall be explainable through one or more identifiable reasons derived from the User's Library.

The application should be capable of presenting the underlying reason whenever appropriate.



Rule Group C — Recommendation Integrity

Rule C.1 — Current Library State

Rule Type

Mandatory Rule



Recommendations shall always be generated from the current state of the User's Library.

Historical Library states shall not influence Version 1 Recommendations.



Rule C.2 — Automatic Updates

Rule Type

Mandatory Rule



Whenever the User's Library changes, future Recommendations shall automatically reflect the updated Library state.

No manual refresh is required.



Rule Group D — Dashboard Integration

Rule D.1 — Dashboard Recommendations

Rule Type

Mandatory Rule



Recommendations may be presented through the Dashboard.

The Dashboard displays Recommendations but never owns or calculates them.

Recommendation generation remains the responsibility of the Recommendation module.



Rule D.2 — Optional Presentation

Rule Type

Derived Rule



The application may display Recommendations in different sections.

Presentation location does not affect Recommendation behavior.

# Rule D.3 — Recommendation Sources

### Rule Type

Mandatory Rule



Version 1 Recommendations may use information derived from:

- Archive

- Wishlist

Library Entries located in Trash shall never be considered during Recommendation generation.



# Rule Group E — Validation Exceptions

## Rule E.1 — Empty Library

### Rule Type

Mandatory Rule



A User may have no Library Entries.

The absence of Recommendations represents a valid system state.



## Rule E.2 — No Recommendation Candidates

### Rule Type

Mandatory Rule



A User's current Library may legitimately contain no meaningful Recommendation candidates.

The application shall continue functioning normally without presenting Recommendations.



# Recommendation Behavior Matrix

| Situation | Recommendation Behavior | Allowed |
| --- | --- | --- |
| Library Updated | Recommendations automatically reflect the new Library state | ✅ |
| Archive Modified | Recommendations may change | ✅ |
| Wishlist Modified | Recommendations may change | ✅ |
| Trash Modified | Recommendations unaffected | ✅ |
| No Recommendation Candidates | Empty state displayed | ✅ |



# Related Documents

## Depends On

- 00_Product_Bible.md

- 01_Product_Glossary.md

- 02.02_Library_Entry_Lifecycle/

- 02.03_Statistics_Rules.md

- 02.04_Dashboard_Rules.md

- 02.05_Metadata_Rules.md

## Referenced By

- 03_Domain_Model/

- 05_UI_UX_Specification/



# Final Review

Recommendations provide meaningful guidance derived from the User's own Library.

Version 1 focuses on helping Users rediscover, continue and organize their existing cultural archive rather than recommending external Content.

Recommendations remain personalized, explainable, automatically updated and entirely independent from User actions.



















# 02.99_Architecture_Review.md

# 02.99 Architecture Review



Document Status: Approved



Document Version: 1.0



Module: Business Rules



Project: Mosaica



# Purpose

This document records the official Architecture Review of the Business Rules module.



The purpose of this review is to verify that the documented business rules are architecturally consistent, internally coherent and ready to serve as the foundation for the technical design phase.



Only modules that successfully pass Architecture Review may proceed to the next architectural phase.



# Scope

The following documents were included in this review:



• 00_Product_Bible.md



• 01_Product_Glossary.md



• 02.01_Content_Lifecycle.md



• 02.02.01_Creation.md



• 02.02.02_Modifications/

- README

- Rating Modification

- Appreciation Level Modification

- Status Modification

- Personal Note Modification

- Tag Modification

- Collection Modification

- Wishlist Modification

- Archive Modification

- Trash Modification



# Review Methodology

The Architecture Review evaluated the module from multiple architectural perspectives.



Review Roles:



• Product Owner



• Business Analyst



• Backend Architect



• Database Architect



• API Designer



• Frontend Developer



• QA Engineer



• Security Reviewer



• Scalability Reviewer



• Future Maintainer



• AI/Codex Readiness Reviewer

(Buraya özellikle Business Analyst ekledim. Aslında eksikti. Business Rules incelenirken mutlaka olmalı.)



# Review Criteria

The review focused on the following quality criteria:



• Product identity consistency



• Terminology consistency



• Business rule consistency



• Cross-document integrity



• Architectural completeness



• Data integrity



• Scalability



• Maintainability



• AI/Codex implementation readiness



# Findings

Architecture Review Result



PASS

No architectural inconsistencies or blocking issues were identified.



The reviewed documents form a coherent and consistent Business Rules module suitable for technical design activities.



No critical business rule conflicts were detected.



# Improvements

The following improvements were identified for future documentation evolution.



These items are optional and do not block approval.



• Documentation Registry



• Architecture Decision Records (ADR)



• Global Business Rule IDs



• Semantic Versioning



# Approval

Business Rules Architecture Review



Status



APPROVED

The Business Rules module has successfully passed Architecture Review.



The project is approved to proceed to the Domain Model phase.



# Quality Gate

Ve bence bu belgeye en önemli ekleme bu olacak.

## Quality Gate



Every major documentation module must successfully pass an Architecture Review before the project proceeds to the next architectural phase.



A successful review confirms:



• Architectural consistency



• Terminology consistency



• Cross-document integrity



• Business rule completeness



• Product identity alignment



• Long-term maintainability



Only reviewed and approved modules may be considered locked.

Bu aslında bugün oluşturduğumuz yeni standart.



# Review Summary

Review Date



31 July 2026



Review Result



PASS



Blocking Issues



0



Critical Issues



0



Recommended Improvements



4



Overall Readiness



READY FOR DOMAIN MODELING

















# Change Request

## CR-001

Title

Favorite Level Terminology Revision



Status

Approved



Priority

Medium



Date

After locking 02.02.02.01_Rating_Modification.md



Reason

During the design of the Library Entry modification system, it became clear that the term "Favorite" was being used for two different concepts:

1. A boolean flag indicating whether a Library Entry belongs to the User's personal favorites.

2. A four-level emotional evaluation system.

Using the same word for two different concepts would create ambiguity in the documentation, database schema, UI and future development.

To eliminate this ambiguity, the emotional evaluation system has been renamed.

This is considered a terminology clarification rather than a feature change.



Decision

The following terminology is now official.

Favorite

Represents whether a Library Entry has been marked as one of the User's personal favorites.

Type:

Boolean

Allowed Values:

- Yes

- No

Purpose:

Allows Users to maintain a personal favorites list independent of any other evaluation.



Appreciation Level

Represents the User's emotional appreciation of a cultural work.

Type:

Enumeration

Allowed Values:

- Disliked

- Liked

- Loved

- Legendary

Purpose:

Expresses how emotionally meaningful a cultural work is to the User.

It is completely independent from both Rating and Favorite.



Concept Separation

The three personal evaluation systems are now officially defined as follows.

Rating

Question answered:

"How good do I think this work is?"

Range:

0.0–10.0

Measures:

Perceived quality.



Appreciation Level

Question answered:

"How much do I personally love this work?"

Allowed Values:

- Disliked

- Liked

- Loved

- Legendary

Measures:

Emotional appreciation.



Favorite

Question answered:

"Do I want this work to appear in my personal Favorites list?"

Allowed Values:

- Yes

- No

Measures:

Personal bookmark status.



Affected Documents

The following documentation must be updated.

01_Product_Glossary.md

Replace:

- Favorite Level

With:

- Appreciation Level

Replace the allowed values:

- Disliked

- Liked

- Favorite

- Legendary

With:

- Disliked

- Liked

- Loved

- Legendary

Add the new glossary entry:

Favorite

Definition:

Represents whether a Library Entry belongs to the User's personal favorites.

Allowed Values:

- Yes

- No



02.02.02_Modifications/README.md

Rename:

02.02.02.02_Favorite_Level_Modification.md

to

02.02.02.02_Appreciation_Level_Modification.md



Future Documents

From this Change Request onward, every new document must use:

- Favorite (Boolean)

- Appreciation Level (Enum)

The term "Favorite Level" is deprecated and must no longer be used.



Architectural Impact

This Change Request affects terminology only.

It does not change:

- Product philosophy

- Business behavior

- User flows

- Database relationships

Only the official naming of one concept has changed.



Approval

Approved by:

Product Owner (Berke)

Project Factory



Implementation Status

☑ Approved

☑ Documentation Update Required

☐ Database Specification Update Pending

☐ UI Specification Update Pending

☐ Implementation Pending
