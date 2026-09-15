# From Ambiguity to Architecture: The Code Wasn't the Hard Part

> **30-second read:** The fastest way to build the wrong system is to start coding before understanding the problem. Good engineering starts with the person, the journey and the constraints — then turns that understanding into architecture and evidence.

A request can sound simple:

> “Make this scalable.”

Or:

> “Add this capability.”

The temptation is to start with the technology.

But before the first design decision, there are usually better questions.

**Who is trying to accomplish what?**

What does their journey look like today? Where does it break? Which business rules are hidden? Which system actually owns the data? What happens when a dependency is slow, unavailable or wrong?

That is often where the real engineering problem appears.

## Start with the person, not the component

```text
Persona → Goal → Journey → Friction → Outcome
```

The endpoint alone is rarely enough. A technically successful response can still create a poor experience if it is slow, ambiguous, inconsistent or impossible to recover from.

Before choosing a framework or service, make the journey visible.

Ask:

- Who is affected?
- What are they trying to accomplish?
- What makes the current path difficult?
- What does success look like?
- What happens if we do nothing?

## Turn the journey into an engineering problem

Once the journey is clear, expose the constraints:

```text
Journey → Requirements → Constraints → Dependencies → State → Failure modes
```

This is where design thinking becomes engineering work.

We are not designing screens in isolation. We are understanding the person using the system and translating that experience into technical decisions.

## Design the system around the problem

Only now should architecture enter the conversation.

Look for:

- responsibility boundaries
- contracts
- state ownership
- trust boundaries
- independent failure domains
- operational ownership

A component diagram without these decisions is just a collection of boxes.

The important question is not “Which technology should we use?”

It is **“Which design makes the important behavior understandable, reliable and changeable?”**

## Make the trade-offs visible

| Decision | Alternative | Why it matters | Cost / risk |
|---|---|---|---|
| Sync vs async | Queue | Decouple slow work | More state to manage |
| Shared vs isolated | Separate boundary | Reduce blast radius | More operational overhead |
| Cache vs source of truth | Direct read | Lower latency | Staleness / invalidation |

The decision is only half the artifact.

The reasoning matters because the next engineer may inherit the system without inheriting the original conversation.

## Break the happy path

Before calling the design complete, ask what reality will do to it.

```text
Dependency unavailable?
       ↓
Timeout?
       ↓
Duplicate request?
       ↓
Stale data?
       ↓
Partial failure?
       ↓
What does the person experience?
```

Failure behavior is part of the user experience, not an afterthought.

## Build to learn, not just to ship

The first implementation should prove the assumptions that matter most.

```text
Problem → Journey → Design → Vertical slice → Failure injection → Evidence
```

A design is a hypothesis until evidence supports it.

Ask:

> **What assumption would have to be wrong for this design to fail?**

Then test that assumption.

## Where AI fits

AI can make implementation, exploration and iteration dramatically faster.

That makes the earlier work more important, not less.

If the problem is poorly framed, AI can simply help us build the wrong thing faster.

The useful role for AI is inside the engineering loop:

**understand → explore → implement → test → challenge → learn → iterate.**

## The pattern

**Start with the person. Discover the problem. Design the system. Break the system. Learn from the evidence.**

The technology will change.

The reasoning should travel.

## Research & further reading

### Problem framing, human-centered engineering and developer experience

- [Developer Productivity for Humans — Google Research](https://research.google/pubs/developer-productivity-for-humans-a-human-centered-approach-to-developer-productivity/)
- [Measuring Flow and Friction for Developers — Google Research](https://research.google/pubs/measuring-flow-and-friction-for-developers-part-6-measuring-flow-and-friction-for-developers/)
- [What Improves Developer Productivity at Google? Code Quality — Google Research](https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/)
- [Measuring Developer Goals — Google Research](https://research.google/pubs/measuring-developer-goals/)
- [A Case Study of Onboarding in Software Teams: Tasks and Strategies — arXiv](https://arxiv.org/abs/2103.05055)

### Architecture, decisions and infrastructure

- [Architecture Decision Record — Martin Fowler](https://martinfowler.com/bliki/ArchitectureDecisionRecord.html)
- [Scaling the Practice of Architecture, Conversationally — Martin Fowler](https://martinfowler.com/articles/scaling-architecture-conversationally.html)
- [Building Infrastructure Platforms — Martin Fowler / Thoughtworks](https://www.martinfowler.com/articles/building-infrastructure-platform.html)
- [The Spotify Story — Backstage](https://backstage.io/docs/overview/background/)
- [Announcing TechDocs — Backstage](https://backstage.io/blog/2020/09/08/announcing-tech-docs/)
- [Golden Paths for Engineering Execution Consistency — Google Cloud](https://cloud.google.com/blog/products/application-development/golden-paths-for-engineering-execution-consistency)
- [Platform Engineering — Google Cloud](https://cloud.google.com/solutions/platform-engineering)

### AI-assisted software engineering and repository context

- [State of AI-assisted Software Development 2025 — DORA / Google](https://dora.dev/research/2025/dora-report/)
- [DORA AI Capabilities Model — DORA / Google Cloud](https://dora.dev/ai/capabilities-model/report/)
- [The State of Generative AI in Software Development: Insights from Literature and a Developer Survey — arXiv](https://www.alphaxiv.org/abs/2603.16975)
- [Code Digital Twin: A Knowledge Infrastructure for AI-Assisted Complex Software Development — alphaXiv](https://www.alphaxiv.org/abs/2503.07967)
- [A Survey of Context Engineering for Large Language Models — alphaXiv](https://www.alphaxiv.org/abs/2507.13334)
- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues? — alphaXiv](https://www.alphaxiv.org/abs/2310.06770)
- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering — alphaXiv](https://www.alphaxiv.org/abs/2405.15793)
- [RepoCoder: Repository-Level Code Completion Through Iterative Retrieval and Generation — alphaXiv](https://www.alphaxiv.org/abs/2303.12570)

### Evaluation and evidence for AI systems

- [A Survey on LLM-as-a-Judge — alphaXiv](https://www.alphaxiv.org/abs/2411.15594)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena — alphaXiv](https://www.alphaxiv.org/abs/2306.05685)
- [Large Language Models are not Fair Evaluators — alphaXiv](https://www.alphaxiv.org/abs/2305.17926)
- [Evaluation of Retrieval-Augmented Generation: A Survey — alphaXiv](https://www.alphaxiv.org/replicate/2405.07437)
- [Retrieval Augmented Generation Evaluation in the Era of Large Language Models — arXiv](https://arxiv.org/abs/2504.14891)

These references are the supporting evidence layer; the broader bibliography is maintained in the [Research & Evidence Base](../research/evidence-base.md).

## The principle

> **Start with the person. Make the problem visible. Make the trade-offs explicit. Design for failure. Build to learn.**
