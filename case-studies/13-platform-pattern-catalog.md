# Platform Problem Pattern Catalog

The casebook is intended to grow into a reusable library of engineering strategies. It does not claim to enumerate literally every problem in software; it establishes a taxonomy so new problems can be mapped to known failure modes and solution patterns instead of starting from zero.

## Platform domains

| Domain | Representative app | Core problems | Primary patterns |
|---|---|---|---|
| Talent / assessment | Assessment + coding challenge platform | realistic tasks, sandboxing, quality, integrity, evaluation | reproducibility, multi-signal scoring, adversarial testing, rubric evaluation |
| Banking | Payments + lending platform | money movement, fraud, credit decisions, reconciliation | idempotency, ledger, outbox, saga, policy/model separation, audit |
| Retail | Commerce + recommendation platform | search, inventory, pricing, checkout, personalization | reservations, projections, caching, ranking, experimentation |
| Operations | Dispatch + workforce platform | assignment, changing state, constraints, routing | state machines, matching, optimization, re-planning, graceful degradation |
| Music | Streaming + discovery platform | personalization, cold start, freshness, feedback loops | candidate generation, ranking, exploration, grounding, online evaluation |
| Medical | EHR + clinical workflow platform | interoperability, privacy, evidence, high-stakes actions | FHIR boundaries, provenance, authorization, human approval, long-horizon evaluation |

## Universal problem map

### 1. State changes across unreliable boundaries

**Use when:** payment, order, assignment, booking or clinical action spans multiple systems.

Patterns:
- state machine
- idempotent command
- transactional outbox
- event consumer deduplication
- saga / compensation
- reconciliation

### 2. A read model cannot be the source of truth

**Use when:** search, cache, recommendation or analytics needs low-latency derived data.

Patterns:
- authoritative write model
- event-driven projection
- cache invalidation strategy
- replayable events
- freshness metadata

### 3. A probabilistic component influences a consequential decision

**Use when:** fraud, credit, recommendations, AI assistants or triage drive actions.

Patterns:
- policy boundary
- model versioning
- deterministic checks
- evidence capture
- calibrated evaluation
- human escalation

### 4. The environment changes while the decision is being computed

**Use when:** logistics, dispatch, marketplace matching, inventory or dynamic allocation.

Patterns:
- short-lived planning snapshots
- optimistic concurrency
- re-planning
- fallback heuristics
- event-driven state refresh

### 5. More users create more complexity than documentation can absorb

**Use when:** platforms, APIs and internal systems grow across teams.

Patterns:
- golden path
- service catalog
- docs-as-code
- self-service templates
- ownership metadata
- feedback loop

### 6. AI changes behaviour without changing application code

**Use when:** model, prompt, retrieval, tool schema or context changes.

Patterns:
- behaviour-level regression
- scenario corpus
- evaluation rubric
- deterministic + semantic checks
- release gate
- evidence traceability

### 7. A metric improves while the real outcome gets worse

**Use when:** recommender CTR, matching rate, throughput, model accuracy or assessment scores are being optimized.

Patterns:
- north-star + guardrail metrics
- cohort analysis
- offline + online validation
- interference-aware experiments
- long-term feedback analysis

## Casebook rule

Every new platform case should identify:

**problem → users → constraints → state → failure modes → decision boundary → architecture → implementation → evaluation → metrics → feedback**

Then link the case back to this catalog so one solved problem teaches a reusable pattern rather than remaining an isolated story.
