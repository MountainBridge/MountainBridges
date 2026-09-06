# Banking Platform: Payments, Fraud, Loans, and the Consistency Problem

> **30-second read:** A banking platform is not one transaction API. It is a set of tightly coupled workflows where money movement, risk, identity, ledger correctness, asynchronous processing, customer experience, and auditability must agree. The safest design separates concerns while preserving a traceable transaction state.

> **2-minute read:** Imagine a platform handling card payments, account transfers, fraud checks, and personal-loan applications. A payment must be idempotent, authorized, fraud-scored, recorded in a reliable ledger, reconciled, and explainable after the fact. A loan application adds document ingestion, credit policy, model scoring, fairness controls, manual review, and lifecycle state. The common pattern is not “microservices”; it is explicit state machines, durable boundaries, immutable evidence, asynchronous work where latency allows, and deterministic controls around probabilistic decisions.

## Product to build

A reference banking platform with four connected surfaces:

```text
Customer app
   ├── Pay / transfer money
   ├── View ledger + transaction history
   ├── Apply for a loan
   └── Understand a decision

Operations console
   ├── Investigate transactions
   ├── Review fraud alerts
   ├── Review loan exceptions
   └── Reconcile settlement
```

This is a **portfolio reference architecture**, not a claim of production deployment in banking.

## Core problem

The hardest requirement is consistency across systems that have different timing and failure characteristics.

A payment can be accepted by one system, delayed by another, rejected by a fraud engine, retried by a client, and later reconciled against an external settlement record. A loan decision may combine deterministic policy, statistical scoring, documents, and human review.

The system therefore needs a source of truth for state and an evidence trail for every consequential transition.

## Architecture

```text
                    ┌───────────────┐
                    │  Web / Mobile │
                    └───────┬───────┘
                            ↓
                    API / Identity
                            ↓
             ┌──────────────┴──────────────┐
             │                             │
        Payment domain                Lending domain
             │                             │
     ┌───────┼────────┐             ┌──────┼─────────┐
     ↓       ↓        ↓             ↓      ↓         ↓
 Ledger   Risk     Payment       Application Credit  Docs
 service  engine   orchestration   state     policy  service
     │       │        │             │
     └───────┴────────┴──────┐      └──────┴─────────┘
                             ↓
                         Event bus
                             ↓
                 Audit / reconciliation / analytics
```

## Recommended stack and why

| Layer | Technology | Why |
|---|---|---|
| Web app | React + TypeScript | Strong component model and typed contracts for complex workflows |
| API | Node.js + TypeScript / NestJS | Fast iteration, explicit modules, strong DTO validation |
| Transaction store | PostgreSQL | ACID transactions, constraints, relational integrity and mature operational tooling |
| Cache / idempotency | Redis | Low-latency duplicate-request protection and short-lived workflow state |
| Events | Kafka | Durable event streams for payment lifecycle, risk events and downstream consumers |
| Search | OpenSearch | Operational investigation across transactions, alerts and audit metadata |
| Object storage | S3-compatible store | Documents, statements and immutable evidence objects |
| AI/ML | Python services | Appropriate ecosystem for model training, scoring and evaluation |
| Runtime | Docker + Kubernetes | Isolated services, repeatable deployment and horizontal scaling |
| Observability | OpenTelemetry + Prometheus/Grafana | Correlate requests, events, traces and operational health |

The point is not that this exact stack is mandatory. The technology should be selected because its failure and consistency properties fit the problem.

## Payment workflow

```text
Create payment
      ↓
Idempotency check
      ↓
Validate account + authorization
      ↓
Risk / fraud decision
      ↓
Reserve / ledger transition
      ↓
Publish payment event
      ↓
External processing / settlement
      ↓
Reconciliation
      ↓
Final customer-visible state
```

### Why idempotency is first-class

Clients retry. Networks time out. Gateways repeat messages. A payment endpoint that creates a new transfer every time the caller retries is unsafe.

The API should accept an idempotency key, persist the first resulting state, and return the same semantic result for safe retries.

## Ledger boundary

