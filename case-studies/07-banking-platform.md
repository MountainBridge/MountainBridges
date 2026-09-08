# Banking Platform: Payments, Fraud, Loans, and the Consistency Problem

> **30-second read:** A banking platform is not one transaction API. It is a set of tightly coupled workflows where money movement, risk, identity, ledger correctness, asynchronous processing, customer experience, and auditability must agree. The safest design separates concerns while preserving a traceable transaction state.

> **2-minute read:** Imagine a platform handling card payments, account transfers, fraud checks, and personal-loan applications. A payment must be idempotent, authorized, fraud-scored, recorded in a reliable ledger, reconciled, and explainable after the fact. A loan application adds document ingestion, credit policy, model scoring, fairness controls, manual review, and lifecycle state. The common architectural problem is not whether the system uses “microservices.” It is whether the chosen boundaries preserve state, consistency, failure isolation, evidence, and ownership. Those boundaries can be implemented with microservices, a modular monolith, or a smaller set of domain services depending on scale and organizational needs.

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
                         Event bus / queue
                             ↓
                 Audit / reconciliation / analytics
```

The diagram is a **logical architecture**, not a prescription to deploy every box as a separate service. A portfolio implementation should begin with the smallest deployable boundary that preserves the required invariants, then split components only when independent scaling, ownership, deployment, security or failure isolation justifies the operational cost.

## Recommended stack and why

| Layer | Reference choice | Why | If this is not the right choice |
|---|---|---|---|
| Web app | React + TypeScript | Typed contracts and a strong component model for complex workflows | Angular, Vue, or another typed frontend when the organization already has that ecosystem |
| API | Node.js + TypeScript / NestJS | Fast iteration, explicit modules and DTO validation | Java/Spring, Go, .NET, or a modular monolith when operational/runtime requirements favor them |
| Transaction store | PostgreSQL | ACID transactions, constraints, relational integrity and mature operational tooling | Another relational database when its operational characteristics fit; a NoSQL store only where access patterns and consistency requirements justify it |
| Cache / idempotency | Redis | Low-latency duplicate-request protection and short-lived state | Database-backed idempotency records are often sufficient for a smaller system |
| Events | Kafka **when durable streams/replay/high-throughput fan-out are required** | Durable event streams for lifecycle events, risk signals and downstream consumers | SQS/SNS, Google Pub/Sub, Azure Service Bus, RabbitMQ, NATS, a database outbox plus a queue, or synchronous APIs when the workload does not require Kafka's capabilities |
| Search | OpenSearch | Operational investigation across transactions, alerts and audit metadata | PostgreSQL indexes/full-text search or another search engine when search volume/shape does not justify a separate system |
| Object storage | S3-compatible store | Documents, statements and evidence objects | Cloud/provider-native object storage or a database for genuinely small objects |
| AI/ML | Python services | Strong ecosystem for model training, scoring and evaluation | JVM/Go/.NET model serving or managed inference when operational constraints favor them |
| Runtime | Docker + Kubernetes **only when the operational scale warrants it** | Repeatable packaging and orchestration at multi-service scale | Managed containers, serverless, VMs or a simpler deployment platform for smaller systems |
| Observability | OpenTelemetry + Prometheus/Grafana | Correlate requests, events, traces and operational health | Provider-native telemetry or another standards-compatible stack |

The point is not that this exact stack is mandatory. The technology should be selected because its failure, consistency, scale, ownership and operational properties fit the problem.

## What if we do NOT use microservices?

A banking platform does not become safe because every domain is deployed independently. A **modular monolith** can be the better starting point when the team is small, transaction boundaries are tightly coupled, deployment independence is not yet valuable, or operational complexity would outweigh the benefit of distribution.

A practical progression is:

```text
Modular monolith
      ↓
Domain modules + explicit contracts
      ↓
Measure scaling / ownership / deployment pressure
      ↓
Extract only the boundaries that earn independence
      ↓
