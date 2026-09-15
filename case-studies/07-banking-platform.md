# Banking Platform: Payments, Fraud, Loans, and the Consistency Problem

> **30-second read:** A banking platform is not one transaction API. It is a set of tightly coupled workflows where money movement, risk, identity, ledger correctness, asynchronous processing, customer experience, and auditability must agree. The interesting engineering problem is what happens when they do not.

> **2-minute read:** A customer presses **Pay**. The screen spins. The payment service has accepted the request, but the fraud check is slow and the downstream processor has not responded. The customer presses **Pay** again. Now we have a simple product interaction that has become a distributed-systems problem: did we create one payment or two, where is the authoritative state, what can safely be retried, and what should the customer see? Now imagine the same platform handling a loan application, where a document check, deterministic policy, a risk model, and a human reviewer may all contribute to one decision. The architecture has to make those states explicit, preserve evidence, and make failure recoverable rather than hiding it behind a successful-looking API response.

## Start with a moment, not a service diagram

Consider this reference journey.

It is 9:07 AM. A customer initiates a $500 transfer. The request reaches the payment API and the transaction is accepted. Before the customer receives a response, the network times out.

From the customer's perspective, nothing happened.

So they tap **Pay** again.

The second request reaches the system. If the API treats every request as a new command, the customer may now have two transfers. If the first transaction succeeded but its event was not published, downstream systems may not know what happened. If the fraud service is unavailable, should the payment wait, fail, or follow a defined fallback policy? And if an external settlement later disagrees with the internal record, who resolves the difference?

None of these are edge cases that can be bolted on after the feature is built. They determine what the feature **is**.

That leads to the central design question for this platform:

> **What must remain true when the happy path breaks?**

The answer drives the architecture: durable transaction state, idempotency, explicit workflow states, reliable event publication, reconciliation, observable failure, and an evidence trail for consequential decisions.

This is a **portfolio reference architecture**, not a claim of production deployment in banking.

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

The platform is deliberately designed around the journeys and their failure modes rather than around a collection of microservices.

## The core problem: one journey, many truths

The payment example exposes the real difficulty. Different components can observe the same business event at different times and with different outcomes.

A payment can be accepted by one system, delayed by another, rejected by a fraud engine, retried by a client, and later reconciled against an external settlement record. A loan decision may combine deterministic policy, statistical scoring, documents, and human review.

The system therefore needs:

- a clear source of truth for business state
- explicit states for work that is still pending
- durable evidence for consequential transitions
- controlled boundaries around probabilistic decisions
- recovery paths for partial failure
- reconciliation when internal and external records disagree

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

The service boundaries are a consequence of the workflow boundaries. For example, the ledger is not simply another database table: it is the financial source of truth. Risk is not the owner of authorization: it produces evidence that a policy layer can use. The event bus is not the source of payment truth: it distributes durable state changes to downstream consumers.

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

The 9:07 AM timeout is the reason this exists.

Clients retry. Networks time out. Gateways repeat messages. A payment endpoint that creates a new transfer every time the caller retries is unsafe.

The API should accept an idempotency key, persist the first resulting state, and return the same semantic result for safe retries.

The important design question is not merely **“do we have Redis?”** It is **“what business operation does the idempotency record protect, how long does it remain authoritative, and what happens when the original request is still pending?”**

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

This also gives operations a way to answer the uncomfortable question after a failure: **what actually happened?**

## When the event doesn't leave the room

Suppose the ledger transition succeeds and the process crashes before the payment event reaches Kafka.

The customer-facing transaction exists. The downstream fraud, notification, analytics, or reconciliation consumer may know nothing about it.

That is why the payment state change and its outgoing event need a reliable handoff, such as a transactional outbox:

```text
Database transaction
   ├── payment state = AUTHORIZED
   └── outbox event = PAYMENT_AUTHORIZED
                    ↓
              Event publisher
                    ↓
                  Kafka
```

Now recovery is a replay problem rather than a detective story.

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

Now take the same idea into lending.

A customer submits a loan application. The system has documents, identity information, eligibility rules, credit features, a risk score, and potentially a human reviewer. A model can provide useful evidence, but the model should not become the invisible owner of the decision.

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

[Failure Modes Before Features](../articles/failure-modes-before-features.md) explains why failure scenarios should drive architecture.

[Architecture Decisions That Survive](../articles/architecture-decisions-that-survive.md) captures the decision records for boundaries, consistency and failure handling.

[Making AI Systems Production-Ready](../articles/ai-production-readiness.md) covers model boundaries, verification, uncertainty and rollback.

[LLM Evaluation Is a Systems Problem](../articles/llm-evaluation-systems.md) supplies the evaluation model for model-assisted fraud or loan workflows.

[Scaling Technical Knowledge](../patterns/scaling-technical-knowledge.md) supplies the reusable-knowledge approach for operating the platform across teams.

## The implementation goal

Build the smallest vertical slice that can execute:

**create payment → authorize → risk check → ledger transition → event → reconciliation → customer-visible status**

Then deliberately break it:

**timeout → retry → duplicate request → event-publish failure → recovery → reconciliation**

Then add loan origination as a second vertical slice.

The app is valuable when the code makes the reasoning visible—not when it merely has many services.
