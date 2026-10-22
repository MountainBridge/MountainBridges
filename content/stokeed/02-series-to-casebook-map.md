# STOK.EED → MountainBridge: content-to-code map

This page connects the short-form STOK.EED explanations to the deeper engineering work they should lead to in MountainBridge.

**Editorial promise:** a Reel introduces the question; the repository gives readers the model, evidence, trade-offs, and—where practical—a reproducible implementation. A concept or architecture sketch must never be described as a shipped system.

## The content pillars

| STOK.EED series / asset | Core question | Repository follow-through | Status |
|---|---|---|---|
| **AI Systems, Explained** — support bot refunds the wrong customer | How do tools, agent loops, MCP, skills, permissions, hooks, telemetry, and model choice fit together? | A synthetic support/refund agent with policy checks, bounded tools, human approval for high-impact refunds, audit events, and tests. | Planned; design before implementation |
| **Agent From Zero: Agent loop (Part 3)** | What makes an agent different from a one-shot tool call? | Keep the loop small and inspectable; test tool-use, completion, step limits, invalid inputs, and failures. | Build on the existing [Agent From Zero tool example](../../pattern-to-production/agent-from-zero/part-2-tool/README.md) |
| **MCP (Part 4)** | What does MCP standardise, where does execution happen, and what are the security boundaries? | A minimal MCP server/client walkthrough with tool discovery, invocation, transport notes, least-privilege permissions, and untrusted-tool warnings. | Planned; validate against the current MCP specification |
| **Agent Skills (Part 5)** | How can reusable task instructions be loaded when needed instead of bloating every prompt? | A small, synthetic regression-report skill with a clear trigger, required inputs, output template, and tests/examples. | Planned; validate against the relevant Skills specification and host behavior |
| **Agent SDK (Part 6)** | When should a team own the loop, and when should it use an SDK? | A decision guide and minimal SDK example covering permissions, hooks, observability, token/cost limits, and failure handling. | Planned; pin examples to the current SDK documentation |
| **Reverse Engineering Agent (REA)** | How can an agent investigate software it cannot read as source code—and show uncertainty? | An authorised-lab workflow: evidence collection, tool boundaries, confidence/unknowns, and a clear warning to analyse only software the reader is permitted to examine. | Research/case study to build; do not imply the repository implements REA today |
| **Java: 30 years of change** | Which language and runtime changes matter to developers, and why? | A source-backed version timeline with small compilable examples and a release-status check for each feature. | Planned; verify release/version claims before publishing |
| **Production, Explained** | How do payment systems fail, and which patterns reduce the blast radius? | Synthetic payment flows with idempotency, state transitions, retry/backoff, concurrency controls, timeouts, circuit breakers, sagas, and transactional outbox examples. | Planned; no employer code or customer data |

## The six-part agent-building learning path

The supplied STOK.EED assets establish this conceptual sequence:

1. **Model** — interprets context and requests an action; it does not directly execute local code.
2. **Tools** — application-controlled capabilities that validate inputs, perform work, and return results.
3. **Agent** — a bounded orchestration loop that sends tool results back to the model until completion or a stop condition.
4. **MCP** — a protocol for discovering and invoking tools exposed by MCP servers.
5. **Skills** — reusable instructions and supporting resources that guide how a task is performed.
6. **SDK** — a framework that can manage the loop and provide built-in capabilities, while the application still owns permissions, configuration, and operational decisions.

These are related but not interchangeable. An SDK is not a model; MCP is not the agent loop; a skill is not a tool; and the model's request is not proof that a tool action succeeded. Execution results and application policy remain decisive.

## Production, Explained: planned case-study sequence

Use synthetic examples only. Each case study should show the failure, a minimal model of the system, the mitigation, the trade-offs, and tests for the unhappy path.

1. **Payment stuck** — idempotency keys, explicit payment states, and reconciliation.
2. **One payment charged twice** — safe retries, exponential backoff, jitter, and idempotent processing.
3. **Two withdrawals both succeed** — concurrency control, atomic state transitions, and ledger invariants.
4. **A slow gateway stalls the service** — timeouts, circuit breakers, bulkheads, and load shedding.
5. **Money left one service but never arrived at the next** — saga orchestration and compensating transactions.
6. **Payment saved, notification missing** — transactional outbox and reliable asynchronous delivery.

These are planned educational case studies, not claims about a particular bank's internal architecture or production incidents.

## Minimum quality bar for every follow-through

- **30-second version:** one precise claim and why it matters.
- **Architecture:** components, data flow, trust boundaries, and failure paths.
- **Evidence:** primary sources, dated/versioned where relevant.
- **Runnable proof:** code and tests when an implementation is claimed.
- **Limits:** assumptions, known gaps, and what has not been tested.
- **Safety:** synthetic data; least privilege; human approval for high-impact actions.
- **Status label:** Research, Design, Prototype, or Tested—never blur them together.

## Review notes for the supplied videos

- The MCP, Skills, and Agent SDK episodes make specific claims about protocol behavior, specifications, and SDK APIs. Recheck those claims against current primary documentation whenever the clips or examples are revised.
- The Java timeline contains version-specific feature claims. Confirm each feature's release status and wording against OpenJDK JEPs and release notes before treating the video as a reference.
- The REA episode discusses dual-use reverse engineering. Keep examples within software you own or are authorised to analyse, and distinguish evidence from inference.
- The payment examples are architectural teaching scenarios, not descriptions of proprietary employer systems.

## Links

- [MountainBridge home](../../README.md)
- [Agent From Zero: Tool](../../pattern-to-production/agent-from-zero/part-2-tool/README.md)
- [Agentic Regression Investigator project brief](../../projects/01-agentic-regression-investigator.md)
- [Production AI Application Engineering project brief](../../projects/02-production-ai-application.md)
- [STOK.EED on Instagram](https://www.instagram.com/stok.eed/)
