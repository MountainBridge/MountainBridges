# Event Streaming Platform: Live Media at YouTube, Netflix, and Prime Video Scale

> **30-second read:** A streaming platform is a distributed real-time system: ingest events, route them, maintain state, trigger recommendations, track playback, observe failures, and survive traffic spikes without turning every consumer into a tightly coupled dependency.

> **2-minute read:** Model the platform as two planes. The **data plane** moves playback, catalog, entitlement and telemetry events. The **decision plane** consumes those streams to update recommendations, detect anomalies, trigger operational workflows and build derived views. Kafka/Pub/Sub-like infrastructure decouples producers from consumers, but correctness still needs explicit ordering, deduplication, replay, schema evolution, backpressure and idempotent consumers.

## Product to build

A reference video streaming platform:

```text
                ┌───────────────┐
                │ Web / Mobile  │
                └───────┬───────┘
                        ↓
                Playback Gateway
                  ↙          ↘
          Entitlement      CDN / Origin
                              ↓
                         Playback events
                              ↓
                         Event backbone
                   ┌──────────┼──────────┐
                   ↓          ↓          ↓
              Analytics   Recommendation  Operations
                   ↓          ↓          ↓
              Data lake   Feature store   Alerts / action
                   │          │          │
                   └──────────┼──────────┘
                              ↓
                         Derived state
                              ↓
                     User experience APIs
```

## The two-plane model

### Data plane

Responsible for serving the customer:

- content discovery
- playback
- entitlement
- subtitles/audio metadata
- session state
- availability

### Decision plane

Responsible for learning and operating:

- recommendations
- experimentation
- playback-quality analysis
- fraud / account anomaly detection
- capacity signals
- incident automation
- content intelligence

This separation prevents analytical consumers from becoming synchronous dependencies of the playback path.

## Technology choices

| Concern | Technology | Why |
|---|---|---|
| Client | React / TypeScript | Rich streaming UI and strongly typed service contracts |
| Edge/API | Node.js + TypeScript | Low-latency APIs and rapid service iteration |
| Event backbone | Apache Kafka | Durable ordered partitions, replay and independent consumers |
| Cloud alternative | Google Pub/Sub | Managed asynchronous fan-out with decoupled subscriptions |
| Stream processing | Kafka Streams / Apache Flink | Stateful processing, windows, joins and event-time logic |
| Operational state | PostgreSQL | Strong transactional state for accounts, entitlements and jobs |
| Fast state | Redis | Sessions, rate limits and hot derived state |
| Analytics lake | Object storage + Parquet | Replayable large-scale event history |
| Recommendation stack | Python + PyTorch | Model development and batch/online inference |
| Search | OpenSearch | Catalog search and operational event investigation |
| Observability | OpenTelemetry | Trace user requests across synchronous and asynchronous paths |
| Runtime | Kubernetes | Independently scale gateways, consumers and processors |

The exact stack is a reference choice. The important property is matching the technology to delivery guarantees, latency, replayability and operational ownership.

## Why event streaming instead of point-to-point calls?

A synchronous topology grows like this:

```text
Playback Service ─→ Analytics
                 ├→ Recommendation
                 ├→ Fraud
                 ├→ Notifications
                 └→ Operations
```

Every new consumer increases coupling.

With event streaming:

```text
Playback Service
      ↓
 playback.events
   ↙   ↓    ↓    ↘
Analytics RecSys Fraud Operations
```

The producer emits the fact. Consumers decide what the fact means for their own responsibility.

Google Cloud's current event-driven architecture guidance explicitly contrasts queue-driven systems with shared-topic event streams, noting that new consumers can subscribe without modifying the originating system. citeturn545344search6

## Ordering is not global magic

Partition by a business key when ordering matters.

For example:

```text
partition key = playback_session_id
```

Then a session's events can preserve order within one partition while the platform still scales horizontally across many sessions.

Do not assume that every event across every user has one global order.

## At-least-once means idempotency

Consumers should assume an event may be delivered more than once:

```text
Event
 ↓
Consumer
 ↓
Side effect
 ↓
Ack lost
 ↓
Event delivered again
```

Use event IDs, idempotency keys, deduplication state or naturally idempotent writes.

## Replay is a feature

A durable event stream can become an operational recovery mechanism:

```text
Historical events
      ↓ replay
New consumer / new model
      ↓
Rebuild derived state
```

This is one reason to treat event schemas, retention and compatibility as first-class platform decisions rather than incidental messaging details.

## Netflix reference case

