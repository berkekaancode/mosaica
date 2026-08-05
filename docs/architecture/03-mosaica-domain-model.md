# 03.01_Core_Domain_Entities.md

## Purpose

The purpose of this document is to define the official Domain Entities of Mosaica.

Domain Entities represent the primary business concepts that possess an independent identity and lifecycle within the system.

This document establishes the business structure of the application and serves as the architectural foundation for the Database Specification, API Specification and Software Requirements.

Implementation details, persistence mechanisms and database structures are intentionally excluded.



## Scope

This document defines:

- the official Domain Entities of Mosaica,

- their business responsibilities,

- their ownership,

- their identities,

- their relationships,

- and their role within the Domain Model.

Detailed database fields, data types and persistence strategies are outside the scope of this document.



## Guiding Principle

The Domain Model represents the business world of Mosaica.

Only concepts with an independent identity and lifecycle qualify as Domain Entities.

Business behavior is defined by the approved Business Rules documentation.

The Domain Model identifies the business objects responsible for that behavior.



## Entity Definition Standard

Every Domain Entity shall be documented using the following structure.

- Purpose

- Identity

- Ownership

- Lifecycle

- Responsibilities

- Relationships

- Business Rules Reference

This standard ensures consistency throughout the Domain Model and provides a predictable foundation for all subsequent technical documentation.



## Entity Classification

The official Domain Entities of Mosaica are classified into two categories.

### Core Entities

Core Entities form the foundation of the product.

Without these entities, Mosaica cannot fulfill its purpose as a personal cultural archive.

- User

- Content

- Library Entry

### Supporting Entities

Supporting Entities enrich the domain model by providing organization, classification and relationships between Core Entities.

- Collection

- Tag

- Person

- Genre

- Series

- Universe

Concepts that do not possess an independent identity are intentionally excluded from this document and will be addressed separately as Value Objects or embedded domain concepts within the Domain Model.

# Rule Group A — Core Domain Entities

## Overview

Core Domain Entities represent the fundamental business concepts upon which Mosaica is built.

They embody the primary identity of the product and collectively form the foundation of the personal cultural archive.

Without these entities, the application cannot fulfill its purpose as defined by the Product Bible.

Every other Domain Entity either supports or extends the capabilities of these Core Entities.

Version 1 defines the following Core Domain Entities:

- User

- Content

- Library Entry



# A.1 — User

## Purpose

The User represents the owner of a personal cultural archive within Mosaica.

Every personal decision, preference and experience stored by the application originates from exactly one User.

The User serves as the boundary of personal ownership throughout the domain.

While Content is shared across the system, all personal information belongs exclusively to the User through the corresponding Library Entries.



## Identity

Every User possesses a permanent internal identity that uniquely distinguishes them from all other Users.

This identity remains stable throughout the entire lifetime of the account and is never reassigned.

Changes to profile information do not affect the User's identity.



## Ownership

The User is the owner of all personal information contained within their archive.

This includes, but is not limited to:

- Library Entries

- Collections

- Tags

- Personal Ratings

- Appreciation Levels

- Favorite selections

- Personal Notes

- Consumption History

- Dashboard data

- Statistics

- Personal Recommendations

The User never owns Content itself.

Content exists independently and may be referenced simultaneously by multiple Users.



## Lifecycle

A User enters the domain when an account is successfully created.

Throughout its lifetime, the User continuously expands and manages a personal archive by creating, modifying and organizing Library Entries.

A User may update personal information without affecting the ownership or identity of existing domain objects.

Removal of a User results in the removal of the User's personal archive according to future account deletion policies.

The existence of shared Content is never affected by the removal of an individual User.



## Responsibilities

The User is responsible for every personal decision recorded within Mosaica.

Primary responsibilities include:

- maintaining a personal archive,

- evaluating cultural works,

- organizing Library Entries,

- managing Collections,

- managing Tags,

- maintaining Wishlist items,

- preserving personal memories,

- interacting with Dashboard features,

- generating personal statistics through normal application usage.

The User does not manage shared Content metadata.



## Relationships

A User owns many Library Entries.

A User owns many Collections.

A User owns many Tags.

A User interacts with shared Content exclusively through Library Entries.

The User has no direct ownership relationship with Content.



## Business Rules Reference

The behavior of the User entity is defined by the approved Business Rules documentation, particularly those governing Library Entry ownership, personal modifications, archive management and data ownership.



# Architectural Notes

The User is one of the three Core Domain Entities of Mosaica.

Within the Domain Model, the User represents the ownership boundary of all personal information.

Every business concept classified as personal must ultimately be traceable to exactly one User.

This ownership principle is considered a permanent architectural rule and shall remain consistent throughout future versions of the product.

Harika. Şimdi ikinci Core Entity'ye geçiyoruz.

Bu entity aslında Mosaica'nın en önemli mimari kararlarından birini temsil ediyor:

Content kullanıcıya ait değildir.

Bu ayrım Product Bible, Product Glossary ve Business Rules boyunca sürekli vurgulanıyor ve ileride database tasarımının da temelini oluşturacak. Mosaica_Project_Foundation_v1.0.pdfPDF Mosaica_Project_Foundation_v1.0.pdfPDF Mosaica_Project_Foundation_v1.0.pdfPDF

Aşağıdaki metin doğrudan Word'e yapıştırılacak resmi dokümandır.



# A.2 — Content

## Purpose

Content represents a cultural work that exists independently of any individual User.

It serves as the shared representation of objective information describing movies, television series, games and books within Mosaica.

The purpose of the Content entity is to eliminate duplicated metadata while providing a single, authoritative representation of each cultural work referenced throughout the system.

Content forms the shared knowledge layer of the application, allowing multiple Users to reference the same cultural work while maintaining completely independent personal experiences.



## Identity

Every Content entity possesses a permanent internal identifier assigned when the Content is first created.

The identity of a Content entity never changes during its lifetime.

Changes to titles, metadata or external information do not alter the identity of the Content itself.

Once established, the identity of a Content entity remains immutable.



## Ownership

Content is owned by the Mosaica system.

It is not owned by any individual User.

Every User may reference the same Content through independent Library Entries, but no User owns or controls the Content itself.

Objective metadata belongs exclusively to Content.

Personal information never belongs to Content.



## Lifecycle

A Content entity is created when the system determines that no equivalent cultural work currently exists.

Once created, Content remains available for future Library Entries regardless of whether it is currently referenced by any User.

During its lifetime, the objective metadata associated with Content may be enriched, corrected or updated as more accurate information becomes available.

Normal user actions never permanently remove Content from the system.

Content is intended to be a long-lived entity whose primary purpose is to preserve a stable representation of a cultural work across many years of application usage.



## Responsibilities

The Content entity is responsible for maintaining every objective characteristic of a cultural work.

Primary responsibilities include:

- representing a cultural work,

- maintaining official metadata,

- providing a shared reference for multiple Users,

- preserving a stable identity,

- supporting future metadata enrichment,

- preventing duplicate representations of the same work.

Content is intentionally not responsible for storing personal information.

Personal evaluations, preferences and history belong exclusively to Library Entries.



## Relationships

One Content may be referenced by many Library Entries.

One Content belongs to exactly one Media Type.

One Content may be associated with multiple Persons.

One Content may be associated with multiple Genres.

One Content may belong to one Series.

One Content may belong to one Universe.

Content has no ownership relationship with any User.

All User interaction with Content occurs indirectly through Library Entries.



## Business Rules Reference

The behavior of the Content entity is governed primarily by the Content Lifecycle Business Rules.

Additional behavior related to metadata integrity, duplicate prevention, provider independence and long-term preservation is defined within the approved Metadata Rules and supporting Business Rules documentation.



## Architectural Notes

Content represents the shared knowledge layer of Mosaica.

Its separation from Library Entry is one of the permanent architectural principles defined by the project.

This separation enables:

- multiple Users referencing the same cultural work,

- elimination of duplicated metadata,

- efficient storage,

- independent personal archives,

- long-term scalability,

- replaceable metadata providers.

The Content entity shall never contain User-generated information.

Every personal experience must instead be represented through a separate Library Entry.



## Domain Responsibility Summary

| Responsibility | Owner |
| --- | --- |
| Title | Content |
| Original Title | Content |
| Release Year | Content |
| Media Type | Content |
| Genres | Content |
| Persons | Content |
| Series | Content |
| Universe | Content |
| Official Metadata | Content |
| Poster / Cover | Content |
| Runtime | Content |
| Developer / Publisher | Content |
| User Rating | Library Entry |
| Appreciation Level | Library Entry |
| Favorite | Library Entry |
| Personal Note | Library Entry |
| Status | Library Entry |
| Archive Location | Library Entry |
| Consumption History | Library Entry |
| Collections | Library Entry |
| Tags | Library Entry |



## Entity Classification

Category: Core Domain Entity

Independent Identity: Yes

Business Owner: Mosaica System

Aggregate Candidate: Yes

Shared Across Users: Yes

Lifecycle Type: Long-lived



# A.3 — Library Entry

## Purpose

Library Entry represents a User's personal relationship with a specific Content.

It is the central business entity of Mosaica and serves as the foundation of the User's personal cultural archive.

While Content describes a cultural work, Library Entry records how that cultural work becomes part of an individual User's life.

Every personal experience, evaluation, preference and organizational decision is ultimately represented through a Library Entry.

Without Library Entry, Mosaica would function only as a metadata database rather than a personal cultural archive.



## Identity

Every Library Entry possesses a permanent internal identifier assigned when it is created.

A Library Entry maintains its identity throughout its entire lifecycle regardless of changes to its Status, Archive Location, Rating or any other User-owned information.

Its identity remains stable until the Library Entry is permanently deleted.



## Ownership

Every Library Entry belongs to exactly one User.

A Library Entry references exactly one Content.

The User owns every piece of personal information contained within the Library Entry.

The referenced Content remains independently owned by the Mosaica system.

This separation preserves the distinction between shared knowledge and personal experience.



## Lifecycle

The lifecycle of a Library Entry begins when a User intentionally decides to preserve a cultural work.

After creation, the Library Entry may evolve continuously throughout its lifetime.

Users may update personal information, reorganize the entry, move it between Archive, Wishlist and Trash, record additional consumption and refine their personal evaluations without creating a new Library Entry.

Repeated experiences never create duplicate Library Entries.

Instead, the existing Library Entry continues evolving as the authoritative representation of the User's relationship with the referenced Content.

The lifecycle ends only after explicit permanent deletion.



## Responsibilities

Library Entry is responsible for maintaining every User-owned aspect of the relationship between a User and a Content.

Primary responsibilities include:

- preserving personal ownership,

- storing personal evaluations,

- recording emotional appreciation,

- maintaining Favorite status,

- managing Status,

- managing Archive Location,

- recording Consumption History,

- maintaining Personal Notes,

- organizing Collections,

- organizing Tags,

- preserving User history,

- serving as the source of all personal archive information.

Library Entry intentionally does not manage shared Content metadata.



## Relationships

Every Library Entry belongs to exactly one User.

Every Library Entry references exactly one Content.

A Library Entry may belong to multiple Collections.

A Library Entry may contain multiple Tags.

A Library Entry contributes to Dashboard generation.

A Library Entry contributes to Statistics.

A Library Entry contributes to Recommendations.

A Library Entry participates in Search and Filtering.

Library Entry serves as the primary source of User-owned information throughout the domain.



## Business Rules Reference

The behavior of the Library Entry entity is defined throughout the approved Business Rules documentation.

This includes:

- Creation

- Modifications

- Status Management

- Archive Management

- Wishlist Management

- Trash Management

- Statistics

- Dashboard

- Search

- Recommendations

Library Entry acts as the primary business object referenced by these modules.



## Architectural Notes

Library Entry is the central Domain Entity of Mosaica.

Nearly every business operation performed by the User ultimately affects a Library Entry.

For this reason, Library Entry represents the primary boundary of personal ownership within the domain.

The separation between Content and Library Entry is considered one of the permanent architectural principles of the system.

Objective information belongs to Content.

Personal information belongs to Library Entry.

This distinction shall remain stable throughout the lifetime of the project.



## Domain Responsibility Summary

| Responsibility | Owner |
| --- | --- |
| Personal Rating | Library Entry |
| Appreciation Level | Library Entry |
| Favorite | Library Entry |
| Personal Note | Library Entry |
| Archive Location | Library Entry |
| Status | Library Entry |
| Consumption Counter | Library Entry |
| Consumption Date | Library Entry |
| Collection Membership | Library Entry |
| Tag Assignment | Library Entry |
| Personal Timeline | Library Entry |
| Personal History | Library Entry |
| User Preferences | Library Entry |
| Shared Metadata | Content |



## Domain Significance

Library Entry is the primary business object of Mosaica.

All major application modules either create, modify, organize, analyze or present Library Entries.

The following domain capabilities depend directly on Library Entry:

- Archive

- Wishlist

- Trash

- Statistics

- Dashboard

- Recommendations

- Search

- Filtering

- Collections

- Tags

- Memories

- Monthly Culture Summary

- Living Archive features

No other Domain Entity participates in as many business processes.



## Entity Classification

Category: Core Domain Entity

Independent Identity: Yes

Business Owner: User

Aggregate Candidate: Yes

Shared Across Users: No

Lifecycle Type: Long-lived

Domain Importance: Critical



# Core Domain Relationships

## Purpose

Core Domain Entities do not exist independently.

Together they establish the primary business structure of Mosaica.

This section defines the permanent relationships between the three Core Domain Entities before introducing Supporting Entities.

