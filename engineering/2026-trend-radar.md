# 2026 Engineering Trend Radar

This document keeps the casebook and companion repositories aligned with current engineering practice. It is a portfolio engineering standard, not a claim that every technology is required in production.

**Source map:** [Engineering Bibliography](./bibliography.md)

## AI systems: current baseline

For agentic/LLM projects, prefer demonstrating:

- structured model outputs and explicit schemas
- tool calling and protocol-based integrations such as MCP where appropriate
- bounded agent loops with explicit termination and retry policies
- least-privilege tool permissions and human approval for irreversible actions
- offline evaluation datasets and regression gates
- trace-level observability for model, tool and retrieval steps
- production feedback feeding new evaluation cases
- cost, latency and token/use telemetry
- security controls at the tool/data boundary

The portfolio should not treat "RAG demo" or "prompt engineering" alone as a production-ready AI project.

## Software engineering baseline

Flagship repositories should demonstrate, where relevant:

- typed APIs and explicit contracts
- automated unit/integration/e2e tests
- CI checks on every change
- dependency and secret hygiene
- containerized local execution
- reproducible seed/test data
- health/readiness checks
- structured logs and useful failure diagnostics
- API documentation (OpenAPI when applicable)
- architecture decision records for meaningful trade-offs
- deliberate failure scenarios
- a clear path to run the project online or locally

## Event-driven systems

Kafka projects should demonstrate more than producing and consuming a message. Cover:

- event schemas and compatibility
- consumer groups and partitioning
- ordering assumptions
- idempotent consumers
- retries and dead-letter handling
- replay/backfill considerations
- observability and lag
- failure injection
- delivery semantics and explicit trade-offs

## Data systems

SQL and MongoDB projects should demonstrate the difference between data models and access patterns rather than simply CRUD:

- transaction boundaries and isolation for SQL
- indexing and query plans
- pagination and concurrency
- migrations and rollback strategy
- constraints and invariants
- MongoDB document modeling and index selection
- consistency/read concerns where relevant
- aggregation pipelines
- test fixtures and reproducible data

## Frontend / developer experience

Modern frontend projects should demonstrate:

- clear component/module boundaries
- accessible UI
- typed API contracts
- error/loading/empty states
- meaningful automated tests
- performance considerations
- secure authentication/session handling where applicable
- observability for important user journeys

## Research-to-implementation loop

For research-driven projects:

```text
research signal
  -> choose a concrete engineering question
  -> build the smallest reproducible implementation
  -> benchmark against a baseline
  -> add failure cases
  -> evaluate
  -> document trade-offs
  -> publish runnable artifact
```

Research discovery sources include alphaXiv, arXiv, Hugging Face Papers and primary engineering documentation. A paper is a signal for investigation, not evidence that a technique should automatically be adopted.

The bibliography captures dated sources behind the current radar so articles can distinguish market signals, primary specifications and research evidence.

## Portfolio rule

Do not rewrite historical repositories to pretend they were originally built with today's standards. Preserve the original context and add a modernization path, companion implementation, benchmark, or case study that demonstrates what would change today.
