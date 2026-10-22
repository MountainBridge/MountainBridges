![Nidhi Verma — From Context to Confidence](assets/nidhi-devrel-home.svg)

# STOK.EED × MountainBridge

### Understand systems. Build them. Verify them. Explain them.

This is the engineering casebook behind **STOK.EED**: practical explorations of AI agents, tools, MCP, context engineering, reverse engineering, software architecture, and reliable AI systems.

The goal is simple: **move from an interesting idea to an explanation you can inspect, test, and reproduce.**

**Nidhi Verma · Senior Software Engineer · 11+ years in software engineering**

[Instagram · STOK.EED](https://www.instagram.com/stok.eed/) · [LinkedIn](https://www.linkedin.com/in/nidhiverma200/) · [Browse the casebook](#start-here)

---

## Start here

If you're new to this work, follow this path:

1. **Understand the building blocks** — [Agent From Zero: Tool](pattern-to-production/agent-from-zero/part-2-tool/README.md)  
   See the boundary between a model's tool request and application-controlled execution.
2. **Connect the idea to engineering practice** — [Agentic Regression Investigator](projects/01-agentic-regression-investigator.md)  
   Explore a design for tracing changes to affected journeys, tests, evidence, and human review. **Design and implementation in progress.**
3. **Think beyond the demo** — [Production AI Application Engineering](projects/02-production-ai-application.md)  
   Study the architecture and quality questions involved in building, evaluating, observing, and operating AI features. **Architecture study, not a claimed production deployment.**
4. **Read the engineering story** — [Regression Was a Context Problem](articles/01-regression-was-a-context-problem.md)  
   Why reliable answers depend on good context, traceable evidence, and testable outcomes.

## What STOK.EED explores

| Theme | The question |
|---|---|
| **Agents, tools & MCP** | What is the model responsible for, what does the application execute, and how do tools connect systems? |
| **Context engineering** | How do we give a system relevant, versioned evidence instead of relying on a long prompt? |
| **Reverse engineering** | How can we infer a system's behavior, trace its architecture, and test our understanding? |
| **AI evaluation & regression** | How do we detect when a model, prompt, retrieval source, or code change makes behavior worse? |
| **Architecture & reliability** | How should components interact, fail safely, and remain observable and maintainable? |
| **Developer experience** | How do we turn complex engineering ideas into runnable examples, clear diagrams, and useful learning paths? |

The recurring method is **build → evaluate → explain → teach → improve**.

## Featured work

### 01 · Agent From Zero — a focused runnable example
A small teaching example for understanding tool calling and the boundary between model output and code execution.

[Open the example →](pattern-to-production/agent-from-zero/part-2-tool/README.md)

### 02 · Agentic Regression Investigator — in progress
A synthetic reference design for connecting a code change to affected components, user journeys, test evidence, uncertainty, and recommended human review.

[Read the project brief →](projects/01-agentic-regression-investigator.md) · [Read the companion article →](articles/01-regression-was-a-context-problem.md)

### 03 · Production AI Application Engineering — architecture study
A learning blueprint covering application boundaries, retrieval, tool use, evaluation, observability, cost, latency, and safe operation.

[Read the project brief →](projects/02-production-ai-application.md)

## How each case study should work

For substantial topics, the intended learning path is:

- **30-second read:** the idea and why it matters.
- **2-minute explanation:** the architecture, flow, and trade-offs.
- **Inspectable evidence:** source references, diagrams, assumptions, and limitations.
- **Try it yourself:** runnable code and tests where an implementation exists.
- **Learn from failure:** edge cases, incorrect assumptions, and what changed after testing.

Not every topic in this casebook is a completed implementation. Each project states its current status; design documents are not presented as production systems.

## Explore the repository

- [Projects](projects/) — project briefs and implementation status
- [Articles](articles/) — engineering explanations
- [Diagrams](diagrams/) — visual models and architecture flows
- [Patterns](patterns/) — reusable engineering ideas
- [Pattern to Production](pattern-to-production/) — focused learning examples
- [Case Studies](case-studies/) — system investigations and applied reasoning
- [Research](research/) — references and technical exploration

## Engineering principles

- **Evidence over confident guesses.** Distinguish observed facts, inferences, and unknowns.
- **Bounded tools over unrestricted execution.** Validate inputs and keep sensitive actions under application or human control.
- **Tests over intuition.** Verify behavior, including failure and boundary cases.
- **Honest status over hype.** Label prototypes, studies, and incomplete work accurately.
- **Security by default.** Use synthetic examples; never publish employer code, customer data, tokens, or credentials.
- **Teach what you can demonstrate.** Prefer a reproducible example over a diagram alone.

## Connect

Follow the experiments and short-form explanations on **[Instagram · STOK.EED](https://www.instagram.com/stok.eed/)**, and connect professionally on **[LinkedIn](https://www.linkedin.com/in/nidhiverma200/)**.

If an idea from STOK.EED sparks a question, open an issue or discussion with the specific claim, example, or behavior you'd like to investigate.

---

<sub>MountainBridge is the casebook; STOK.EED is the public learning stream. The shared focus is engineering clarity: understand the system, test the claim, and explain the result.</sub>
