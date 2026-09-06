# Runnable Reference Apps

The case studies describe the engineering problem. The reference apps are the proof-of-concept implementations.

Each app is intentionally a **vertical slice**, not a fake production system.

## Portfolio apps

| App | Domain | Vertical slice | Key engineering patterns |
|---|---|---|---|
| `assessment-platform` | HackerRank-like technical assessment | author challenge → candidate workspace → run tests → score | sandboxing, challenge-as-code, multi-signal evaluation |
| `banking-platform` | payments + loans | payment → idempotency → ledger → event → reconciliation | state machine, idempotency, outbox, audit |
| `retail-platform` | commerce | search → cart → reservation → checkout → order | read models, reservation, caching, checkout integrity |
| `operations-platform` | dispatch | job → assignment → worker state → exception → re-plan | state machine, matching, eventing, graceful degradation |
| `music-platform` | streaming discovery | events → profile → candidates → ranking → recommendation | feedback loops, cold start, exploration |
| `medical-platform` | EHR / FHIR sandbox | patient → retrieval → evidence → AI summary → approval | FHIR, provenance, authorization, human gate |
| `event-streaming-platform` | YouTube/Netflix/Prime-like media | playback event → stream → feature/state update → API | Kafka/PubSub, replay, ordering, idempotency, backpressure |
| `engineering-platform` | internal developer platform | service registration → catalog → template → deployment metadata | golden paths, self-service, ownership |

## Implementation standard

Every app should include:

```text
README
  ├── 30-second read
  ├── 2-minute read
  ├── architecture diagram
  ├── technology decision table
  ├── local setup
  ├── happy path
  ├── failure injection
  ├── tests
  ├── observability
  └── production gaps
```

## Truthfulness rule

The applications are portfolio reference implementations. They must not imply they are production systems, financial services, clinical systems, or internal systems of the companies used as external references.

The implementation goal is to demonstrate engineering reasoning through code.