These relationships represent permanent architectural rules and shall remain consistent throughout future versions of the product.



## Relationship Overview

The fundamental structure of the Mosaica domain is intentionally simple.

User

│

owns │

│

▼

Library Entry

│

references │

│

▼

Content

This relationship model forms the foundation of the entire application.

Every other Domain Entity ultimately supports, enriches or extends this structure.



## User → Library Entry

Relationship

One-to-Many

Description

A User may own multiple Library Entries.

Every Library Entry belongs to exactly one User.

Ownership is exclusive.

Library Entries cannot be transferred between Users.

Business Purpose

This relationship establishes personal ownership throughout the domain.

Every piece of User-generated information is ultimately owned through a Library Entry.



## Library Entry → Content

Relationship

Many-to-One

Description

Every Library Entry references exactly one Content.

A single Content may be referenced by many Library Entries belonging to different Users.

Business Purpose

This relationship separates shared knowledge from personal experience.

Objective information is stored once.

Personal information is stored independently for every User.



## User → Content

Relationship

Indirect

Description

Users never directly own or modify Content.

All interaction between a User and a Content entity occurs through a Library Entry.

Business Purpose

This rule preserves one of the most important architectural principles of Mosaica.

Shared Content remains independent from personal archives.



## Architectural Principles

The relationships defined above establish the permanent foundation of the Domain Model.

The following principles shall always remain true.

- Every Library Entry belongs to exactly one User.

- Every Library Entry references exactly one Content.

- A User may reference the same Content only once through an active Library Entry.

- Multiple Users may reference the same Content independently.

- Personal information never belongs to Content.

- Shared metadata never belongs to Library Entry.

These principles shall not be violated by future architectural changes.



## Domain Dependency

The Core Domain follows the dependency model below.

User

│

▼

Library Entry

│

▼

Content

Business operations always begin with the User.

Business data is stored within the Library Entry.

Shared metadata is retrieved from Content.

This dependency direction intentionally prevents accidental mixing of shared and User-owned information.



## Architectural Stability

The Core Domain relationships defined in this section are considered stable architectural boundaries.

Future versions of Mosaica may introduce additional entities, services and features.

However, these additions should extend the Core Domain rather than alter its fundamental structure.

The User–Library Entry–Content relationship is therefore considered one of the permanent architectural foundations of the system.

# Rule Group B — Supporting Domain Entities

## Overview

Supporting Domain Entities extend the capabilities of the Core Domain by providing classification, organization and contextual relationships.

Unlike Core Domain Entities, Supporting Entities do not represent the primary purpose of Mosaica.

Instead, they enrich the domain while preserving the simplicity of the Core Domain Model.

Supporting Entities are divided into two groups.

### Shared Supporting Entities

Shared Supporting Entities describe objective characteristics of cultural works and may be referenced by multiple Content entities.

Version 1 defines the following Shared Supporting Entities:

- Person

- Genre

- Series

- Universe

### Personal Supporting Entities

Personal Supporting Entities belong exclusively to individual Users and are used to organize personal archives.

Version 1 defines the following Personal Supporting Entities:

- Collection

- Tag

This distinction reflects one of the fundamental architectural principles of Mosaica.

Shared knowledge belongs to the system.

Personal organization belongs to the User.



# B.1 — Person

## Purpose

The Person entity represents an identifiable individual or group that has contributed to the creation of a cultural work.

Its purpose is to provide a reusable reference for creative contributors across all supported media types.

Rather than storing contributor information repeatedly within individual Content entities, Mosaica maintains a single Person entity that can be referenced by multiple cultural works.

This approach promotes consistency, eliminates duplication and enables rich navigation across the domain.



## Identity

Every Person possesses a permanent internal identity.

The identity remains stable regardless of changes to the Person's name, biography or external metadata.

Multiple Content entities referencing the same individual shall always reference the same Person entity.



## Ownership

Person is owned by the Mosaica system.

Users neither own nor modify Person entities through normal application usage.

The entity represents objective information shared across the entire platform.



## Lifecycle

A Person entity is created when a contributor is introduced into the shared metadata layer for the first time.

Once created, it may be enriched with additional objective information over time.

Person entities are intended to be long-lived and reusable.

Removing a Content entity does not imply the removal of its associated Person entities.



## Responsibilities

The Person entity is responsible for representing objective contributor information.

Primary responsibilities include:

- identifying creative contributors,

- providing reusable references across multiple Content entities,

- supporting contributor-based discovery,

- maintaining consistent contributor identities,

- preventing duplicate contributor records.

The Person entity is not responsible for storing User-generated information or personal opinions.



## Relationships

One Person may be associated with many Content entities.

One Content may reference many Persons.

The relationship between Content and Person is many-to-many.

Users interact with Person entities indirectly through Content.

Person has no direct relationship with Library Entry.



## Business Rules Reference

The behavior of the Person entity is governed by the approved metadata management rules and the architectural principle that objective metadata belongs to the shared Content layer.



## Architectural Notes

Person is a reusable reference entity within the shared metadata domain.

Its primary purpose is normalization of contributor information.

The entity enables future features such as contributor exploration, cross-media discovery and metadata enrichment without introducing duplication into the Content model.

Person shall remain independent from User-owned information at all times.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Shared Metadata Entity

Independent Identity: Yes

Business Owner: Mosaica System

Aggregate Candidate: No

Shared Across Users: Yes

Lifecycle Type: Long-lived



# Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| Content → Person | Many-to-Many |
| User → Person | Indirect |
| Library Entry → Person | Indirect |



## Architectural Significance

Person is the first entity in the shared metadata layer.

Unlike Library Entry, it does not carry business behavior.

Instead, it acts as a reference entity, allowing multiple Content records to share the same contributor information while preserving a single source of truth.

This distinction is intentional and will guide the design of the remaining Shared Supporting Entities.



Harika. Bence artık dokümanın ritmi oturdu. Aynı kaliteyi koruyarak devam edelim.

Sıradaki entity Genre.



# B.2 — Genre

## Purpose

The Genre entity represents a standardized classification used to describe the thematic or stylistic characteristics of a cultural work.

Its purpose is to provide a consistent categorization system across all supported media types while enabling discovery, filtering and organization throughout the Mosaica domain.

Rather than embedding textual genre information directly within individual Content entities, Mosaica maintains Genre as a reusable reference entity shared across the entire metadata layer.



## Identity

Every Genre possesses a permanent internal identity.

The identity remains stable throughout the lifetime of the system regardless of future changes to its display name, description or localization.

Each Genre represents a unique classification concept and shall exist only once within the domain.



## Ownership

Genre is owned exclusively by the Mosaica system.

Users cannot create, modify or delete Genre entities through normal application usage.

Genre represents objective classification metadata shared by all Users.



## Lifecycle

Genre entities are established as part of the shared metadata domain.

Although new Genres may be introduced as media classification evolves, existing Genre identities remain stable.

Genre entities are expected to be long-lived and reusable across many Content entities.

The removal of individual Content records does not affect the existence of Genre entities.



## Responsibilities

The Genre entity is responsible for providing standardized classification for cultural works.

Primary responsibilities include:

- classifying Content,

- supporting search,

- enabling filtering,

- enabling recommendation algorithms,

- supporting statistical analysis,

- maintaining consistent genre terminology,

- eliminating duplicated genre definitions.

Genre is not responsible for storing User preferences or personal organization.



## Relationships

One Genre may classify many Content entities.

One Content may belong to multiple Genres.

The relationship between Content and Genre is many-to-many.

Users interact with Genre indirectly through Content and Library Entries.

Genre has no direct ownership relationship with Users.



## Business Rules Reference

The behavior of the Genre entity is governed by the approved metadata architecture and the principle that objective classification belongs to the shared metadata layer.

Genre participates in search, filtering and recommendation features through its association with Content.



## Architectural Notes

Genre is a shared reference entity.

Its purpose is to standardize classification across the entire application.

By maintaining a centralized Genre entity, Mosaica avoids inconsistent naming, duplicated classifications and fragmented metadata.

Genre shall remain independent from User-generated information.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Shared Metadata Entity

Independent Identity: Yes

Business Owner: Mosaica System

Aggregate Candidate: No

Shared Across Users: Yes

Lifecycle Type: Long-lived



## Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| Content → Genre | Many-to-Many |
| User → Genre | Indirect |
| Library Entry → Genre | Indirect |



## Architectural Significance

Genre represents the standardized classification vocabulary of Mosaica.

Unlike Collections or Tags, Genre is globally shared and system-defined.

Its primary value lies in ensuring that every Content entity is classified using a consistent taxonomy.

This consistency improves metadata quality and provides a reliable foundation for discovery, analytics and future recommendation capabilities.

Harika. Artık gerçekten bir desen oluşmaya başladı. Bu da Domain Model'in sağlıklı ilerlediğinin göstergesi.

Sıradaki entity Series. Bu noktada önemli bir karar verdim: Series'i yalnızca devam eserleri için değil, aynı zamanda resmi eser dizilerini temsil eden üst kavram olarak tanımlayacağız. Böylece film serileri, kitap serileri, oyun serileri ve TV dizileri tek bir model altında temsil edilebilecek. Bu yaklaşım Product Glossary'deki "Series" kavramıyla da uyumludur. Mosaica_Project_Foundation_v1.0.pdfPDF

Aşağıdaki metin doğrudan Word dokümanına eklenebilir.



# B.3 — Series

## Purpose

The Series entity represents an official sequence or collection of related cultural works that belong to the same narrative, publication or production line.

Its purpose is to establish a reusable relationship between individual Content entities that are officially recognized as part of the same series.

By separating Series from individual Content entities, Mosaica preserves consistent relationships while avoiding duplicated series information throughout the metadata layer.



## Identity

Every Series possesses a permanent internal identity.

Its identity remains stable regardless of changes to its title, description or associated metadata.

A Series represents a single official series and shall exist only once within the domain.



## Ownership

Series is owned exclusively by the Mosaica system.

Users cannot create, modify or delete Series entities through normal application usage.

Series represents objective metadata shared across all Users.



## Lifecycle

A Series entity is created when one or more Content entities are identified as belonging to the same official series.

Once established, additional Content entities may be associated with the Series over time.

Series entities are expected to remain stable throughout the lifetime of the application and may evolve only through metadata enrichment.

Removing individual Content entities does not affect the existence of the Series itself.



## Responsibilities

The Series entity is responsible for representing official relationships between related cultural works.

Primary responsibilities include:

- grouping related Content,

- preserving official series relationships,

- enabling series navigation,

- supporting chronological viewing,

- improving discovery,

- enabling future series-based recommendations,

- maintaining consistent series metadata.

Series does not store User-generated information or personal organizational data.



## Relationships

One Series may contain many Content entities.

One Content may belong to at most one Series.

Users interact with Series indirectly through Content and Library Entries.

Series has no direct ownership relationship with Users.



## Business Rules Reference

The behavior of the Series entity follows the approved metadata architecture and the principle that objective structural relationships belong to the shared metadata layer.

Series participates in search, browsing and recommendation features through its association with Content.



## Architectural Notes

Series represents an official structural relationship between cultural works.

Unlike Genre, which classifies Content, Series establishes continuity between individual works.

This distinction allows Mosaica to model narrative progression while keeping Content entities independent.

Series shall always remain part of the shared metadata domain.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Shared Metadata Reference Entity

Independent Identity: Yes

Business Owner: Mosaica System

Aggregate Candidate: No

Shared Across Users: Yes

Lifecycle Type: Long-lived



## Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| Content → Series | Many-to-One |
| Series → Content | One-to-Many |
| User → Series | Indirect |
| Library Entry → Series | Indirect |



## Architectural Significance

Series provides structural continuity within the metadata domain.

It enables Mosaica to represent official sequences of related cultural works without embedding relationship logic directly into Content.

By introducing a dedicated Series entity, the domain remains normalized, scalable and capable of supporting future features such as series progression, completion tracking and structured navigation.

Harika. Şimdi sırada Universe var.

Bu entity ilk bakışta Series'e çok benziyor gibi görünüyor. Ancak burada bilinçli olarak önemli bir ayrım yapacağım.

- Series, eserlerin resmi sıralamasını temsil eder.

- Universe, eserlerin aynı kurgu evrenini paylaşmasını temsil eder.

Bu iki kavramın ayrılması ileride Marvel, DC, Star Wars, Tolkien Legendarium gibi büyük evrenlerde çok büyük avantaj sağlayacak.

Aşağıdaki metin doğrudan Word dokümanına eklenebilir.



# B.4 — Universe

## Purpose

The Universe entity represents a shared fictional setting that connects multiple cultural works through a common world, continuity or narrative framework.

Its purpose is to model relationships that extend beyond individual series, allowing multiple independent stories, series or media types to exist within the same fictional universe.

By introducing Universe as a dedicated Domain Entity, Mosaica can accurately represent complex fictional ecosystems without coupling them directly to individual Content entities.



## Identity

Every Universe possesses a permanent internal identity.

Its identity remains stable throughout its lifetime regardless of changes to its name, description or associated metadata.

Each fictional universe shall be represented by a single Universe entity within the domain.



## Ownership

Universe is owned exclusively by the Mosaica system.

Users cannot create, modify or remove Universe entities through normal application usage.

Universe represents objective metadata shared across the entire platform.



## Lifecycle

A Universe entity is created when multiple Content entities are officially recognized as sharing the same fictional setting.

Once established, additional Content entities or Series may be associated with the Universe over time.

