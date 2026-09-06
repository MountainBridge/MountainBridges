# Data Platform Lab — Kafka + SQL + MongoDB

This is a runnable engineering lab for comparing three different data responsibilities in one end-to-end system:

- **Kafka** — event transport, ordering, replay, consumer groups and asynchronous workflows
- **SQL** — transactional truth, constraints, joins and consistency
- **MongoDB** — document-oriented reads, aggregation and schema evolution

The lab is intentionally designed around one business flow rather than three unrelated technology demos.

## Scenario

Build an **order lifecycle**:

```text
Client
  |
  v
Order API
  |
  +----> SQL: transactional order state
  |
  +----> Kafka: OrderCreated / OrderPaid / OrderCancelled
              |
              +----> Inventory consumer
              +----> Notification consumer
              +----> Analytics consumer
                              |
                              v
                         MongoDB read model
```

## Engineering questions

1. What is the source of truth for an order?
2. What belongs in SQL and what is better represented as a document read model?
3. Where does Kafka provide value over synchronous API calls?
4. What happens when a consumer is slow or unavailable?
5. How do we handle duplicate delivery?
6. What happens when the database write succeeds but event publication fails?
7. How do partition keys affect ordering and parallelism?
8. How do we replay events without corrupting downstream state?
9. What should be observable: lag, retries, failures, throughput, stale reads?
10. Which choices change as traffic, cost and reliability requirements increase?

## Build progression

### 1. SQL baseline

Start with `sql/schema.sql` and model orders, order items and payments with relational constraints.

Run it directly in an online SQL environment:

- [OneCompiler SQL / database playground](https://onecompiler.com/)
- [OneCompiler MySQL Studio](https://onecompiler.com/studio/mysql)
- [JDoodle online SQL compiler](https://www.jdoodle.com/online-sql-editor)

### 2. MongoDB read model

Use `mongodb/seed.js` to create a document representation suitable for order-history and analytics-style reads.

Run it in the browser:

- [OneCompiler MongoDB editor](https://sandbox.onecompiler.com/mongodb)
- [OneCompiler MongoDB Studio](https://onecompiler.com/studio/mongodb)

### 3. Kafka event pipeline

The Kafka lab will implement:

```text
producer -> topic -> consumer group -> processing -> MongoDB read model
```

Start with one partition and one consumer. Then deliberately change:

- partition count
- message key
- consumer count
- processing latency
- retry behaviour
- duplicate delivery
- consumer restart
- offset position

For a real Kafka environment in the browser, use:

- [Killercoda browser environments](https://killercoda.com/)
- [Confluent Kafka + JavaScript getting-started guide](https://developer.confluent.io/get-started/javascript/)
- [Conduktor Kafka Explorer](https://kafka-options-explorer.conduktor.io/)

For serious browser-based development of the repository itself, use GitHub Codespaces.

## Online execution rule

Not every technology should be forced into a generic compiler.

| Technology | Best browser path |
|---|---|
| Java / Python / C++ / Node.js / TypeScript | JDoodle or OneCompiler |
| SQL / MySQL | OneCompiler |
| MongoDB | OneCompiler MongoDB editor/Studio |
| Kafka | Killercoda / Confluent Cloud / local Kafka in Codespaces |
| Full multi-service POC | GitHub Codespaces |

The goal is eventually to make the lab interview-ready: a candidate should be able to open the repository, run a constrained problem, inspect the implementation, change the design and explain the trade-offs without needing a local machine.

## Interview exercises

- Design an idempotent order consumer.
- Explain why `orderId` is or is not a suitable Kafka key.
- Recover a consumer after failure without double-applying an order.
- Compare SQL transaction boundaries with Kafka delivery semantics.
- Build a MongoDB aggregation for customer order history.
- Detect and explain consumer lag.
- Decide when an event should be replayed versus recomputed.
- Design the outbox pattern for reliable event publication.
- Introduce a failure between SQL commit and Kafka publication and recover safely.

## Evidence expected

Every experiment should capture:

**problem → assumptions → implementation → test data → failure injected → observation → measurement → decision → trade-off**

This lab is implementation evidence. The deeper architectural reasoning belongs in the corresponding MountainBridges case study.
