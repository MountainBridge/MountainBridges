# Failure Modes Before Features

> **30-second read:** A feature spec describes what should happen. Production is defined by what happens when dependencies time out, data is stale, requests repeat, or AI produces a convincing mistake. Design those failures before polishing the happy path.

> **2-minute read:** Build a failure map before selecting architecture. For each important journey, identify the failure, user impact, detection signal, recovery strategy, and ownership. Then let those risks drive queues, retries, idempotency, caching, circuit breakers, fallbacks, or human review. The architecture becomes a response to reality instead of a diagram of the happy path.

One of the simplest ways to improve a design is to ask what can go wrong before deciding what the feature should look like.

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
| AI unsupported answer | wrong decision | evidence check | reject / escalate |

## Design observable behaviour

A failure that is technically handled but invisible to the person operating the system is not fully handled.

```text
Failure → System response → User-visible outcome → Telemetry → Operator action
```

Observability is part of the behaviour contract.

## AI makes “looks successful” failures more dangerous

AI systems add failure modes that can return HTTP 200 and still be wrong:

- confident but unsupported output
- irrelevant retrieved context
- syntactically valid but semantically wrong tool calls
- inconsistent responses for equivalent inputs
- model or prompt changes that shift behaviour

The test strategy should follow the risk model rather than collecting arbitrary edge cases.

## Real-world reference case

SWE-bench evaluates AI systems against real GitHub issues and repository-level changes rather than isolated coding questions. Its tasks frequently require coordinated changes across multiple files and interaction with a real codebase, which is a useful model for testing systems in their actual operating environment.

Source: https://www.alphaxiv.org/abs/2310.06770

## Papers and further reading

- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues? — alphaXiv](https://www.alphaxiv.org/abs/2310.06770)
- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering — alphaXiv](https://www.alphaxiv.org/abs/2405.15793)
- [RepoCoder: Repository-Level Code Completion Through Iterative Retrieval and Generation — alphaXiv](https://www.alphaxiv.org/abs/2303.12570)
- [Software engineering for AI/ML software: systematic literature review — alphaXiv](https://www.alphaxiv.org/abs/2011.03751)
- [The State of Generative AI in Software Development — alphaXiv](https://www.alphaxiv.org/abs/2603.16975)

## The principle

> **Do not design only for what the system should do. Design for the ways reality can make it behave differently.**