Universe entities are expected to be long-lived and evolve only through metadata enrichment.

The removal of individual Content or Series entities does not affect the existence of the Universe itself.



## Responsibilities

The Universe entity is responsible for representing shared fictional worlds.

Primary responsibilities include:

- connecting related Content,

- grouping multiple Series,

- representing shared fictional settings,

- enabling universe-based exploration,

- supporting cross-series navigation,

- improving recommendation quality,

- maintaining consistent universe metadata.

Universe is not responsible for storing User-generated information.



## Relationships

One Universe may contain many Content entities.

One Universe may contain many Series.

One Content may belong to at most one Universe.

One Series may belong to at most one Universe.

Users interact with Universe indirectly through Content and Library Entries.

Universe has no direct ownership relationship with Users.



## Business Rules Reference

The behavior of the Universe entity follows the approved metadata architecture and the principle that objective structural relationships belong to the shared metadata layer.

Universe participates in discovery, navigation and recommendation capabilities through its association with Content and Series.



## Architectural Notes

Universe represents the highest structural level within the shared metadata hierarchy.

Unlike Series, which models sequential relationships between related works, Universe models broader fictional continuity.

This distinction enables Mosaica to accurately represent complex franchises where multiple independent series coexist within the same fictional world.

Universe shall always remain independent from User-owned information.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Shared Metadata Reference Entity

Independent Identity: Yes

Business Owner: Mosaica System

Aggregate Candidate: No

Shared Across Users: Yes

Lifecycle Type: Long-lived



## Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| Universe → Content | One-to-Many |
| Universe → Series | One-to-Many |
| Content → Universe | Zero-or-One |
| Series → Universe | Zero-or-One |
| User → Universe | Indirect |
| Library Entry → Universe | Indirect |



## Architectural Significance

Universe introduces the highest level of narrative organization within the shared metadata domain.

It enables Mosaica to represent fictional worlds that extend beyond a single series while preserving clear boundaries between narrative continuity and sequential publication.

This abstraction provides a scalable foundation for future features such as universe exploration, franchise analytics and cross-series recommendations without increasing the complexity of individual Content entities.



















## Shared Metadata Hierarchy

The shared metadata layer follows a hierarchical structure.

Universe

│

├── Series

│      │

│      └── Content

│

└────────── Content

A Universe may directly contain individual Content entities or organize them through one or more Series.

This flexible hierarchy allows Mosaica to accurately represent both simple and complex fictional structures while maintaining a normalized domain model.



# Shared Metadata Architecture Summary

## Overview

The Shared Metadata layer represents the objective knowledge maintained by the Mosaica system.

Unlike User-owned information, Shared Metadata exists independently of personal archives and may be referenced simultaneously by multiple Users through their individual Library Entries.

The purpose of this layer is to provide a single, authoritative source of truth for cultural works and their associated metadata.



## Shared Metadata Entities

The Shared Metadata layer consists of the following Domain Entities.

| Entity | Primary Responsibility |
| --- | --- |
| Content | Represents a cultural work |
| Person | Represents contributors to cultural works |
| Genre | Represents standardized classification |
| Series | Represents official relationships between related works |
| Universe | Represents shared fictional settings |

Together, these entities establish the objective knowledge base upon which every personal archive is built.



## Architectural Principles

The Shared Metadata layer follows the principles below.

- Metadata is shared across all Users.

- Metadata is owned by the Mosaica system.

- Metadata remains independent from User-generated information.

- Metadata entities are reusable.

- Metadata identities remain stable.

- Metadata relationships are normalized to eliminate duplication.

These principles ensure long-term consistency, scalability and maintainability of the domain model.



## Shared Metadata Dependency Model

Universe

│

├──────────────┐

│              │

▼              ▼

Series        Content

│

┌──────────┴──────────┐

▼                     ▼

Person               Genre

Content represents the central entity of the Shared Metadata layer.

Supporting entities enrich Content by providing classification, contributor information and structural relationships.



## Transition

The previous sections defined the objective knowledge maintained by the Mosaica system.

The following sections introduce Personal Organization Entities.

Unlike Shared Metadata Entities, these entities belong exclusively to individual Users and exist solely to organize personal Library Entries.

This transition marks the shift from system-owned knowledge to User-owned organization within the Domain Model.



# Rule Group C — Personal Organization Entities

## Overview

Personal Organization Entities enable Users to organize their personal cultural archive according to their own preferences.

Unlike Shared Metadata Entities, these entities are never shared between Users.

Each User maintains an independent organizational structure that reflects their individual way of managing and exploring their Library Entries.

Version 1 defines the following Personal Organization Entities:

- Collection

- Tag

Although both entities are used for organization, they serve different purposes.

Collections group Library Entries into meaningful sets.

Tags provide flexible descriptive labels that may be applied across multiple Library Entries.



# C.1 — Collection

## Purpose

The Collection entity represents a User-defined group of Library Entries organized around a common purpose, theme or objective.

Collections enable Users to build meaningful subsets of their personal archive without affecting the underlying Content metadata.

Collections are intended to reflect intentional organization rather than objective classification.



## Identity

Every Collection possesses a permanent internal identity unique to its owning User.

Its identity remains stable regardless of changes to its name, description or contained Library Entries.

Collections belonging to different Users are completely independent, even if they share the same display name.



## Ownership

Every Collection belongs exclusively to one User.

Collections cannot be shared, transferred or collaboratively managed.

All organizational decisions represented by a Collection are personal.



## Lifecycle

A Collection is created when a User decides to organize Library Entries around a specific idea or purpose.

Throughout its lifetime, Library Entries may be added, removed or reordered without affecting the identity of the Collection itself.

A Collection may be removed without affecting the existence of the Library Entries it contains.

Deleting a Collection never deletes Content or Library Entries.



## Responsibilities

The Collection entity is responsible for:

- organizing Library Entries,

- grouping related experiences,

- supporting personalized navigation,

- improving archive exploration,

- enabling custom archive structures,

- preserving User-defined organization.

Collections do not classify Content.

Collections organize Library Entries.



## Relationships

One User may own many Collections.

One Collection may contain many Library Entries.

One Library Entry may belong to many Collections.

Collections have no direct relationship with Content.

Collections organize only User-owned Library Entries.



## Business Rules Reference

The behavior of the Collection entity is governed by the approved Collection Management Business Rules.

Collection membership is entirely independent from Content metadata and reflects only the User's personal organizational choices.



## Architectural Notes

Collections represent intentional organization.

Unlike Genre, which describes what a cultural work is, Collections describe how an individual User wishes to organize their own archive.

This distinction shall remain a permanent architectural principle of Mosaica.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Personal Organization Entity

Independent Identity: Yes

Business Owner: User

Aggregate Candidate: TBD

Shared Across Users: No

Lifecycle Type: User-managed



## Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| User → Collection | One-to-Many |
| Collection → Library Entry | Many-to-Many |
| Collection → Content | None |





Harika. Bence artık dokümanın olgunluğu hissedilmeye başladı. Şimdi son Supporting Entity olan Tag'ı yazacağız.

Burada da Collection ile arasındaki ayrımı çok net koyacağım. Çünkü gerçek sistemlerde en çok karıştırılan iki kavram bunlar oluyor.



# C.2 — Tag

## Purpose

The Tag entity represents a User-defined descriptive label that may be assigned to one or more Library Entries.

Its purpose is to provide flexible, lightweight organization that complements the structured grouping offered by Collections.

Unlike Collections, which intentionally group Library Entries into meaningful sets, Tags enable Users to describe, categorize and retrieve entries through simple descriptive keywords.

Tags reflect the personal vocabulary and organizational preferences of each individual User.



## Identity

Every Tag possesses a permanent internal identity unique to its owning User.

Its identity remains stable throughout its lifetime regardless of changes to its display name or associated Library Entries.

Tags belonging to different Users are completely independent, even if they share identical names.



## Ownership

Every Tag belongs exclusively to one User.

Tags cannot be shared between Users.

Each User maintains an independent tagging system that reflects their own organizational preferences.



## Lifecycle

A Tag is created when a User introduces a new descriptive label within their personal archive.

Throughout its lifetime, the Tag may be assigned to or removed from multiple Library Entries.

Changing the name of a Tag does not affect its identity.

Removing a Tag only removes its organizational associations.

No Library Entry or Content is affected by the deletion of a Tag.



## Responsibilities

The Tag entity is responsible for:

- providing flexible organization,

- describing Library Entries,

- supporting personalized search,

- improving archive filtering,

- enabling custom categorization,

- preserving User-defined vocabulary.

Tags are descriptive rather than structural.

They do not replace Collections or Genres.



## Relationships

One User may own many Tags.

One Tag may be assigned to many Library Entries.

One Library Entry may contain many Tags.

Tags have no direct relationship with Content.

Tags organize only User-owned Library Entries.



## Business Rules Reference

The behavior of the Tag entity is governed by the approved Tag Management Business Rules.

Tags exist solely for personal organization and never influence shared metadata.



## Architectural Notes

Tags provide the highest degree of flexibility within the personal organization layer.

Unlike Collections, Tags do not represent intentional groups.

Instead, they represent descriptive characteristics chosen by the User.

This distinction enables Users to organize their archives through multiple independent dimensions without affecting the structural organization provided by Collections.



## Entity Classification

Category: Supporting Domain Entity

Subcategory: Personal Organization Entity

Independent Identity: Yes

Business Owner: User

Aggregate Candidate: TBD

Shared Across Users: No

Lifecycle Type: User-managed



## Domain Relationship Summary

| Relationship | Cardinality |
| --- | --- |
| User → Tag | One-to-Many |
| Tag → Library Entry | Many-to-Many |
| Tag → Content | None |



## Architectural Significance

Tags introduce flexible classification into the personal archive.

Unlike Genres, which represent standardized system-defined classifications, and Collections, which represent intentional User-defined groups, Tags provide lightweight descriptive organization.

Together, Collections and Tags form the complete personal organization layer of Mosaica.



# Personal Organization Comparison

The following table summarizes the differences between the three organizational concepts within Mosaica.

| Characteristic | Genre | Collection | Tag |
| --- | --- | --- | --- |
| Ownership | System | User | User |
| Scope | Shared | Personal | Personal |
| Purpose | Objective classification | Intentional grouping | Flexible description |
| Managed By | Mosaica | User | User |
| Shared Between Users | Yes | No | No |
| Applies To | Content | Library Entry | Library Entry |



# Personal Organization Architecture Summary

## Overview

The Personal Organization layer represents every organizational structure created and maintained by individual Users.

Unlike the Shared Metadata layer, Personal Organization reflects subjective preferences rather than objective facts.

Each User owns an independent organizational model that exists entirely within the boundaries of their personal archive.



## Personal Organization Entities

The Personal Organization layer consists of:

- Collection

- Tag

Both entities organize Library Entries rather than Content.

This distinction preserves the separation between shared metadata and personal experience established by the Core Domain.



## Architectural Principles

The Personal Organization layer follows the principles below.

- Organization belongs exclusively to the User.

- Organizational structures are never shared.

- Collections provide structured grouping.

- Tags provide descriptive flexibility.

- Neither Collections nor Tags modify Content metadata.

- Personal organization always operates through Library Entries.

These principles ensure that personal archive management remains completely independent from the shared metadata domain.



## Personal Organization Dependency Model

User

│

▼

Library Entry

│

├─────────────┐

▼             ▼

Collection      Tag

Library Entry serves as the central point of personal organization.

Collections and Tags extend the User's ability to organize the archive without introducing duplication or affecting the shared metadata layer.



# 03.01 Completion Summary

## Overview

This document defines the official Domain Entities of Mosaica and establishes the structural foundation of the Domain Model.

The entities identified in this document represent the business concepts that possess independent identity and lifecycle within the domain.

Together they define the permanent business structure upon which future technical documentation will be built.



## Official Domain Entity Inventory

### Core Domain Entities

- User

- Content

- Library Entry

### Shared Metadata Reference Entities

- Person

- Genre

- Series

- Universe

### Personal Organization Entities

- Collection

- Tag



## Architectural Layers

User

│

▼

Library Entry

│

┌──────────────┴──────────────┐

▼                             ▼

Personal Organization         Shared Metadata

│                             │

┌──────┴──────┐          ┌────────────┼────────────┐

▼             ▼          ▼            ▼            ▼

Collection     Tag      Person       Genre       Content

│

┌─────┴─────┐

▼           ▼

Series     Universe



## Architectural Foundation

The Domain Model is built upon three permanent architectural boundaries.

1. Ownership Boundary

System-owned information and User-owned information remain permanently separated.

2. Identity Boundary

Every Domain Entity possesses an independent identity and lifecycle appropriate to its business purpose.

3. Responsibility Boundary

Each responsibility belongs to exactly one Domain Entity.

No responsibility is intentionally duplicated across the model.

These principles form the architectural foundation for the Database Specification, API Specification and Software Requirements that follow.









# 03.01 Architecture Review

## Review Objective

The purpose of this Architecture Review is to validate that the Core Domain Entity Model accurately represents the approved business architecture of Mosaica before proceeding to Value Objects and Aggregate Design.

This review evaluates architectural consistency rather than implementation details.



## Scope Reviewed

The following sections have been reviewed.

- Domain Classification

- Entity Definition Standard

- Core Domain Entities

- Supporting Domain Entities

- Shared Metadata Architecture

- Personal Organization Architecture

- Domain Relationships

- Architectural Boundaries



## Validation Results

### Business Alignment

Status: Approved