Do not make a mutable “balance” field the only financial truth.

Prefer an append-oriented transaction model:

```text
Account A  ── debit ──→ Transaction ── credit ──→ Account B
                         │
                         ├── correlation id
                         ├── idempotency key
                         ├── timestamps
                         └── audit metadata
```

A derived balance can be optimized for reads, but the transaction history should remain reconstructable.

## Fraud: rules + models + evidence

Fraud is relational and temporal. A single transaction may be normal in isolation but suspicious when viewed with the account, merchant, device, location and surrounding transactions.

Recent research explores heterogeneous transaction graphs containing users, merchants, banks and transactions, plus temporal dynamics, because these relationships can expose patterns that isolated transaction features miss.

Reference: [Detecting Credit Card Fraud via Heterogeneous Graph Neural Networks with Graph Attention — alphaXiv](https://www.alphaxiv.org/abs/2504.08183)

A practical architecture is:

```text
Transaction
   ↓
Rules ───────────────┐
                     ├──→ Risk decision ──→ approve / review / decline
Graph / ML model ────┘
                     ↓
                 Evidence
```

Keep the final action policy outside the model so a model error cannot silently bypass authorization rules.

## Loans: deterministic policy around probabilistic scoring

A lending workflow should distinguish:

```text
Eligibility rules
      ↓
Document / identity checks
      ↓
Credit features
      ↓
Risk model
      ↓
Fairness / policy checks
      ↓
Decision
   ↙       ↓        ↘
approve   review    decline
```

For a portfolio implementation, a simple logistic-regression baseline is valuable because it provides a strong explainability and calibration reference before introducing more complex models.

Research on credit scoring highlights the tension among predictive performance, fairness and profitability, while other work documents the need for fairness, reject inference and explainability in credit scoring systems.

References:
- [Classification based credit risk analysis: The case of Lending Club — alphaXiv](https://www.alphaxiv.org/abs/2210.05136)
- [Algorithmic decision making methods for fair credit scoring — alphaXiv](https://www.alphaxiv.org/abs/2209.07912)
- [Best Practices for Responsible Machine Learning in Credit Scoring — alphaXiv](https://www.alphaxiv.org/overview/2409.20536)

## Failure modes to implement

| Failure | Design response |
|---|---|
| Client retry | Idempotency key + durable request record |
| Service timeout | Explicit pending state; bounded retry |
| Duplicate event | Consumer deduplication |
| Fraud model unavailable | Policy-defined fallback, not silent approval |
| Ledger write succeeds but event publish fails | Transactional outbox |
| External settlement disagrees | Reconciliation workflow |
| Loan model is uncertain | Human review state |
| Model changes behaviour | Versioned model + regression suite |
| Sensitive data leaks into logs | Structured redaction + field-level policy |

## Patterns this case teaches

- Idempotency
- State machines
- Transactional outbox
- Event-driven integration
- Saga / compensation
- Ledger-as-source-of-truth
- Reconciliation
- Risk-based routing
- Human-in-the-loop
- Model versioning
- Explainability and audit evidence
- Distributed tracing
- Data minimization

## What maps back to the casebook

[Failure Modes Before Features](failure-modes-before-features.md) explains why these failures should drive architecture.

[Architecture Decisions That Survive](../articles/architecture-decisions-that-survive.md) captures the decision records for boundaries, consistency and failure handling.

[Making AI Systems Production-Ready](../articles/ai-production-readiness.md) covers model boundaries, verification, uncertainty and rollback.

[LLM Evaluation Is a Systems Problem](../articles/llm-evaluation-systems.md) supplies the evaluation model for model-assisted fraud or loan workflows.

[Scaling Technical Knowledge](../patterns/scaling-technical-knowledge.md) supplies the reusable-knowledge approach for operating the platform across teams.

## The implementation goal

Build the smallest vertical slice that can execute:

**create payment → authorize → risk check → ledger transition → event → reconciliation → customer-visible status**

Then add loan origination as a second vertical slice.

The app is valuable when the code makes the reasoning visible—not when it merely has many services.
