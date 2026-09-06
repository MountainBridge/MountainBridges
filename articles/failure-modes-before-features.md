# Failure Modes Before Features

One of the simplest ways to improve a design is to ask what can go wrong before deciding what the feature should look like.

A feature description usually captures the happy path. Production teaches us that the unhappy path is where architecture earns its keep.

## Start with failure

For every important journey, ask:

```text
What must succeed?
What can fail?
What can fail partially?
What can become stale?
What can be repeated?
What happens when a dependency disappears?
```

This turns vague risk into design inputs.

## Build a failure map

| Failure mode | User impact | Detection | Recovery |
|---|---|---|---|
| Dependency timeout | Delayed result | latency metric | bounded retry / fallback |
| Duplicate request | repeated action | idempotency key | deduplicate |
| Stale data | incorrect decision | freshness check | refresh / reject |
| Partial failure | incomplete workflow | step-level status | resume / compensate |

The exact implementation varies. The questions are portable.

## Design the observable behaviour

A failure that is technically handled but invisible to the person operating the system is not fully handled.

For meaningful failure paths, define:

```text
Failure
  ↓
System response
  ↓
User-visible outcome
  ↓
Telemetry
  ↓
Operator action
```

Observability is part of the behaviour contract.

## AI systems make this more important

AI systems add failure modes that can look successful:

- confident but unsupported output
- irrelevant retrieved context
- tool calls that complete but choose the wrong action
- inconsistent responses for equivalent inputs
- prompt or model changes that shift behaviour

A system can return HTTP 200 and still be wrong.

## Use failure modes to shape tests

A useful test set is not a random collection of edge cases. It is a reflection of the risk model.

```text
Failure model
     ↓
Risk ranking
     ↓
Representative scenarios
     ↓
Deterministic / semantic checks
     ↓
Evidence
```

This makes testing more intentional and helps explain why a scenario exists.

## The design payoff

When failure modes are explicit early, architecture decisions become easier:

- queues become a response to timing and isolation needs
- idempotency becomes a response to retries and duplicates
- caching becomes a response to access patterns and latency
- circuit breakers become a response to dependency failure
- human review becomes a response to uncertainty

The pattern is simple:

> Do not design only for what the system should do. Design for the ways reality can make it behave differently.