The Domain Model faithfully represents the approved Product Bible, Product Glossary and Business Rules.

No business behavior has been introduced that is not already defined by the approved documentation.



### Ownership Model

Status: Approved

Ownership boundaries are clearly defined.

System-owned information and User-owned information remain completely separated.

The ownership model is internally consistent across all Domain Entities.



### Responsibility Distribution

Status: Approved

Business responsibilities have been assigned to exactly one Domain Entity.

No responsibility is intentionally duplicated.

No significant responsibility gaps have been identified.



### Entity Identity

Status: Approved

Every Domain Entity possesses a clearly defined identity and lifecycle.

Entities without independent identity have intentionally been excluded from this document and will be evaluated separately as Value Objects.



### Architectural Layering

Status: Approved

The Domain Model follows a clear layered architecture.

Core Domain



User

Content

Library Entry



↓



Shared Metadata



Person

Genre

Series

Universe



↓



Personal Organization



Collection

Tag

The relationships between these layers remain simple, explicit and maintainable.



### Complexity Assessment

Status: Approved

The Domain Model intentionally avoids unnecessary abstraction.

Only business concepts with independent identity have been modeled as Domain Entities.

No speculative entities have been introduced.



### Future Compatibility

Status: Approved

The current model provides a stable architectural foundation for:

- Value Objects

- Aggregate Design

- Repository Design

- Database Specification

- API Specification

- Software Requirements

- Domain Services

No structural obstacles have been identified for future phases.



## Architectural Decisions Confirmed

The following architectural decisions are now considered part of the official Domain Model.

### Decision 01

Library Entry is the central business entity of Mosaica.



### Decision 02

Content and Library Entry remain permanently separated.



### Decision 03

Objective metadata belongs exclusively to the Shared Metadata layer.



### Decision 04

Personal organization belongs exclusively to the User.



### Decision 05

Collections organize Library Entries.

They never classify Content.



### Decision 06

Tags describe Library Entries.

They never replace Genres.



### Decision 07

Reference metadata remains reusable and independent from User-owned information.



## Review Conclusion

The Core Domain Entity Model is considered architecturally complete.

The current model provides a consistent, scalable and maintainable representation of the Mosaica business domain.

No blocking architectural issues have been identified.

The project may proceed to 03.02 — Value Objects.



## Approval Status

Module: 03.01 Core Domain Entities

Architecture Review: Approved

Status: Locked

Subsequent architectural improvements shall be managed through formal Change Requests rather than direct modification of this document.











































# 03.02 — Value Objects

## Purpose

The purpose of this document is to identify the immutable business concepts that exist within the Mosaica domain without possessing an independent identity.

Unlike Domain Entities, Value Objects are defined entirely by their attributes and business meaning.

They cannot exist independently and always belong to a parent Domain Entity.

This document establishes the Value Object layer of the Domain Model and provides the architectural foundation for Aggregate Design and Database Specification.



## Scope

This document defines:

- official Value Objects,

- their business purpose,

- ownership,

- lifecycle,

- validation responsibilities,

- and their relationship to Domain Entities.

Implementation details, persistence mechanisms and serialization strategies are intentionally excluded.



## Guiding Principle

A Value Object has no independent identity.

Two Value Objects are considered equal when all of their business attributes are equal.

Value Objects are always owned by a parent Domain Entity.

Within Mosaica, the majority of Value Objects belong to the Library Entry entity because personal experience is represented through Library Entries rather than Content.



# Value Object Classification

For architectural clarity, Value Objects are divided into four categories.

### Evaluation Objects

Represent the User's evaluation of a cultural work.

- Rating

- Appreciation Level



### Organization Objects

Represent how the User organizes a Library Entry.

- Status

- Archive Location

- Favorite Flag



### History Objects

Represent how the User has interacted with a cultural work over time.

- Consumption Event

- Consumption Counter



### Personal Content Objects

Represent User-generated personal information.

- Personal Note



## Architectural Principles

The Value Object layer follows the principles below.

- Value Objects never possess independent identity.

- Value Objects always belong to a parent Domain Entity.

- Value Objects are immutable from a business perspective.

- Replacing a Value Object creates a new business state rather than modifying its identity.

- Value Objects never own other Domain Entities.

- Value Objects may enforce business validation rules.

- Value Objects cannot exist outside their owning Entity.

These principles apply consistently throughout the Mosaica domain.



# Value Object Ownership

The ownership model of the Value Object layer is intentionally simple.

| Value Object | Owner |
| --- | --- |
| Rating | Library Entry |
| Appreciation Level | Library Entry |
| Status | Library Entry |
| Archive Location | Library Entry |
| Favorite Flag | Library Entry |
| Consumption Event | Library Entry |
| Consumption Counter | Library Entry |
| Personal Note | Library Entry |

Version 1 introduces no Value Objects owned by Content, User, Collection or Tag.

This reflects the architectural principle that personal experience is centralized within Library Entry.



## Architectural Overview

Library Entry

│

┌───────────────────┼───────────────────┐

│                   │                   │

▼                   ▼                   ▼

Evaluation          Organization         History

│                   │                   │

┌────┴────┐       ┌──────┼──────┐      ┌─────┴─────┐

▼         ▼       ▼      ▼      ▼      ▼           ▼

Rating  Appreciation Status Archive Favorite Consumption Counter

Level               Location Flag     Event

│

▼

Personal Note



# Architectural Foundation

The Value Object layer represents the personal state of a Library Entry.

While Entities define what exists, Value Objects define the current business state of those Entities.

This separation enables Mosaica to maintain a clean Domain Model in which identity, ownership and business state remain independent architectural concepts.

# A.1 — Rating

## Purpose

The Rating Value Object represents the User's personal quantitative evaluation of a cultural work.

Its purpose is to provide a standardized numerical assessment that reflects the User's individual opinion while remaining completely independent from shared metadata.

A Rating exists solely within the context of a Library Entry and has no meaning outside the User's personal archive.



## Business Meaning

A Rating expresses the User's overall evaluation of a cultural work using the official scoring system defined by Mosaica.

The Rating reflects personal judgment rather than objective quality.

Different Users may assign different Ratings to the same Content without affecting one another.



## Ownership

Rating belongs exclusively to a single Library Entry.

It cannot exist independently.

It cannot be shared between Library Entries.

It cannot be associated directly with Content or User.



## Identity

Rating possesses no independent identity.

Its business meaning is defined entirely by its value.

Two Rating Value Objects are considered equal when they represent the same business value.



## Lifecycle

A Rating is created when a User evaluates a Library Entry for the first time.

Throughout the lifetime of the Library Entry, the Rating may be replaced whenever the User changes their evaluation.

Replacing a Rating does not affect the identity of the owning Library Entry.

Removing a Rating simply returns the Library Entry to an unrated state.



## Responsibilities

The Rating Value Object is responsible for:

- representing personal evaluation,

- providing standardized scoring,

- supporting personal statistics,

- contributing to Dashboard metrics,

- contributing to recommendation calculations,

- enabling rating-based filtering and sorting.

Rating is not responsible for interpreting or comparing evaluations between different Users.



## Validation Principles

A valid Rating shall:

- conform to the official Mosaica rating scale,

- represent exactly one personal evaluation,

- remain independent from other Value Objects,

- always belong to one Library Entry.

Validation rules regarding acceptable score ranges are implementation concerns and therefore belong to the Database Specification and Business Rules rather than the Domain Model.



## Relationships

Rating belongs to exactly one Library Entry.

Rating contributes to:

- personal statistics,

- Dashboard generation,

- archive filtering,

- recommendation inputs,

- future analytical features.

Rating has no direct relationship with Content.



## Business Rules Reference

The behavior of Rating follows the approved User Evaluation Business Rules.

The Domain Model defines Rating as a personal Value Object.

The interpretation of rating values is governed by the Business Rules.



## Architectural Notes

Rating is intentionally modeled as a Value Object rather than a Domain Entity.

Its purpose is to represent business state rather than business identity.

Replacing a Rating represents a change in personal evaluation rather than the creation of a new business object.

This distinction keeps the Domain Model simple while preserving clear ownership boundaries.



## Value Object Classification

Category: Evaluation Object

Owner: Library Entry

Independent Identity: No

Mutable Identity: No

Business State: Personal Evaluation

Shared Across Users: No



## Domain Significance

Rating is one of the primary indicators of User preference within Mosaica.

Although simple in appearance, it contributes to numerous business capabilities, including statistics, recommendations, filtering and archive analysis.

Its value lies not in its numerical representation but in the business meaning it conveys about the User's relationship with a cultural work.



# Evaluation Layer Overview

The Evaluation layer currently consists of two complementary Value Objects.

Library Entry

│

├──────────────┐

▼              ▼

Rating     Appreciation Level

Together, these Value Objects describe both the User's measurable evaluation and their subjective appreciation of a cultural work.

Neither Value Object exists independently of the owning Library Entry.

# A.2 — Appreciation Level

## Purpose

The Appreciation Level Value Object represents the User's emotional appreciation of a cultural work.

While Rating provides a structured quantitative evaluation, Appreciation Level captures the personal emotional significance that a cultural work holds for the User.

Its purpose is to complement numerical evaluation by representing subjective appreciation that cannot always be expressed through a score alone.



## Business Meaning

Appreciation Level reflects how strongly a User values a cultural work on a personal level.

Unlike Rating, which measures evaluation, Appreciation Level represents emotional attachment and personal significance.

Two cultural works may receive identical Ratings while having different Appreciation Levels.

This distinction allows Mosaica to preserve both analytical evaluation and emotional experience within the personal archive.



## Ownership

Appreciation Level belongs exclusively to a single Library Entry.

It cannot exist independently.

It cannot be transferred or shared.

It has no meaning outside the context of its owning Library Entry.



## Identity

Appreciation Level possesses no independent identity.

Its business meaning is determined entirely by its current value.

Two Appreciation Level Value Objects are considered equal when they represent the same level of appreciation.



## Lifecycle

An Appreciation Level is established when a User expresses the personal significance of a cultural work.

Throughout the lifetime of the Library Entry, the Appreciation Level may be replaced whenever the User's perception changes.

Replacing the Appreciation Level represents an evolution of personal experience rather than the creation of a new business object.

Removing the Appreciation Level returns the Library Entry to a state without recorded appreciation.



## Responsibilities

The Appreciation Level Value Object is responsible for:

- representing emotional appreciation,

- preserving personal significance,

- enriching archive exploration,

- supporting personalized recommendations,

- contributing to User-centric statistics,

- complementing numerical evaluation.

Appreciation Level does not replace Rating.

Both Value Objects serve different business purposes.



## Validation Principles

A valid Appreciation Level shall:

- represent exactly one personal appreciation state,

- remain independent from Rating,

- always belong to one Library Entry,

- conform to the official appreciation model defined by Mosaica.

Specific appreciation values and their representations are implementation concerns and therefore belong to the Database Specification and Business Rules.



## Relationships

Appreciation Level belongs to exactly one Library Entry.

It contributes to:

- personalized recommendations,

- emotional archive exploration,

- User statistics,

- Dashboard insights,

- future memory-oriented features.

Appreciation Level has no direct relationship with Content.



## Business Rules Reference

The behavior of Appreciation Level follows the approved User Evaluation Business Rules.

Its interpretation and available appreciation states are governed by the Business Rules documentation.



## Architectural Notes

Appreciation Level is intentionally separated from Rating.

Although both represent User evaluation, they describe different dimensions of personal experience.

Rating answers the question:

"How good is this cultural work?"

Appreciation Level answers the question:

"How meaningful is this cultural work to me?"

Maintaining this distinction prevents emotional significance from being reduced to a numerical score.



## Value Object Classification

Category: Evaluation Object

Owner: Library Entry

Independent Identity: No

Business State: Emotional Appreciation

Shared Across Users: No



## Domain Significance

Appreciation Level introduces an emotional dimension to the Domain Model.

It transforms Mosaica from a traditional media tracker into a personal cultural archive by allowing Users to preserve not only their evaluations but also their emotional connection to cultural works.

This Value Object reinforces one of the core principles of Mosaica: preserving personal experience rather than merely recording metadata.



## Evaluation Model

The Evaluation layer consists of two complementary Value Objects.

| Value Object | Primary Question |
| --- | --- |
| Rating | How good is this work? |
| Appreciation Level | How meaningful is this work to me? |

Together they provide a richer representation of User experience than either Value Object could provide independently.



## Architectural Relationship

Library Entry

│

▼

Evaluation

│

┌────┴────┐

▼         ▼

Rating   Appreciation Level

Both Value Objects describe different aspects of the same business concept while remaining completely independent from one another.



Harika. Ben de tam bunu önerecektim.

03.01'de çok işe yarayan Entity Definition Standard vardı. Aynı yaklaşımı burada da uygulayalım.

Bu bölümü Value Object Classification'ın hemen arkasına eklemeni öneriyorum.



# Value Object Definition Standard

Every Value Object within the Mosaica Domain Model shall be documented using the following structure.

### Purpose

Defines the business reason for the existence of the Value Object.

This section explains what business concept the Value Object represents within the domain.



### Business Meaning

Describes the business interpretation of the Value Object.

This section explains what the Value Object communicates from the perspective of the User and the business domain.



### Ownership

Defines which Domain Entity owns the Value Object.

A Value Object shall always belong to exactly one parent Domain Entity.



### Identity

Confirms that the Value Object possesses no independent identity.

Business equality is determined entirely by its attributes rather than a persistent identifier.



### Lifecycle

