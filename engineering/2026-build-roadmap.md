# 2026 Build Roadmap

## Objective

Turn the casebook into a living engineering portfolio that tracks current market standards without rewriting history.

## Priority 1 — Event streaming

Build a Kafka reference platform covering:

- event schemas and compatibility
- partitioning and consumer groups
- ordering assumptions
- idempotent consumers
- retries and dead-letter handling
- replay/backfill considerations
- consumer lag and tracing
- deliberate broker/consumer failure scenarios

## Priority 2 — Data engineering labs

### SQL

Use PostgreSQL to demonstrate:

- relational modeling and constraints
- migrations and rollback
- transaction boundaries and isolation
- indexes and query plans
- concurrency behavior
- pagination
- API integration and tests

### MongoDB

Demonstrate:

- document modeling from access patterns
- compound indexes
- aggregation pipelines
- pagination
- validation
- consistency/read trade-offs
- API integration and tests

## Priority 3 — AI evaluation / agent engineering

Build a reference system that demonstrates:

- structured outputs
- tool calling and MCP where useful
- bounded agent loops
- scoped permissions
- offline evaluation datasets
- regression gates
- trace-level observability
- production feedback becoming new eval cases
- cost/latency telemetry

This is the portfolio's strongest differentiator because it connects engineering, quality, context engineering and developer experience.

## Priority 4 — Existing repository audit

| Repository | Next action |
|---|---|
| `MountainBridges` | keep as flagship casebook; continuously update research and runnable links |
| `Basic-MFE` | audit source; create explicit historical-vs-modern comparison |
| `Angular-sse` | audit source; modernize the companion implementation rather than rewriting history |
| `Angular-kickstart` | preserve historical version; document modernization path |
| `devconnector` | use as MongoDB/API modernization candidate |
| `shopping-cart` | audit and use as retail journey candidate if source supports it |
| `portfolio` | align presentation with the engineering casebook |
| `DSA` | keep as supporting evidence, not flagship |
| small games/demos | keep only as historical evidence unless expanded into a meaningful engineering case |

## Execution standard

Every flagship implementation should have:

1. README with architecture and trade-offs.
2. Working vertical slice.
3. Automated tests.
4. Deliberate failure cases.
5. Observability.
6. Deterministic seed/test data.
7. One-command local execution.
8. Online execution path when safe/practical.
9. Research/evidence notes.
10. A short explanation of what would change before production.

## Research loop

```text
alphaXiv / arXiv / Hugging Face / primary docs
                ↓
         trend or technique
                ↓
        concrete engineering question
                ↓
          runnable POC
                ↓
       baseline + benchmark
                ↓
        failure + evaluation
                ↓
        architecture write-up
                ↓
          portfolio evidence
```

## 2026 market signals being tracked

- agentic systems and longer-running workflows
- MCP and protocol-based tool integration
- evals + regression gates
- production agent observability
- security and least-privilege tool access
- model routing and inference economics
- event-driven architecture
- typed contracts and API-first design
- reproducible engineering environments