Services where independent deployment or failure isolation is valuable
```

This is consistent with the trade-off visible in production banking engineering: Monzo publicly describes thousands of microservices, but also describes the complexity they create, including distributed call graphs and migration/developer-experience challenges. Their architecture is an example of where microservices can make sense at scale, not proof that every banking platform should start there. [Monzo: redefining our microservice development process](https://monzo.com/blog/2022/06/24/redefining-our-microservice-development-process), [Monzo: migrations across 2,800 microservices](https://monzo.com/blog/how-we-run-migrations-across-2800-microservices).

**Decision rule:** choose the smallest boundary that preserves the business invariant and gives the team a meaningful operational benefit. Do not create a network hop merely to create a service.

## What if we do NOT use Kafka?

Kafka is useful when we need durable event streams, replay, multiple independent consumers, high throughput, partitioned processing, or a durable event history. It is not the default answer to every asynchronous workflow.

Use a simpler mechanism when the requirement is simpler:

| Requirement | Prefer | Why |
|---|---|---|
| Request/response with immediate result | REST/gRPC | Lowest conceptual and operational overhead |
| Background job with retry | Queue such as SQS, RabbitMQ, NATS or a managed cloud queue | Queue semantics are often simpler than a distributed log |
| Database change must reliably trigger work | Transactional outbox + queue/CDC | Solves the database/event dual-write problem without requiring Kafka |
| Small pub/sub workload | Managed pub/sub/event bus | Avoid operating a distributed log when replay/throughput requirements are modest |
| Durable event stream + many consumers + replay | Kafka | Strong fit for long-lived, high-throughput event streams |
| Event history is itself the system of record | Event store / event-sourcing design | Select explicitly for the domain rather than assuming Kafka equals event sourcing |

Production evidence supports this distinction. Monzo originally used NSQ and adopted Kafka because durability was important, then built a queue abstraction on top of Kafka because most of its workloads did **not** require strict ordering. It reports more than 400 services using that abstraction and more than 2,500 Kafka topics in the 2024 article. [Monzo: How we built a queue on top of Kafka](https://monzo.com/blog/how-we-built-a-queue-on-top-of-kafka)

AWS's transactional-outbox guidance also shows an alternative architecture: write the business record and outbox event in one database transaction, then publish the event to a queue; CDC can be another option. [AWS Prescriptive Guidance: Transactional outbox](https://docs.aws.amazon.com/en_en/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html)

**Decision rule:** choose Kafka because the workload needs Kafka's properties—not because “event-driven” sounds more modern.

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

This is not merely a portfolio convention. Stripe's current API documentation explicitly uses idempotency keys to make retries safe and describes retaining the first request's result for subsequent identical retries. [Stripe API: Idempotent requests](https://docs.stripe.com/api/idempotent_requests)

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

Research on heterogeneous transaction graphs supports modelling relationships among users, merchants, banks and transactions, including temporal behaviour, because fraud signals can be distributed across connected entities rather than isolated transaction features.

Reference research: [Detecting Credit Card Fraud via Heterogeneous Graph Neural Networks with Graph Attention — paper](https://arxiv.org/abs/2504.08183)

Current banking evidence points in the same direction: HSBC says its financial-crime systems combine customer and transaction data from across the Group and external sources with machine learning and other advanced analytics; it reports monitoring approximately 980 million transactions per month on average. [HSBC: Technology and financial crime](https://www.hsbc.com/who-we-are/esg-and-responsible-business/fighting-financial-crime/technology)

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

For a portfolio implementation, start with a logistic-regression baseline as an interpretable reference model before introducing more complex scoring approaches. The goal is to establish a measurable baseline for predictive performance, calibration and explainability rather than assuming a more complex model is automatically better.

Academic work on credit scoring explicitly studies the trade-offs among predictive performance, fairness and profitability. A 2026 open-access study in *Digital Finance* evaluates fairness-aware machine learning for credit scoring, while earlier work in the *European Journal of Operational Research* evaluates fairness processors against prediction performance and profitability. [Digital Finance, 2026: fairness-aware ML for credit scoring](https://link.springer.com/article/10.1007/s42521-026-00202-6), [European Journal of Operational Research: fairness in credit scoring](https://www.sciencedirect.com/science/article/pii/S0377221721005385)

## Failure modes to implement

| Failure | Design response | Why this is a deliberate choice |
|---|---|---|
| Client retry | Idempotency key + durable request record | Prevent duplicate financial side effects |
| Service timeout | Explicit pending state; bounded retry | Avoid treating an unknown outcome as a failure or success |
| Duplicate event | Consumer deduplication | At-least-once delivery is common and duplicates must be safe |
| Fraud model unavailable | Policy-defined fallback, not silent approval | Model availability must not bypass deterministic controls |
| Ledger write succeeds but event publish fails | Transactional outbox or CDC | Avoid database/event dual-write inconsistency |
| External settlement disagrees | Reconciliation workflow | External systems can become temporarily or permanently inconsistent |
| Loan model is uncertain | Human review state | Preserve a controlled path for ambiguous decisions |
| Model changes behaviour | Versioned model + regression suite | Make model changes attributable and testable |
| Sensitive data leaks into logs | Structured redaction + field-level policy | Observability must not become a data-exfiltration path |

## Ordering is a requirement, not a feature checkbox

Do not require global ordering merely because the system uses Kafka or another event broker.

For some workflows, ordering is a business invariant—for example, state transitions for the same account or transaction may need a deterministic sequence. For others, ordering only reduces throughput and increases operational coupling.

Monzo describes this explicitly: most of its queue-style workloads do not require ordering, while some batch processes do. Its Kafka abstraction therefore supports unordered concurrent processing for the common case and separate approaches where ordering is genuinely required. [Monzo: vertically scaling ordered consumption using Kafka](https://monzo.com/blog/vertically-scaling-ordered-consumption-using-kafka)

**Decision rule:** define the key whose ordering matters, then enforce ordering only for that key. Avoid global ordering unless the business invariant actually requires it.

## Patterns this case teaches

- Idempotency
- Explicit state machines
- Transactional outbox / CDC
- Event-driven integration where justified
- Synchronous APIs where asynchronous processing adds no value
- Saga / compensation for distributed workflows
- Ledger-as-source-of-truth
- Reconciliation
- Risk-based routing
- Human-in-the-loop
- Model versioning
- Explainability and audit evidence
- Distributed tracing
- Data minimization
- Modular monoliths as a valid starting architecture
- Service extraction based on measurable operational pressure

## Architecture choices: use / don't use / why

| Pattern | Use when | Don't use by default when | Primary trade-off |
|---|---|---|---|
| Modular monolith | Strong transactional coupling, small team, early product | Independent deployment/scaling is already a dominant need | Simpler operations, less deployment independence |
| Microservices | Independent ownership, deployment, scaling or failure isolation materially matters | Service boundaries are speculative or team is too small to operate them | Isolation and autonomy vs distributed-system complexity |
| Kafka | Durable streams, replay, high throughput, many consumers, partitioned processing | Simple jobs, request/response, modest pub/sub | Powerful event backbone vs operational and conceptual complexity |
| Queue | Background work, retries, work distribution | Consumers need a durable multi-consumer event history/replay model | Simpler processing vs weaker stream semantics |
| REST/gRPC | Immediate request/response and bounded interactions | Long-running work where callers should not wait | Simplicity vs temporal decoupling |
| PostgreSQL | Strong invariants, joins, transactions, relational model | Access pattern is inherently document/key-value and relational guarantees are unnecessary | Strong consistency/integrity vs horizontal-scale/access-pattern trade-offs |
| Redis | Low-latency cache/idempotency/ephemeral state | It would become the only durable financial source of truth | Speed vs durability/consistency responsibilities |
| Search index | High-volume investigation/search workloads | Simple indexed lookup is sufficient in the primary database | Search capability vs another consistency boundary |
| Kubernetes | Many independently deployed workloads and mature platform operations | Small application where managed compute/serverless is sufficient | Control/portability vs platform complexity |
| ML model | Measurable risk signal unavailable from deterministic rules alone | There is no reliable data, evaluation set or policy for model failure | Predictive power vs uncertainty, monitoring and governance |

## What production evidence changes in this design

This case deliberately separates **what is observed in industry** from **what we choose for the portfolio implementation**.

- **Stripe** demonstrates that idempotency is a first-class API concern for safe retries. [Stripe API](https://docs.stripe.com/api/idempotent_requests)
- **Monzo** demonstrates that microservices and Kafka can operate at significant scale, while also documenting the complexity they introduce and the need to build abstractions around them. [Microservices process](https://monzo.com/blog/2022/06/24/redefining-our-microservice-development-process), [Kafka queue](https://monzo.com/blog/how-we-built-a-queue-on-top-of-kafka)
- **HSBC** demonstrates that large-scale financial-crime detection can combine customer and transaction data with ML/advanced analytics. [HSBC](https://www.hsbc.com/who-we-are/esg-and-responsible-business/fighting-financial-crime/technology)
- **AWS Prescriptive Guidance** documents transactional outbox, CDC, saga, synchronous/asynchronous communication and other alternatives rather than treating microservices or a single broker as universal answers. [AWS Cloud Design Patterns](https://docs.aws.amazon.com/en_en/prescriptive-guidance/latest/cloud-design-patterns/introduction.html)
- **Academic research** provides evidence for graph-based fraud detection and the fairness/performance/profitability trade-offs in credit scoring; it informs hypotheses but does not by itself dictate the production architecture.

## Evidence boundary

This case uses three evidence layers:

1. **Production references** — public engineering material from companies such as Stripe, Monzo and HSBC.
2. **Academic research** — peer-reviewed or research papers on fraud detection, credit scoring, fairness and explainability.
3. **Portfolio architecture** — our own reference design and implementation choices, which are explicitly labelled as such.

Research-discovery platforms such as alphaXiv can help locate papers, but the preferred reference is the underlying paper, journal, publisher or institutional source.

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

The implementation should make the architectural alternatives visible: demonstrate the durable event path, but document and test the simpler synchronous/queue/outbox alternatives rather than presenting Kafka or microservices as mandatory.

The app is valuable when the code makes the reasoning visible—not when it merely has many services.