Describes how the Value Object is created, replaced and removed during the lifetime of its owning Entity.

Lifecycle descriptions shall focus on business state rather than implementation details.



### Responsibilities

Defines the business responsibilities assigned to the Value Object.

Responsibilities shall remain limited to business meaning and must not overlap with Entity responsibilities.



### Validation Principles

Defines the business constraints that determine whether the Value Object represents a valid business state.

Implementation-specific validation rules belong to later technical documentation.



### Relationships

Describes how the Value Object participates in the Domain Model through its owning Entity.

Value Objects never establish ownership relationships independently.



### Business Rules Reference

Identifies the approved Business Rules that govern the behavior represented by the Value Object.

The Domain Model references Business Rules but does not redefine them.



### Architectural Notes

Explains important architectural decisions that influenced the design of the Value Object.

This section documents reasoning rather than business behavior.



### Value Object Classification

Summarizes the architectural characteristics of the Value Object.

Every Value Object shall specify:

- Category

- Owner

- Independent Identity

- Business State

- Shared Across Users



### Domain Significance

Explains why the Value Object is important within the overall Domain Model.

This section focuses on architectural contribution rather than implementation details.



# 📌 Architectural Principle

To ensure consistency throughout the Domain Model, every official Value Object shall follow this documentation standard.

No Value Object may introduce additional mandatory sections without architectural justification.

This standard establishes a predictable documentation structure for future Value Objects and provides a consistent foundation for Aggregate Design, Database Specification and Software Requirements.



# B.1 — Status

## Purpose

The Status Value Object represents the current progression state of a Library Entry within the User's personal journey.

Its purpose is to describe how the User currently relates to the referenced Content from a lifecycle perspective.

Status enables Mosaica to distinguish between different stages of engagement without affecting the identity of the Library Entry.



## Business Meaning

Status communicates the current state of interaction between the User and a cultural work.

It represents progression rather than preference.

Status answers the question:

"Where am I in my journey with this work?"

It does not express quality, appreciation or archive organization.



## Ownership

Status belongs exclusively to a single Library Entry.

It has no meaning outside its owning Library Entry.

Status cannot exist independently and cannot be shared between Library Entries.



## Identity

Status possesses no independent identity.

Two Status Value Objects are considered equal when they represent the same progression state.



## Lifecycle

A Status is established when a Library Entry is created.

Throughout the lifetime of the Library Entry, Status may change multiple times as the User progresses through different stages of interaction.

Each replacement reflects a new stage in the User's journey while preserving the identity of the Library Entry.



## Responsibilities

The Status Value Object is responsible for:

- representing progression,

- supporting workflow,

- enabling progress-based filtering,

- contributing to Dashboard metrics,

- contributing to User statistics,

- reflecting the current lifecycle stage of a Library Entry.

Status intentionally does not organize the archive or evaluate Content.



## Validation Principles

A valid Status shall:

- represent exactly one progression state,

- belong to one Library Entry,

- conform to the official workflow defined by Mosaica,

- remain independent from archive organization.

The list of valid Status values is defined by the approved Business Rules and implemented within later technical specifications.



## Relationships

Status belongs to exactly one Library Entry.

It contributes to:

- Dashboard,

- Statistics,

- Search,

- Filtering,

- Workflow features.

Status has no direct relationship with Content.



## Business Rules Reference

The behavior of Status is governed by the approved Status Management Business Rules.

The Domain Model defines only its business meaning and ownership.

The available workflow states are defined elsewhere.



## Architectural Notes

Status represents progression, not organization.

This distinction is one of the core architectural decisions of the Value Object layer.

Changing Status reflects a change in the User's interaction with the cultural work.

It does not alter the position of the Library Entry within the personal archive.



## Value Object Classification

Category: Workflow Object

Owner: Library Entry

Independent Identity: No

Business State: Progression

Shared Across Users: No



## Domain Significance

Status provides the workflow engine of the personal archive.

Many application features—including progress tracking, archive views, Dashboard summaries and statistics—depend on the current Status of each Library Entry.

Although technically simple, Status represents one of the most frequently changing business states within the domain.



## Workflow Layer

Library Entry

│

▼

Status

│

▼

Current Progress State

Status describes where the User currently is in their relationship with the referenced Content.

It intentionally does not describe where the Library Entry is stored.

That responsibility belongs to Archive Location.







# C.1 — Archive Location

## Purpose

The Archive Location Value Object represents the logical location of a Library Entry within the User's personal archive.

Its purpose is to determine where a Library Entry belongs inside the archive structure without affecting its identity or business history.

Archive Location organizes the archive itself rather than describing the User's progression with the referenced Content.



## Business Meaning

Archive Location defines the current organizational position of a Library Entry.

It answers the question:

"Where does this Library Entry belong within my archive?"

Unlike Status, Archive Location is concerned with archive organization rather than User progression.

The same Status may exist in different logical locations only if permitted by the approved Business Rules.



## Ownership

Archive Location belongs exclusively to one Library Entry.

It cannot exist independently.

It cannot be shared or referenced outside its owning Library Entry.



## Identity

Archive Location possesses no independent identity.

Its business meaning is determined entirely by its current location.

Two Archive Location Value Objects are considered equal when they represent the same logical archive location.



## Lifecycle

Every Library Entry is assigned an Archive Location throughout its lifetime.

As the User manages the personal archive, the Archive Location may change without affecting the identity, ownership or history of the Library Entry.

Changing Archive Location represents a relocation within the archive rather than the creation of a new business object.



## Responsibilities

The Archive Location Value Object is responsible for:

- determining archive placement,

- supporting archive navigation,

- enabling archive filtering,

- defining logical archive sections,

- contributing to Dashboard organization,

- preserving the structural organization of the personal archive.

Archive Location intentionally does not represent User progression or personal evaluation.



## Validation Principles

A valid Archive Location shall:

- represent exactly one logical archive location,

- belong to one Library Entry,

- conform to the archive structure defined by Mosaica,

- remain independent from User evaluation.

Valid combinations between Archive Location and Status are governed by the approved Business Rules and are not redefined within the Domain Model.



## Relationships

Archive Location belongs to exactly one Library Entry.

It contributes to:

- Archive navigation,

- Dashboard organization,

- Search,

- Filtering,

- Archive statistics.

Archive Location has no direct relationship with Content.



## Business Rules Reference

The behavior of Archive Location follows the approved Archive Management Business Rules.

The Domain Model defines only its business meaning and ownership.

Permitted archive locations and transition rules are governed by the approved Business Rules documentation.



## Architectural Notes

Archive Location represents where a Library Entry exists inside the archive.

It intentionally does not represent what the User is currently doing with the referenced Content.

Maintaining this separation from Status preserves a clean distinction between archive organization and User workflow.



## Value Object Classification

Category: Archive Object

Owner: Library Entry

Independent Identity: No

Business State: Archive Organization

Shared Across Users: No



## Domain Significance

Archive Location establishes the structural organization of the User's personal archive.

Nearly every archive-related feature—including Archive, Wishlist, Trash, Dashboard sections and archive navigation—depends upon the current Archive Location.

For this reason, Archive Location represents one of the primary organizational Value Objects within the Domain Model.



## Archive Organization Model

Library Entry

│

▼

Archive Location

│

▼

Logical Archive Section

Archive Location determines the logical placement of a Library Entry within the personal archive.

It intentionally remains independent from User evaluation and workflow progression.



# C.2 — Favorite

## Purpose

The Favorite Value Object represents the User's explicit decision to identify a Library Entry as personally exceptional within their cultural archive.

Its purpose is to distinguish selected cultural works from the rest of the archive without altering their evaluation, progression or organizational placement.

Favorite represents intentional personal significance rather than objective quality.



## Business Meaning

Favorite communicates a deliberate personal choice made by the User.

It answers the question:

"Is this one of the works I personally wish to highlight?"

Favorite is independent from Rating, Appreciation Level, Status and Archive Location.

A cultural work may receive a high Rating without being marked as a Favorite.

Likewise, a Favorite does not imply any particular Rating or progression state.



## Ownership

Favorite belongs exclusively to one Library Entry.

It cannot exist independently.

It cannot be shared between Library Entries.

It has no meaning outside its owning Library Entry.



## Identity

Favorite possesses no independent identity.

Its business meaning is completely determined by whether the owning Library Entry is designated as a Favorite.

Two Favorite Value Objects are considered equal when they represent the same business state.



## Lifecycle

A Favorite is established when a User explicitly marks a Library Entry as personally significant.

Throughout the lifetime of the Library Entry, the Favorite designation may be added or removed without affecting the identity or history of the Library Entry.

Changing Favorite reflects a change in personal preference rather than a change in business identity.



## Responsibilities

The Favorite Value Object is responsible for:

- identifying personally significant Library Entries,

- supporting personalized archive views,

- enabling favorite-based filtering,

- contributing to Dashboard insights,

- supporting future recommendation refinement,

- preserving explicit User preference.

Favorite intentionally does not evaluate Content or organize the archive.



## Validation Principles

A valid Favorite shall:

- belong to exactly one Library Entry,

- represent one explicit User preference,

- remain independent from Rating,

- remain independent from Status,

- remain independent from Archive Location.

Business rules governing when a Library Entry may be marked as a Favorite are defined by the approved Business Rules documentation.



## Relationships

Favorite belongs to exactly one Library Entry.

It contributes to:

- Dashboard,

- personalized archive views,

- filtering,

- recommendation inputs,

- future personalization features.

Favorite has no direct relationship with Content.



## Business Rules Reference

The behavior of Favorite follows the approved Personal Preference Business Rules.

The Domain Model defines Favorite as a personal Value Object representing explicit User preference.



## Architectural Notes

Favorite represents personal preference rather than evaluation.

Unlike Rating, which measures quality, and Appreciation Level, which measures emotional significance, Favorite represents an intentional decision by the User to highlight a Library Entry.

Maintaining this separation prevents preference, evaluation and archive organization from becoming coupled within a single business concept.



## Value Object Classification

Category: Archive Object

Owner: Library Entry

Independent Identity: No

Business State: Personal Preference

Shared Across Users: No



## Domain Significance

Favorite introduces explicit personal prioritization into the Domain Model.

Rather than relying on inferred behavior from Ratings or Consumption History, Favorite allows the User to directly communicate personal importance.

This explicit signal provides valuable context for archive exploration, Dashboard summaries and future recommendation capabilities.



## Preference Model

The Archive layer now consists of two complementary Value Objects.

| Value Object | Primary Question |
| --- | --- |
| Archive Location | Where is this Library Entry located? |
| Favorite | Should this Library Entry be personally highlighted? |

Although both belong to the Archive layer, they describe different dimensions of the User's archive.



## Architectural Relationship

Library Entry

│

▼

Archive State

│

┌────┴────┐

▼         ▼

Archive   Favorite

Location

Archive Location determines the structural placement of a Library Entry.

Favorite determines its personal prominence.

These responsibilities intentionally remain independent.

# D.1 — Consumption Event

## Purpose

The Consumption Event Value Object represents a single completed interaction between the User and a cultural work.

Its purpose is to preserve the historical record of when and how a User experienced a specific Content.

Unlike Status, which represents the current stage of interaction, Consumption Event records a completed moment in the User's cultural journey.

Each Consumption Event contributes to the long-term memory of the personal archive.



## Business Meaning

A Consumption Event answers the question:

"When did this experience happen?"

It captures an individual historical occurrence rather than the current business state.

Multiple Consumption Events may exist for the same Library Entry, allowing Mosaica to preserve repeated experiences over time.

Each event represents an independent moment within the User's cultural history.



## Ownership

Consumption Event belongs exclusively to one Library Entry.

It cannot exist independently.

It cannot be shared between Library Entries.

Every recorded event is permanently associated with its owning Library Entry.



## Identity

Consumption Event possesses no independent identity within the Domain Model.

Its business meaning is determined by the historical information it represents.

Individual events are distinguished by their business attributes rather than by an independent business identity.



## Lifecycle

A Consumption Event is created whenever the User completes or intentionally records a cultural experience.

Once recorded, the event represents historical fact.

Historical events should not normally be modified.

If corrections are required, the original event is replaced by a corrected representation while preserving the integrity of the User's historical timeline.



## Responsibilities

The Consumption Event Value Object is responsible for:

- preserving historical experiences,

- recording completed interactions,

- supporting personal timelines,

- contributing to archive memories,

- supporting statistics,

- enabling future historical analysis.

Consumption Event intentionally does not describe the current state of a Library Entry.



## Validation Principles

A valid Consumption Event shall:

- belong to exactly one Library Entry,

- represent one completed experience,

- preserve historical consistency,

- remain independent from current workflow state.

Validation of chronological consistency and business rules is defined by the approved Business Rules documentation.



## Relationships

Consumption Event belongs to exactly one Library Entry.

It contributes to:

- Consumption History,

- Statistics,

- Dashboard,

- Monthly Culture Summary,

- Memories,

- future historical insights.

Consumption Event has no direct relationship with Content.



## Business Rules Reference

The behavior of Consumption Event follows the approved Consumption History Business Rules.

The Domain Model defines Consumption Event as the atomic historical record within a Library Entry.



## Architectural Notes

Consumption Event represents a historical fact rather than a current business state.

Unlike Rating or Status, which may change over time, a Consumption Event exists to preserve the User's cultural history.

This distinction allows Mosaica to function as a living archive rather than merely a media tracker.



## Value Object Classification

Category: History Object

Owner: Library Entry

Independent Identity: No

Business State: Historical Record

