# Problem Pattern Library

The casebook is designed to grow as a **strategy library for recurring engineering problem classes**.

A pattern is complete only when it connects the problem to a decision process, an architecture, implementation guidance, failure modes, validation and evidence.

## Pattern catalogue

| Problem class | Strategy / pattern | Casebook entry |
|---|---|---|
| Ambiguous requirements | Outcome → context → constraints → boundaries → options | `articles/ambiguity-to-architecture.md` |
| User / developer friction | Journey mapping + measurable friction | `articles/design-thinking-for-engineers.md` |
| Distributed knowledge | Explicit mental models + reusable paths + contribution loops | `patterns/scaling-technical-knowledge.md` |
| Architecture decisions | Context → decision → alternatives → consequences | `articles/architecture-decisions-that-survive.md` |
| Failure-prone systems | Failure map before feature design | `articles/failure-modes-before-features.md` |
| Reference examples | Real task → honest implementation → failure path → production notes | `articles/reference-implementations.md` |
| End-to-end technical experience | Discover → understand → try → integrate → debug → operate → expand | `articles/developer-journey-end-to-end.md` |
| Regression with hidden context | Extract → normalize → reason → validate → evidence | `articles/context-engineering-regression-automation.md` |
| LLM evaluation | Contract → scenario → deterministic checks + semantic judgment → evidence | `articles/llm-evaluation-systems.md` |
| AI production systems | Policy → context → model → tools → verification → feedback | `articles/ai-production-readiness.md` |
| Platform consistency | Golden path + self-service + transparent abstraction | `examples/README.md` |
| Contribution at scale | Reusable primitives + review + extension boundaries | `patterns/scaling-technical-knowledge.md` + `research/evidence-base.md` |
| AI coding agents | Repository context + tools + iteration + verification | `articles/ai-production-readiness.md` |
| Challenge / assessment systems | Problem specification + canonical solution + hints + tests + rubric + review | `case-studies/hackerrank-fit.md` |

## Expansion roadmap

The catalogue should gradually add reusable patterns for:

- APIs and contract evolution
- asynchronous workflows and idempotency
- event-driven systems
- consistency and distributed state
- caching and invalidation
- capacity and performance
- observability and incident response
- authentication and authorization
- data modeling and migration
- frontend architecture and micro-frontends
- security and trust boundaries
- platform engineering and golden paths
- documentation and onboarding
- governance and contribution
- RAG and knowledge retrieval
- agent orchestration
- human-in-the-loop systems
- cost / latency / quality trade-offs

## Completion rule for a new pattern

A new pattern should include:

```text
Problem
  ↓
Why it is hard
  ↓
Context / forces
  ↓
Options
  ↓
Chosen pattern
  ↓
Architecture
  ↓
Implementation
  ↓
Failure modes
  ↓
Validation / metrics
  ↓
Real-world reference case
  ↓
Research / bibliography
```

The objective is breadth **without becoming a catalogue of disconnected advice**. Every new pattern should connect to an existing problem class or establish a new reusable class.
