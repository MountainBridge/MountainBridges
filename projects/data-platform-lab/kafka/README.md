# Kafka Lab

The Kafka part of the Data Platform Lab is about **event semantics**, not simply producing and consuming messages.

## First implementation

```text
Order API
   |
   | OrderCreated { orderId, customerId, totalAmount }
   v
orders topic
   |
   +---- inventory-consumer
   |
   +---- notification-consumer
   |
   +---- analytics-consumer
```

Use `orderId` as the initial message key so events for the same order have a stable partitioning decision.

## Experiments

### A. Ordering

Produce multiple events for the same order and observe whether their relative order is preserved within a partition.

### B. Consumer groups

Run two consumers in the same group. Increase partitions and observe how work is distributed.

### C. Replay

Reset the consumer position and rebuild the downstream read model from the event history.

### D. Duplicate delivery

Force a retry and make the consumer process the same event twice. The handler must be idempotent.

### E. Poison message

Send an invalid event. Compare retry, dead-letter/quarantine and skip strategies.

### F. Slow consumer

Add artificial processing latency and observe consumer lag.

### G. Database/event consistency

Create the failure window:

```text
SQL commit succeeds
       |
       X Kafka publication fails
```

Then implement and compare a transactional outbox approach.

## Browser execution

Kafka needs a broker and therefore is different from a normal single-file compiler.

- [Killercoda](https://killercoda.com/) — browser-hosted interactive environments
- [Confluent Kafka + JavaScript](https://developer.confluent.io/get-started/javascript/) — managed Kafka workflow with a browser-friendly development path
- [Confluent Kafka resources](https://developer.confluent.io/) — tutorials and working examples
- [Conduktor Kafka Explorer](https://kafka-options-explorer.conduktor.io/) — inspect Kafka configuration/protocol behaviour

For the full multi-service version, use GitHub Codespaces with Docker/Compose.

## What to measure

- producer throughput
- consumer throughput
- consumer lag
- retry count
- processing latency
- duplicate events
- failed events
- partition distribution
- recovery time

The goal is to be able to explain **why Kafka is present**, what guarantee it gives, what it does not guarantee, and what additional application-level controls are required.