Shared Across Users: No



## Domain Significance

Consumption Event introduces the historical dimension of the Domain Model.

Without Consumption Events, the system would only represent the current state of a Library Entry.

By preserving individual experiences over time, Mosaica becomes capable of supporting timelines, memories, annual summaries and long-term cultural analytics.



## History Model

The History layer represents the temporal dimension of a Library Entry.

Library Entry

│

▼

Consumption History

│

┌─────┴─────┐

▼           ▼

Event 1   Event 2   ...   Event N

Each Consumption Event records one completed experience.

Together they form the complete historical record of the Library Entry.

















# D.2 — Consumption Counter

## Purpose

The Consumption Counter Value Object represents the total number of recorded Consumption Events associated with a Library Entry.

Its purpose is to provide an immediate summary of the User's historical interactions with a cultural work without requiring direct inspection of every recorded event.

Consumption Counter is a derived representation of historical activity rather than an independent historical record.



## Business Meaning

Consumption Counter answers the question:

"How many times has this cultural work been experienced?"

Unlike Consumption Event, which records individual moments, Consumption Counter provides a summarized view of the User's interaction history.

It exists to support business features that require historical totals rather than detailed event information.



## Ownership

Consumption Counter belongs exclusively to one Library Entry.

It cannot exist independently.

Its value is meaningful only within the context of its owning Library Entry.



## Identity

Consumption Counter possesses no independent identity.

Its business meaning is determined entirely by its current count.

Two Consumption Counter Value Objects are considered equal when they represent the same historical total.



## Lifecycle

Consumption Counter is established when the first Consumption Event is recorded.

Its value evolves as additional Consumption Events are added.

The counter reflects the historical state of the Library Entry at any given point in time.

Replacing the counter does not represent a business event; it reflects an updated summary of historical information.



## Responsibilities

The Consumption Counter Value Object is responsible for:

- summarizing Consumption Events,

- supporting archive statistics,

- contributing to Dashboard metrics,

- enabling filtering,

- supporting recommendation inputs,

- providing efficient historical summaries.

Consumption Counter intentionally does not preserve historical details.

Those responsibilities belong exclusively to Consumption Events.



## Validation Principles

A valid Consumption Counter shall:

- belong to exactly one Library Entry,

- represent the total number of recorded Consumption Events,

- remain consistent with the historical record,

- never contradict the underlying Consumption Events.

The synchronization rules between Consumption Events and Consumption Counter are defined by the approved Business Rules and enforced within the application layer.



## Relationships

Consumption Counter belongs to exactly one Library Entry.

Its value is derived from the Consumption Events associated with the same Library Entry.

It contributes to:

- Dashboard,

- Statistics,

- Search,

- Filtering,

- archive summaries.

Consumption Counter has no direct relationship with Content.



## Business Rules Reference

The behavior of Consumption Counter follows the approved Consumption History Business Rules.

The Domain Model defines it as a summary of historical interaction rather than an independent historical record.



## Architectural Notes

Consumption Counter is intentionally modeled separately from Consumption Events.

The two Value Objects serve different business purposes.

Consumption Events preserve historical detail.

Consumption Counter provides efficient business summaries.

This separation keeps the Domain Model expressive while avoiding unnecessary duplication of responsibilities.



## Value Object Classification

Category: History Object

Owner: Library Entry

Independent Identity: No

Business State: Historical Summary

Shared Across Users: No



## Domain Significance

Consumption Counter provides an efficient representation of historical activity.

Many application features require knowledge of how often a cultural work has been experienced without needing access to the complete event history.

By separating historical facts from historical summaries, the Domain Model remains scalable, expressive and easy to extend.



## History Layer

Library Entry

│

▼

Historical State

│

┌────┴────────────┐

▼                 ▼

Consumption     Consumption

Events          Counter

Consumption Events preserve individual experiences.

Consumption Counter summarizes those experiences.

Together they represent the complete historical dimension of a Library Entry.

Bence bu noktada en doğru kararı verdik.

Ve burada özellikle onaylı dokümanları bozmayacağız.

Yani:

❌ Personal Memory (Value Object adı olarak)

yerine

✅ Personal Note (Value Object)

kullanacağız.

Ama Domain Model içerisinde onun ait olduğu katmanın adını

Personal Memory Layer

olarak tanımlayacağız.

Bu sayede:

- Product Glossary bozulmuyor.

- Business Rules bozulmuyor.

- Ama mimari çok daha anlamlı hale geliyor.

Ben bunu şu şekilde yazardım.



# E.1 — Personal Note

## Purpose

The Personal Note Value Object represents the User's own written thoughts, reflections and memories associated with a Library Entry.

Its purpose is to preserve the personal context surrounding a cultural experience beyond structured evaluations and historical records.

Unlike Rating, Status or Consumption Events, a Personal Note captures information that cannot be represented through predefined business states.

It allows the User to attach personal meaning to a cultural work in their own words.



## Business Meaning

Personal Note answers the question:

"What do I personally want to remember about this experience?"

It represents subjective memory rather than structured data.

A Personal Note may record emotions, impressions, interpretations, personal circumstances or any information the User considers meaningful.

The business value lies in preserving personal context rather than objective information.



## Ownership

Personal Note belongs exclusively to one Library Entry.

It cannot exist independently.

It cannot be shared between Library Entries.

Every Personal Note is owned entirely by the User.



## Identity

Personal Note possesses no independent identity.

Its business meaning is defined entirely by its content.

Replacing a Personal Note represents a change in personal memory rather than the creation of a new business object.



## Lifecycle

A Personal Note may be created at any point during the lifetime of a Library Entry.

The User may update, replace or remove the note as personal reflections evolve over time.

Changes to a Personal Note never affect the identity of the Library Entry itself.



## Responsibilities

The Personal Note Value Object is responsible for:

- preserving personal memories,

- recording reflections,

- capturing emotional context,

- enriching archive exploration,

- supporting future memory-oriented features,

- preserving the personal narrative of the User.

Personal Note intentionally does not represent structured metadata.



## Validation Principles

A valid Personal Note shall:

- belong to exactly one Library Entry,

- represent User-generated content,

- remain independent from shared metadata,

- preserve personal context without altering business identity.

Validation concerning length, formatting and content constraints belongs to later technical specifications.



## Relationships

Personal Note belongs to exactly one Library Entry.

It contributes to:

- archive memories,

- personal archive exploration,

- Dashboard insights,

- future journaling features,

- memory-oriented experiences.

Personal Note has no direct relationship with Content.



## Business Rules Reference

The behavior of Personal Note follows the approved Personal Information Business Rules.

The Domain Model defines Personal Note as a Value Object representing User-authored memory within a Library Entry.



## Architectural Notes

Personal Note introduces the narrative dimension of the Domain Model.

Unlike every previous Value Object, Personal Note contains free-form User expression rather than structured business data.

This distinction makes it the primary representation of personal memory within Mosaica.

For architectural purposes, Personal Note forms the foundation of the Personal Memory layer.



## Value Object Classification

Category: Personal Content Object

Architectural Layer: Personal Memory

Owner: Library Entry

Independent Identity: No

Business State: User Memory

Shared Across Users: No



## Domain Significance

Personal Note transforms Mosaica from a structured tracking application into a true personal cultural archive.

Structured information explains what happened.

Personal Note explains why it mattered.

By preserving personal reflections alongside evaluations and historical events, Mosaica enables Users to revisit not only cultural works, but also the memories and emotions associated with them.



## Personal Memory Model

Library Entry

│

▼

Personal Memory

│

▼

Personal Note

Personal Memory represents the narrative dimension of the personal archive.

Within Version 1, Personal Note is the sole Value Object contained within this layer.

The architecture intentionally allows future expansion with additional User-authored memory objects without requiring structural changes to the Domain Model.





# Library Entry Business State Architecture

## Overview

The primary purpose of a Library Entry is not only to establish a relationship between a User and a Content, but also to preserve the complete business state of that relationship over time.

Unlike traditional media tracking applications, Mosaica models personal experience through multiple independent dimensions.

Each dimension represents a distinct aspect of the User's relationship with a cultural work.

Together, these dimensions form the complete Business State of a Library Entry.



## Business State Layers

The Business State of a Library Entry consists of five independent architectural layers.

| Layer | Purpose |
| --- | --- |
| Evaluation | Represents the User's assessment of the cultural work. |
| Workflow | Represents the User's current stage of interaction. |
| Archive | Represents the organizational position of the Library Entry. |
| History | Represents historical interactions over time. |
| Personal Memory | Represents User-authored reflections and memories. |

Each layer contributes a different dimension of the User's personal archive.

No layer replaces or duplicates the responsibilities of another.



## Business State Model

Library Entry

│

┌─────────────────────────┼─────────────────────────┐

│                         │                         │

▼                         ▼                         ▼

Evaluation                Workflow                 Archive

│                         │                         │

┌───┴────┐                    │                  ┌──────┴──────┐

▼        ▼                    ▼                  ▼             ▼

Rating  Appreciation        Status        Archive Location   Favorite

Level

│

▼

History

┌──────────────┐

▼              ▼

Consumption Event   Consumption Counter

│

▼

Personal Memory

│

▼

Personal Note



## Architectural Principles

The Business State Model follows the principles below.

### Separation of Concerns

Each Value Object represents exactly one business responsibility.

Responsibilities shall never overlap.



### Independent Dimensions

Evaluation, Workflow, Archive, History and Personal Memory are independent architectural dimensions.

A change within one layer shall not implicitly modify another layer unless explicitly required by the approved Business Rules.



### User Ownership

Every Value Object within the Business State Model belongs exclusively to the owning Library Entry.

No Value Object may exist independently.



### Immutable Business Meaning

Although individual Value Objects may be replaced during the lifetime of a Library Entry, each replacement represents a new business state rather than a change in business identity.



### Extensibility

New Value Objects may be introduced within existing layers without altering the overall architecture.

Future versions of Mosaica should extend this model rather than replace it.



## Domain Responsibilities

The Business State Model intentionally separates different categories of personal information.

| Business Question | Responsible Value Object |
| --- | --- |
| How good is it? | Rating |
| How meaningful is it? | Appreciation Level |
| Where am I in my journey? | Status |
| Where is it stored? | Archive Location |
| Do I personally highlight it? | Favorite |
| When did I experience it? | Consumption Event |
| How many times have I experienced it? | Consumption Counter |
| What do I want to remember? | Personal Note |

Every business question has exactly one responsible Value Object.

This principle eliminates ambiguity and simplifies future application development.



## Relationship with Domain Entities

The Business State Model exists entirely within the boundaries of the Library Entry Domain Entity.

Neither User nor Content directly owns any Value Object.

User

│

owns

│

Library Entry

│

contains

│

Business State

This ownership hierarchy represents one of the fundamental architectural principles of the Mosaica Domain Model.



## Architectural Significance

The Business State Model is one of the defining architectural characteristics of Mosaica.

Rather than storing personal information as unrelated fields, the Domain Model organizes User experience into coherent business concepts.

This approach provides several long-term advantages:

- clear ownership boundaries,

- expressive Domain Model,

- simplified Aggregate Design,

- improved maintainability,

- scalable feature development,

- consistent API design,

- normalized database structure.

The Business State Model therefore serves as the conceptual bridge between the Domain Model and the technical architecture of the application.

Domain Type Classification

Purpose

The purpose of this section is to establish the official classification of business concepts within the Mosaica Domain Model.

Not every business concept requires the same level of architectural representation.

Some concepts possess independent identity, some encapsulate meaningful business state, while others remain simple attributes of their owning Domain Entity.

This classification defines the appropriate modeling strategy for each concept and serves as the authoritative reference for Aggregate Design, Database Specification and API Specification.



Classification Categories

Business concepts within Mosaica are classified into one of the following categories.

Domain Entity

A business concept possessing an independent identity and lifecycle.

Entities exist independently and represent the primary structural components of the domain.



Value Object

A business concept without independent identity.

Value Objects represent meaningful business state and always belong to a parent Domain Entity.



Domain Primitive

A simple attribute that carries business information but does not justify explicit modeling as a Value Object.

Domain Primitives have no independent behavior beyond basic validation.



Derived Concept

Information calculated or inferred from other business concepts.

Derived Concepts are intentionally not modeled as independent Domain objects.



Official Classification

Domain Entities

| Concept | Owner |
| --- | --- |
| User | System |
| Content | System |
| Library Entry | User |
| Collection | User |
| Tag | User |
| Person | System |
| Genre | System |
| Series | System |
| Universe | System |



Value Objects

| Concept | Owner |
| --- | --- |
| Rating | Library Entry |
| Appreciation Level | Library Entry |
| Status | Library Entry |
| Archive Location | Library Entry |
| Favorite | Library Entry |
| Consumption Event | Library Entry |
| Consumption Counter | Library Entry |
| Personal Note | Library Entry |



Domain Primitives

The following concepts are intentionally represented as simple business attributes.

| Concept | Owner |
| --- | --- |
| Title | Content |
| Original Title | Content |
| Release Year | Content |
| Runtime | Content |
| Original Language | Content |
| Country | Content |
| Poster | Content |
| Cover | Content |
| Synopsis | Content |
| External Identifiers | Content |

These concepts provide descriptive metadata but do not encapsulate sufficient business behavior to justify Value Object modeling.



Derived Concepts

The following concepts are derived from existing business information.

They are intentionally excluded from the Domain Model as independent objects.