Netflix has documented using Kafka for cross-region propagation in its Simone distributed simulation service. A server publishes lifecycle events to Kafka; client instances consume them and maintain local state, while events also carry simulation results back through the platform. The architecture demonstrates a recurring pattern: durable event propagation + local read state + explicit lifecycle transitions. citeturn545344search1

Netflix has also described centralizing data-movement capabilities behind reusable abstractions because mission-critical systems such as Member, Billing, Recommendations and Subscriptions depend on Cassandra. The lesson is that streaming/data infrastructure becomes a platform when common operational complexity is encoded once and exposed through reusable workflows. citeturn545344search3

## YouTube reference case: recommendation is a streaming consumer

YouTube's recommendation research separates **candidate generation** from **ranking**. The system turns a massive interaction history into a manageable candidate set, then applies a separate ranking model using richer user/context signals. citeturn545344search0

The event-streaming casebook implementation therefore treats recommendation as a consumer of playback and interaction events:

```text
Playback events
      ↓
Feature pipeline
      ↓
Candidate generation
      ↓
Ranking
      ↓
Policy / diversity
      ↓
Homepage / next-video API
```

## Prime Video reference case: streaming operations are also a data problem

Prime Video researchers describe testing live-event traffic such as Thursday Night Football and VOD events such as Rings of Power, then using graph-based anomaly detection to identify microservice behaviours under event traffic that ordinary load tests may miss. They also describe diff-aware deployment risk assessment for live-event change management. citeturn545344search2turn545344search15

That gives us another reusable pattern:

```text
Code change / traffic shape
          ↓
Risk signal
          ↓
Targeted validation
          ↓
Progressive deployment
          ↓
Live telemetry
          ↓
Rollback / continue
```

## Backpressure and overload

A streaming system must decide what happens when consumers are slower than producers.

Options include:

- increase consumer parallelism
- buffer temporarily
- shed low-value events
- sample telemetry
- apply priority lanes
- pause non-critical consumers
- degrade analytical freshness

The customer playback path should not become unavailable merely because a downstream analytics consumer is behind.

## Schema evolution

Event contracts need compatibility rules:

```text
producer v1 → consumer v1
producer v2 → consumer v1
producer v2 → consumer v2
```

Prefer additive evolution where possible, explicit versioning for breaking changes, and contract tests that validate compatibility before deployment.

## Failure modes

| Failure | Design response |
|---|---|
| Consumer lag | autoscale / backpressure / priority |
| Duplicate event | idempotent consumer |
| Out-of-order event | event-time handling + sequence metadata |
| Poison message | dead-letter/quarantine path |
| Schema incompatibility | compatibility checks + versioning |
| Broker outage | durable retries / regional failover where justified |
| Recommendation pipeline delay | stale-but-valid recommendations |
| Analytics outage | isolate from customer path |
| Live traffic spike | pre-scaling + load-aware limits |
| Bad deployment during event | risk-aware progressive delivery |

## Patterns taught

- event-driven architecture
- pub/sub
- partitioning
- event-time processing
- at-least-once semantics
- idempotent consumers
- replay
- schema evolution
- backpressure
- dead-letter handling
- stream joins / windows
- CQRS-style derived views
- progressive delivery
- event-aware observability

## Related casebook articles

[Failure Modes Before Features](../articles/failure-modes-before-features.md)

[Architecture Decisions That Survive](../articles/architecture-decisions-that-survive.md)

[Making AI Systems Production-Ready](../articles/ai-production-readiness.md)

[Designing a Developer Journey End to End](../articles/developer-journey-end-to-end.md)

## Research and engineering references

- [Deep Neural Networks for YouTube Recommendations — Google Research](https://research.google/pubs/deep-neural-networks-for-youtube-recommendations/)
- [Learning to Rank Recommendations with the k-Order Statistic Loss — Google Research](https://research.google/pubs/learning-to-rank-recommendations-with-the-k-order-statistic-loss/)
- [Netflix Simone distributed simulation service — Netflix Tech Blog](https://netflixtechblog.com/https-medium-com-netflix-techblog-simone-a-distributed-simulation-service-b2c85131ca1b)
- [Event-driven architecture with Pub/Sub — Google Cloud](https://docs.cloud.google.com/solutions/event-driven-architecture-pubsub)
- [Deployment risk assessment using diff-aware features: a case study at Prime Video — Amazon Science](https://www.amazon.science/publications/deployment-risk-assessment-using-diff-aware-features-a-case-study-at-prime-video)

## Build target

Build a vertical slice:

**playback event → Kafka/Pub/Sub → stream processor → user/session state → recommendation candidate update → API → UI**

Then inject consumer lag, duplicates, out-of-order events and broker/processor failure and show how the system degrades.
