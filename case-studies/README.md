# Engineering Casebook

These are the core portfolio artifacts. Each starts with a real engineering problem and models a realistic product or platform around it.

## Personal front door

The casebook supports a personal technical narrative rather than a title-driven pitch. Start with [Personal Positioning & 30/60/90 Pitches](../strategy/personal-pitch.md) to understand the story, then use the platform cases as evidence.

## Platform cases

### 01 — Information Fragments
**Platform:** service catalog / internal engineering platform

A growing organization has services, APIs, documentation and experts everywhere, but engineers still cannot quickly determine what to use or who owns it.

**Reference:** Spotify / Backstage.

[Read the case](01-when-information-fragments.md)

### 02 — A Paved Road Without a Prison
**Platform:** internal platform / golden-path system

Teams need secure, observable and supportable defaults without turning standards into an architecture bottleneck.

**Reference:** Google Cloud Golden Paths; Spotify.

[Read the case](02-golden-paths-without-lock-in.md)

### 03 — When Contribution Creates Fragmentation
**Platform:** shared CLI / platform tooling

A platform grows through contributions until individually reasonable decisions produce an inconsistent whole.

**Reference:** Shopify CLI.

[Read the case](03-platform-consistency-at-scale.md)

### 04 — When AI Looks Right but Is Wrong
**Platform:** AI assistant / agent evaluation system

A generated answer can be fluent and plausible while still being incorrect, ungrounded or unsafe.

**Reference:** RAG, LLM-as-a-Judge and agent evaluation research.

[Read the case](04-ai-that-looks-right.md)

### 05 — When Regression Becomes a Knowledge Problem
**Platform:** enterprise regression and change-impact system

A large test suite can still miss important regressions when reasoning about impact is distributed across source code, architecture, requirements and people.

**Reference:** generalized enterprise pattern.

[Read the case](05-regression-as-a-knowledge-system.md)

### 06 — Building a Challenge-Quality System
**Platform:** coding assessment / technical challenge platform

Scale realistic engineering challenges without losing quality, reproducibility, scoring integrity or contributor throughput.

**Reference:** HackerRank Projects Questions and 2026 Orchestrate.

[Read the case](06-building-a-challenge-quality-system.md)

### 07 — Banking Platform: Payments, Fraud and Loans
**Platform:** payments + lending + operations

Coordinate money movement, fraud, credit decisions, ledger state, reconciliation, auditability and human review.

**Reference:** banking fraud/credit research and financial transaction systems.

[Read the case](07-banking-platform.md)

### 08 — Retail Platform: Search, Inventory and Personalization
**Platform:** commerce + recommendation

Coordinate catalog, search, pricing, inventory, checkout, fulfillment and recommender feedback loops.

**Reference:** retail/recommender research and agentic shopping systems.

[Read the case](08-retail-platform.md)

### 09 — Operations Platform: Dispatch and Workforce
**Platform:** field service / delivery / operations control plane

Turn continuously changing work, worker availability and constraints into executable assignments and re-plans.

**Reference:** workforce scheduling, routing and matching research.

[Read the case](09-operations-platform.md)

### 10 — Music Platform: Discovery and Recommendation
**Platform:** streaming + personalized discovery

Balance familiarity, discovery, freshness, cold start, ranking quality and long-term feedback effects.

**Reference:** Deezer, YouTube Music, Yandex Music and NetEase Cloud Music research.

[Read the case](10-music-platform.md)

### 11 — Medical Platform: EHR and Clinical Workflows
**Platform:** interoperable EHR + clinical assistant

Coordinate patient data, FHIR resources, evidence retrieval, privacy, workflow actions and human approvals.

**Reference:** PhysicianBench, HealthAgentBench, ClinEnv, Medi-Gemma and FHIR research.

[Read the case](11-medical-platform.md)

### 12 — Assessment Platform: Realistic Work and Trustworthy Evaluation
**Platform:** project-based coding assessment

Build realistic multi-file environments, evaluate multiple signals, handle adversarial behaviour and preserve evidence for the final decision.

**Reference:** HackerRank project-question and Orchestrate architectures.

[Read the case](12-assessment-platform.md)

### 13 — Event-Streaming Platform: Video, Live Events and Playback
**Platform:** large-scale streaming / media platform

Ingest playback events, process streams, maintain derived state, support replay and recommendation, and remain reliable during traffic spikes and live events.

**Reference:** Netflix, YouTube and Prime Video engineering patterns.

[Read the case](13-event-streaming-platform.md)

## Cross-platform pattern catalog

[Read the Platform Problem Pattern Catalog](13-platform-pattern-catalog.md)

The goal is to accumulate reusable strategies across domains rather than write isolated essays. A new case should map back to the same underlying problem patterns wherever possible.

## Case-study template

Every case should make these dimensions visible:

**Problem → users → context → constraints → why obvious approaches fail → state model → architecture → technology choices → implementation pattern → trade-offs → failure modes → validation → measurement → reusable lesson**

## Technology documentation standard

Each app/case must explicitly document:

- what technologies are used
- what responsibility each technology owns
- why that technology is appropriate
- what alternative was rejected
- what failure mode it protects against
- what changes for production

## Evidence standard

Every case should include:

**Portfolio design** — the proposed/generalized system.

**Reference case** — a public system or external engineering example.

**Research** — primary paper, benchmark, first-party engineering write-up or mature pattern.

External examples are not presented as personal work.