| Concept | Derived From |
| --- | --- |
| Dashboard Metrics | Library Entries |
| Statistics | Library Entries |
| Recommendation Inputs | Library Entries |
| Monthly Culture Summary | Library Entries |
| Search Index | Content + Library Entry |
| Archive Counts | Library Entries |
| Collection Counts | Collections |
| Tag Usage | Tags |

Derived Concepts shall be calculated rather than persisted as independent Domain objects unless future architectural requirements dictate otherwise.



Architectural Principles

The following principles govern Domain Type Classification.

Principle 1

Every business concept shall have exactly one official classification.



Principle 2

Only concepts possessing independent identity qualify as Domain Entities.



Principle 3

Only concepts encapsulating meaningful business state qualify as Value Objects.



Principle 4

Simple descriptive information shall remain Domain Primitives.



Principle 5

Calculated information shall remain Derived Concepts.



Classification Hierarchy

Business Concept

│

┌──────┼───────────────┐

│      │               │

▼      ▼               ▼

Entity  Value Object  Primitive

│

▼

Derived Concepts





# 03.02 Architecture Review

## Review Objective

The purpose of this Architecture Review is to validate that the Value Object Model accurately represents the business state of the Mosaica domain before proceeding to Aggregate Design.

This review evaluates architectural consistency, ownership boundaries and modeling decisions rather than implementation details.



## Scope Reviewed

The following architectural components have been reviewed.

- Value Object Classification

- Value Object Definition Standard

- Evaluation Layer

- Workflow Layer

- Archive Layer

- History Layer

- Personal Memory Layer

- Library Entry Business State Architecture

- Domain Type Classification

- ADR-001 — Media Type Classification



## Validation Results

### Domain Consistency

Status: Approved

Every Value Object represents a meaningful business concept without possessing an independent identity.

The Value Object layer remains fully consistent with the approved Domain Entity Model.



### Ownership Model

Status: Approved

Ownership boundaries remain explicit and consistent.

Every Value Object belongs to exactly one parent Domain Entity.

No Value Object exists independently.



### Business State Separation

Status: Approved

The business state of a Library Entry is successfully separated into independent architectural layers.

Each layer represents a unique business dimension without overlapping responsibilities.



### Content Value Objects

Status: Approved

ADR-001 formally establishes Media Type as the first Value Object owned by the Content entity.

This decision expands the Value Object model while preserving architectural consistency.



### Library Entry Business State

Status: Approved

The Library Entry Business State Model provides a complete representation of the User's personal relationship with a cultural work.

The model remains expressive without introducing unnecessary complexity.



### Architectural Layering

Status: Approved

The Value Object architecture follows a clear layered design.

Content

│

└── Media Type



Library Entry

│

├── Evaluation

├── Workflow

├── Archive

├── History

└── Personal Memory

This layered structure improves readability, maintainability and future extensibility.



### Responsibility Distribution

Status: Approved

Business responsibilities are clearly separated.

Each Value Object answers one specific business question.

No unnecessary duplication has been identified.



### Complexity Assessment

Status: Approved

The Value Object model intentionally avoids excessive abstraction.

Only business concepts with meaningful semantic value have been modeled as Value Objects.

Descriptive metadata remains classified as Domain Primitives.

Derived information remains excluded from the Domain Model.



### Future Compatibility

Status: Approved

The current architecture provides a stable foundation for:

- Aggregate Design

- Domain Services

- Repository Design

- Database Specification

- API Specification

- Software Requirements

No architectural blockers have been identified.



# Architectural Decisions Confirmed

The following architectural decisions are now considered official.



### Decision 01

Library Entry owns the complete personal Business State.



### Decision 02

Business State is divided into independent architectural layers.



### Decision 03

Every Value Object belongs to exactly one parent Domain Entity.



### Decision 04

Business meaning determines Value Object classification.

Technical implementation details do not.



### Decision 05

Media Type is officially classified as a Content Value Object through ADR-001.



### Decision 06

Historical events and historical summaries represent different business concepts.

They shall remain separate Value Objects.



### Decision 07

Personal Notes represent User-authored memory and establish the Personal Memory layer.



# Review Conclusion

The Value Object Model is considered architecturally complete.

The current model accurately represents the business state of the Mosaica domain while maintaining clear ownership boundaries and strong separation of responsibilities.

The architecture is approved for use as the foundation of Aggregate Design.

No blocking architectural issues have been identified.



# Approval Status

Module: 03.02 Value Objects

Architecture Review: Approved

Status: LOCKED

Future modifications to the Value Object Model shall be managed through Architecture Decision Records rather than direct modification of this document.



























# 03.03 — Aggregate Design

## Purpose

The purpose of this document is to define the official Aggregate boundaries of the Mosaica Domain Model.

Aggregates establish transactional consistency boundaries by grouping Domain Entities and Value Objects that must remain consistent during business operations.

This document intentionally focuses on business consistency rather than database relationships.

Aggregate Design provides the architectural foundation for repositories, transactions, persistence strategies and application services.



## Scope

This document defines:

- Aggregate boundaries,

- Aggregate Roots,

- ownership within Aggregates,

- transactional consistency,

- Aggregate relationships,

- repository boundaries.

Implementation details are intentionally excluded.



## Guiding Principle

An Aggregate represents a consistency boundary.

All modifications within an Aggregate shall preserve business consistency.

Communication between Aggregates shall occur through references rather than shared ownership.

Aggregates are business constructs rather than database structures.



# Aggregate Design Principles

The following principles govern every Aggregate within Mosaica.



## Principle 1

Every Aggregate has exactly one Aggregate Root.

External components may only reference the Aggregate Root.

Internal objects shall never be referenced directly.



## Principle 2

Every Aggregate protects its own business consistency.

Business invariants shall never depend upon multiple Aggregates being modified simultaneously.



## Principle 3

Aggregates communicate through identifiers rather than direct ownership.

Cross-Aggregate navigation shall remain minimal.



## Principle 4

Aggregate boundaries shall be determined by business consistency rather than database normalization.



## Principle 5

Value Objects always belong to the Aggregate that owns their parent Entity.

They never establish Aggregate boundaries independently.



## Principle 6

Aggregate size shall remain as small as possible while preserving business consistency.



# Aggregate Candidate Review

The Domain Model identifies the following Aggregate candidates.

| Entity | Candidate |
| --- | --- |
| User | Yes |
| Content | Yes |
| Library Entry | Yes |
| Collection | Review Required |
| Tag | Review Required |
| Person | No |
| Genre | No |
| Series | No |
| Universe | No |



# Initial Architectural Observation

At first glance, three entities appear capable of serving as Aggregate Roots.

- User

- Content

- Library Entry

However, Aggregate boundaries are determined by business consistency rather than ownership alone.

Therefore, each candidate shall be evaluated independently before formal Aggregate boundaries are established.



# Aggregate Evaluation Criteria

Every Aggregate candidate shall be evaluated according to the following questions.

### Business Consistency

Does the entity protect a unique business consistency boundary?



### Transactional Independence

Can business operations be completed without requiring simultaneous modification of another Aggregate?



### Ownership

Does the entity naturally own its internal business state?



### Lifecycle

Can the entity evolve independently throughout its lifecycle?



### Aggregate Root Suitability

Should external components communicate exclusively through this entity?



## Architectural Foundation

The Aggregate Design phase builds directly upon the approved Domain Entity Model and Value Object Model.

No new business concepts shall be introduced.

The purpose of this phase is solely to define business consistency boundaries within the existing Domain Model.











# 03.03.01 — Library Entry Aggregate

## Purpose

The Library Entry Aggregate represents the primary transactional consistency boundary within the Mosaica Domain Model.

Its purpose is to ensure that every User-owned business state associated with a cultural work remains internally consistent throughout the lifetime of the Library Entry.

All personal information recorded by the User is managed within this Aggregate.

No external component may directly modify internal business state without passing through the Library Entry Aggregate Root.



## Aggregate Root

Aggregate Root: Library Entry

Library Entry is the sole public entry point into the Aggregate.

All modifications to the Aggregate shall be performed through the Aggregate Root.

Internal Value Objects are not independently accessible.



## Business Responsibility

The Library Entry Aggregate is responsible for preserving the complete personal relationship between a User and a Content.

Its responsibilities include:

- personal evaluation,

- workflow progression,

- archive organization,

- historical records,

- personal memories.

Collectively these responsibilities define the complete Business State of a Library Entry.



## Aggregate Composition

The Aggregate consists of the following objects.

Library Entry (Aggregate Root)

│

├── Rating

├── Appreciation Level

├── Status

├── Archive Location

├── Favorite

├── Consumption Events

├── Consumption Counter

└── Personal Note

Every internal object belongs exclusively to the Aggregate.

None may exist independently.



## Consistency Boundary

The Library Entry Aggregate guarantees the consistency of every User-owned business state.

A business operation affecting one Value Object may require validation against another Value Object within the same Aggregate.

Examples include:

- Status transitions,

- Archive Location changes,

- Consumption history updates,

- Favorite designation,

- evaluation updates.

The Aggregate ensures these operations never produce an invalid business state.



## Business Invariants

The following business invariants shall always remain true within the Aggregate.

- Every Library Entry belongs to exactly one User.

- Every Library Entry references exactly one Content.

- Every Value Object belongs to the owning Library Entry.

- The Business State always represents one coherent User experience.

- Historical summaries remain consistent with recorded Consumption Events.

Business invariants are protected exclusively by the Aggregate Root.



## Ownership

The Aggregate owns every Value Object contained within it.

It does not own the referenced Content.

It does not own Collections or Tags.

Instead, those entities maintain references to the Library Entry where appropriate.



## Transaction Boundary

Every modification affecting the personal Business State shall occur within a single transaction.

Business operations that modify:

- Rating,

- Status,

- Favorite,

- Archive Location,

- Consumption Events,

- Personal Note,

are completed within the Library Entry Aggregate.

No additional Aggregate is required to maintain consistency.



## External References

The Library Entry Aggregate may reference:

- User

- Content

These references establish business relationships only.

Neither referenced Aggregate becomes part of the Library Entry Aggregate.



## Aggregate Lifecycle

The Aggregate is created when a User intentionally creates a Library Entry.

Throughout its lifetime the Aggregate evolves as the User interacts with the cultural work.

The Aggregate is removed only when the Library Entry is permanently deleted.

All contained Value Objects share the lifecycle of the Aggregate.



## Repository Boundary

Exactly one Repository shall manage the persistence of the Library Entry Aggregate.

External components shall never persist internal Value Objects independently.

This principle guarantees transactional consistency.



## Architectural Notes

The Library Entry Aggregate is the central Aggregate of the Mosaica Domain Model.

Nearly every User action ultimately modifies this Aggregate.

For this reason, it represents the primary transactional boundary of the application.

The Aggregate intentionally encapsulates every aspect of the User's personal relationship with a cultural work while maintaining complete independence from the shared metadata layer.



## Aggregate Classification

| Property | Value |
| --- | --- |
| Aggregate Root | Library Entry |
| Aggregate Type | Core Aggregate |
| Owner | User |
| Primary Responsibility | Personal Business State |
| Transaction Scope | Single Library Entry |
| Repository | LibraryEntryRepository |











# Aggregate Overview

User

│

owns   │

▼

┌──────────────────────────┐

│   Library Entry          │

│     Aggregate Root       │

├──────────────────────────┤

│ Rating                   │

│ Appreciation Level       │

│ Status                   │

│ Archive Location         │

│ Favorite                 │

│ Consumption Events       │

│ Consumption Counter      │

│ Personal Note            │

└──────────────────────────┘

│

references │

▼

Content







































# 03.03.02 — Content Aggregate

## Purpose

The Content Aggregate represents the transactional consistency boundary for all shared metadata describing a cultural work.

Its purpose is to ensure that objective metadata remains internally consistent while being shared safely across multiple Users and Library Entries.

The Content Aggregate protects the integrity of shared knowledge independently from User-owned business state.



## Aggregate Root

Aggregate Root: Content

Content is the sole public entry point into the Aggregate.

All modifications affecting shared metadata shall occur through the Content Aggregate Root.

Internal Value Objects remain inaccessible from outside the Aggregate.



## Business Responsibility

The Content Aggregate is responsible for preserving every objective characteristic of a cultural work.

Its responsibilities include:

- metadata integrity,

- media classification,

- contributor relationships,

- genre relationships,

- series relationships,

- universe relationships.

The Aggregate intentionally excludes every form of User-owned information.



## Aggregate Composition

Content (Aggregate Root)

│

├── Media Type

│

├── Person References

├── Genre References

├── Series Reference

└── Universe Reference

Media Type is owned by the Aggregate.

Person, Genre, Series and Universe are referenced by the Aggregate but are not contained within it.



## Consistency Boundary

The Content Aggregate guarantees the internal consistency of shared metadata.

Business operations may include:

- metadata updates,

- contributor assignment,

- genre assignment,

- series assignment,

- universe assignment,

- media classification.

These operations shall never affect User-owned business state.



## Business Invariants

The following business invariants shall always remain true.

- Every Content possesses exactly one Media Type.

- Every Content represents one cultural work.

- Every referenced Person exists.

- Every referenced Genre exists.

- Every referenced Series exists when assigned.

- Every referenced Universe exists when assigned.

The Aggregate Root protects these invariants.



## Ownership

The Content Aggregate owns:

- Media Type

The Content Aggregate references:

- Person

- Genre

- Series

- Universe

The Aggregate never owns Library Entries.



## Transaction Boundary

Every metadata modification shall be completed within the Content Aggregate.

Changes to Content shall never require simultaneous modification of Library Entry.

Likewise, User operations shall not modify the internal consistency of Content.



## External References

The Content Aggregate may be referenced by many Library Entry Aggregates.

The Content Aggregate never references Library Entry.

This establishes a one-way dependency from personal data toward shared metadata.



## Aggregate Lifecycle

The Aggregate begins when a new cultural work is introduced into the shared metadata layer.

It remains independent from every User throughout its lifetime.

The removal of a Library Entry never affects the existence of the Content Aggregate.



## Repository Boundary

Exactly one repository shall manage the persistence of the Content Aggregate.

Internal metadata shall never be persisted independently from the Aggregate Root.



## Architectural Notes

The Content Aggregate represents the shared knowledge layer of Mosaica.

Unlike the Library Entry Aggregate, it contains no User-owned information.

Its sole responsibility is maintaining objective metadata.

This separation enables unlimited Users to reference the same Content while preserving completely independent personal archives.



## Aggregate Classification

| Property | Value |
| --- | --- |
| Aggregate Root | Content |
| Aggregate Type | Core Aggregate |
| Owner | Mosaica System |
| Primary Responsibility | Shared Metadata |
| Transaction Scope | Single Content |
| Repository | ContentRepository |



























# 03.03.03 — Aggregate Relationship Model

## Purpose

The purpose of this section is to define how Aggregates interact with one another while preserving transactional independence and business consistency.

Aggregate relationships describe references between Aggregate Roots rather than ownership of internal objects.

This section establishes the official interaction model between Aggregates within the Mosaica Domain.



## Aggregate Interaction Principles

The following principles govern every relationship between Aggregates.

### Principle 1

Aggregates communicate only through Aggregate Roots.

Internal Entities and Value Objects shall never be referenced directly by another Aggregate.



### Principle 2

Each Aggregate protects its own transactional consistency.

Business operations spanning multiple Aggregates shall coordinate through the application layer rather than by expanding Aggregate boundaries.



### Principle 3

Aggregate references represent business relationships only.

They do not imply ownership.



### Principle 4

Each Aggregate evolves independently.

Changes within one Aggregate shall not require transactional modification of another Aggregate except where explicitly defined by application workflows.



# Aggregate Relationship Overview

The Mosaica Domain currently defines two Core Aggregates.

- Library Entry Aggregate

- Content Aggregate

These Aggregates represent separate business responsibilities while remaining connected through business references.



## Aggregate Dependency Model

User

│

│ owns

▼

┌──────────────────────┐

│ Library Entry        │

│ Aggregate            │

└──────────────────────┘

│

│ references

▼

┌──────────────────────┐

│ Content              │

│ Aggregate            │

└──────────────────────┘

The Library Entry Aggregate depends upon Content through a business reference.

The Content Aggregate remains completely independent of the Library Entry Aggregate.



## Library Entry → Content

### Relationship Type

Aggregate Reference



### Business Meaning

A Library Entry represents a User's personal relationship with exactly one Content.

The Aggregate stores only a reference to the Content Aggregate.

The Content Aggregate itself remains independent.



### Ownership

Library Entry does not own Content.

Content does not own Library Entry.

Ownership and reference are intentionally separated.



### Transactional Behavior

Creating, updating or deleting a Library Entry shall never require modification of the Content Aggregate.

Likewise, updating shared metadata within the Content Aggregate shall not modify the internal Business State of any Library Entry.

Each Aggregate maintains independent transactional consistency.



# Aggregate Independence

The independence of Aggregate boundaries enables the following architectural characteristics.

- independent repositories,

- independent transactions,

- simpler concurrency handling,

- reduced coupling,

- improved scalability.

These characteristics are considered essential to the long-term maintainability of the Mosaica Domain.



# Repository Boundaries

Each Aggregate shall be managed through its own Repository.

| Aggregate | Repository |
| --- | --- |
| Library Entry | LibraryEntryRepository |
| Content | ContentRepository |

Repositories shall never expose internal objects outside their Aggregate boundaries.



# Cross-Aggregate Communication

Cross-Aggregate communication shall follow the application workflow below.

Application Service

│

├──────────────┐

▼              ▼

LibraryEntryRepo   ContentRepo

│              │

▼              ▼

Library Entry      Content

Aggregate        Aggregate

Application Services coordinate business use cases.

Aggregates remain responsible only for protecting their own business consistency.



# Architectural Notes

Aggregate relationships within Mosaica are intentionally minimal.

Only business references exist between Aggregates.

This approach prevents large transactional boundaries while preserving clear ownership and responsibility throughout the Domain Model.

Future Aggregates shall follow the same interaction principles unless superseded by an approved Architecture Decision Record.



# Aggregate Relationship Summary

| Source Aggregate | Target Aggregate | Relationship |
| --- | --- | --- |
| Library Entry | Content | Reference |
| Content | Library Entry | None |



# Architectural Significance

The Aggregate Relationship Model completes the transactional architecture of the Mosaica Domain.

By limiting Aggregate interactions to explicit business references, the model preserves independent consistency boundaries while enabling collaboration through the application layer.

This separation establishes a clean foundation for Repository Design, Domain Services and API orchestration.













































# 03.03.04 — Aggregate Evaluation

## Purpose

The purpose of this section is to evaluate every remaining Domain Entity that was not selected as an Aggregate Root.

The existence of a Domain Entity does not automatically justify an Aggregate boundary.

This evaluation ensures that Aggregate boundaries remain minimal while preserving business consistency.



# Evaluation Criteria

Each Domain Entity has been evaluated according to the following criteria.

- Independent transactional consistency

- Business invariants

- Ownership of business state

- Aggregate Root suitability

- Transaction boundary requirements

Only entities satisfying these criteria qualify as Aggregate Roots.



# User

## Evaluation

The User entity represents identity, ownership and account information.

While the User owns Library Entries, it does not protect an independent transactional business state requiring its own Aggregate boundary.

Business operations involving personal archive management occur entirely within the Library Entry Aggregate.



## Decision

Aggregate Root: No



## Rationale

User establishes ownership rather than transactional consistency.

Its responsibilities do not require Aggregate-level protection.



# Collection

## Evaluation

Collection provides organizational grouping for Library Entries.

Its internal state remains simple and does not contain business invariants requiring transactional consistency.

Adding or removing Library Entries affects organizational references only.



## Decision

Aggregate Root: No



## Rationale

Collection represents organization rather than business consistency.

Maintaining a separate Aggregate would increase complexity without providing architectural benefit.



# Tag

## Evaluation

Tag enables flexible personal organization.

Tags contain minimal business state and do not protect transactional rules beyond their own descriptive information.



## Decision

Aggregate Root: No



## Rationale

Tags function as lightweight organizational entities.

Their responsibilities do not justify Aggregate boundaries.



# Person

## Evaluation

Person represents shared contributor metadata.

The entity contains descriptive information only.

Business consistency is protected by the Content Aggregate through references.



## Decision

Aggregate Root: No



## Rationale

Person is a reusable reference entity rather than a transactional boundary.



# Genre

## Evaluation

Genre provides standardized classification.

Its business state remains static and independent from User operations.



## Decision

Aggregate Root: No



## Rationale

Genre functions as shared reference metadata.

No Aggregate boundary is required.



# Series

## Evaluation

Series establishes structural relationships between Content entities.

Its responsibilities remain descriptive rather than transactional.



## Decision

Aggregate Root: No



## Rationale

Series contributes metadata relationships but does not manage independent business consistency.



# Universe

## Evaluation

Universe represents the highest level of fictional organization.

Its role remains structural and descriptive.

Business consistency is maintained by the Content Aggregate.



## Decision

Aggregate Root: No



## Rationale

Universe serves as shared reference metadata and therefore does not require Aggregate protection.



# Final Aggregate Inventory

The official Aggregate Roots of the Mosaica Domain are:

| Aggregate Root | Primary Responsibility |
| --- | --- |
| Library Entry | User-owned Business State |
| Content | Shared Metadata Consistency |

No additional Aggregate Roots are required within Version 1 of the Domain Model.



# Architectural Validation

The Aggregate Model satisfies the following architectural goals.

- Minimal Aggregate boundaries

- Clear transactional ownership

- Explicit responsibility separation

- Independent repositories

- Scalable domain structure

- Reduced coupling between business concepts

The current Aggregate Model is considered sufficient to support the functional scope defined for Version 1.



# Architectural Summary

Mosaica Domain



┌─────────────────────┐

│   Library Entry      │

│    Aggregate Root    │

└─────────────────────┘

│

│ references

▼

┌─────────────────────┐

│      Content         │

│   Aggregate Root     │

└─────────────────────┘

│

┌─────────────────┼──────────────────┐

▼                 ▼                  ▼

Person            Genre             Series

│

▼

Universe



User

│

├── owns Library Entries

├── owns Collections

└── owns Tags



# Architectural Conclusion

The Aggregate Design intentionally defines only two Aggregate Roots.

All remaining Domain Entities either provide ownership, organization or shared reference metadata.

Restricting Aggregate boundaries to Library Entry and Content minimizes transactional complexity while preserving clear business consistency throughout the domain.

This model establishes a stable architectural foundation for Repository Design, Database Specification and Application Services.



# 03.03 Architecture Review

## Review Objective

The purpose of this review is to validate that the Aggregate Design correctly defines transactional consistency boundaries within the Mosaica Domain.

The review confirms that Aggregate boundaries align with the approved Domain Entity Model, Value Object Model and Architecture Decision Records.



## Validation Results

### Aggregate Boundaries

Status: Approved

Only business concepts requiring transactional consistency have been modeled as Aggregate Roots.



### Aggregate Size

Status: Approved

Aggregate boundaries remain intentionally small.

No Aggregate contains responsibilities beyond its business consistency requirements.



### Ownership

Status: Approved

Ownership and transactional consistency remain clearly separated.



### Repository Design

Status: Approved

Each Aggregate maps naturally to a dedicated Repository.

No repository overlap has been identified.



### Scalability

Status: Approved

The Aggregate Model supports future expansion without requiring structural redesign.



### Architectural Consistency

Status: Approved

Aggregate Design remains fully consistent with:

- 03.01 Core Domain Entities

- 03.02 Value Objects

- ADR-001 Media Type Classification



# Approval Status

Module: 03.03 Aggregate Design

Architecture Review: Approved

Status: LOCKED

Future modifications to Aggregate boundaries shall be introduced only through Architecture Decision Records.



















# ADR-001 -Architecture Decision Records -Media Type Classification

## Status

Accepted



## Context

Throughout the Domain Model, business concepts have been classified as Domain Entities, Value Objects, Domain Primitives or Derived Concepts.

During the Value Object phase, the classification of Media Type required additional architectural evaluation.

At first glance, Media Type appears to be a simple descriptive attribute of Content.

However, further analysis revealed that Media Type influences multiple areas of business behavior throughout Mosaica.

This document records the official architectural decision regarding its classification.



## Problem Statement

Should Media Type be modeled as:

- a Domain Primitive, or

- a Value Object?

The answer affects the Domain Model, Aggregate Design, Database Specification and API Specification.



## Analysis

Media Type does not possess an independent identity.

Therefore, it cannot qualify as a Domain Entity.

However, Media Type is more than descriptive metadata.

Within the approved architecture, Media Type determines the business context in which a Content entity exists.

Different Media Types influence:

- applicable metadata,

- supported business workflows,

- archive behavior,

- statistical interpretation,

- filtering,

- search,

- recommendation logic,

- presentation throughout the application.

Media Type therefore carries business meaning beyond simple descriptive data.



## Decision

Media Type shall be modeled as a Value Object.

It represents a business concept rather than a primitive attribute.

Media Type belongs exclusively to the Content Domain Entity.

It possesses no independent identity.

Its business meaning is determined entirely by its value.



## Rationale

Modeling Media Type as a Value Object provides several architectural advantages.

It explicitly represents business semantics rather than implementation details.

It centralizes validation and business rules associated with supported media categories.

It prevents Media Type from becoming an unstructured primitive scattered throughout the codebase.

It provides a stable extension point for future business capabilities while preserving the simplicity of the Content entity.



## Consequences

### Positive

- clearer Domain Model,

- explicit business meaning,

- stronger Aggregate boundaries,

- improved API consistency,

- centralized validation,

- easier future extensibility.

### Trade-offs

The model introduces one additional Value Object.

However, the increased clarity significantly outweighs the minimal additional complexity.



## Ownership

Media Type belongs exclusively to the Content Domain Entity.

It cannot exist independently.

It cannot be shared outside the context of Content.



## Identity

Media Type possesses no independent identity.

Two Media Type Value Objects are considered equal when they represent the same media category.



## Architectural Classification

| Property | Value |
| --- | --- |
| Category | Value Object |
| Owner | Content |
| Independent Identity | No |
| Business Meaning | Media Classification |
| Shared Across Users | Yes |



## Architectural Impact

The official Value Object inventory is updated as follows.

### Library Entry Value Objects

- Rating

- Appreciation Level

- Status

- Archive Location

- Favorite

- Consumption Event

- Consumption Counter

- Personal Note

### Content Value Objects

- Media Type

This establishes the first Value Object owned by the Content entity.

Until this decision, every Value Object belonged to Library Entry.

Media Type introduces the concept that Value Objects may also exist within the shared metadata layer when they encapsulate meaningful business semantics.



## Decision Summary

Media Type is officially classified as a Value Object.

This decision becomes part of the permanent Domain Model and shall remain valid unless superseded by a future approved Architecture Decision Record.
