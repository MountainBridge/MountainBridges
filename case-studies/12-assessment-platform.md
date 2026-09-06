# Assessment Platform: Realistic Challenges, Quality Gates, and Trustworthy Evaluation

> **30-second read:** A serious technical assessment is a product, not a question bank. The platform must model realistic work, initialize reproducible environments, evaluate multiple signals, detect cheating and adversarial behaviour, and produce evidence that a decision-maker can trust.

> **2-minute read:** Build an assessment platform where candidates solve multi-file projects instead of isolated snippets. Each challenge has a problem statement, repository, setup contract, visible examples, hidden tests, evaluation rubric and expected failure modes. The platform records code, runtime outputs and selected interaction evidence. Scoring should combine deterministic correctness, engineering quality, task-specific behaviour and—in AI-native workflows—how well the candidate can explain and defend the system they built.

## Product to build

```text
Authoring studio
   ↓
Challenge specification
   ├── Problem
   ├── Repo / starter code
   ├── Environment
   ├── Tasks
   ├── Tests
   ├── Rubric
   └── Adversarial cases
          ↓
Candidate workspace
          ↓
Execution sandbox
          ↓
Evidence collection
          ↓
Scoring engine
   ├── deterministic checks
   ├── semantic evaluation
   ├── security / integrity
   └── human or AI review
          ↓
Candidate report
```

## Technology choices

| Concern | Technology | Why |
|---|---|---|
| Candidate UI | React + TypeScript | Interactive challenge workspace and result experience |
| Authoring UI | React + TypeScript | Complex challenge metadata and rubric management |
| API | Node.js + TypeScript / NestJS | Explicit domain modules and validation |
| Challenge metadata | PostgreSQL | Versioned challenge specs, rubrics and lifecycle state |
| Workspace | Docker containers | Isolation and reproducibility for multi-file project questions |
| Queue | Kafka / Redis Streams | Decouple submissions and long-running evaluation |
| Code execution | Isolated containers / sandbox | Resource limits and security boundaries |
| Test runner | Language-specific harnesses | Deterministic correctness signals |
| Search | OpenSearch | Challenge discovery, candidate/project metadata and analytics |
| Artifact store | Object storage | Submission ZIPs, logs, transcripts and evidence bundles |
| Evaluation | TypeScript/Python | Deterministic scoring plus model-based semantic checks |
| Observability | OpenTelemetry | Trace setup, execution and evaluation across services |

## HackerRank reference case

HackerRank's current Projects Questions are container-based, real-world challenges using multi-file codebases and integrated development environments. Their support material documents automatic scoring from unit tests and custom scoring logic, while the platform exposes Question Insights for analysing performance.

References:
- [Front-end, Back-end, Full-stack, Mobile, and QA Engineer Questions](https://support.hackerrank.com/articles/1570281449-creating-front-end%2C-back-end-full-stack-and-mobile-questions)
- [HackerRank Glossary](https://support.hackerrank.com/articles/3572240492-hackerrank-glossary)
- [Limitations With HackerRank Projects](https://support.hackerrank.com/articles/3052727240)
- [Test Cases in Coding and Approximate Solution Questions](https://support.hackerrank.com/articles/3245197419-test-cases-in-coding-questions)

This makes the platform problem concrete: **scale realistic assessment without letting quality, execution consistency, security or scoring integrity collapse.**

## Orchestrate: assessment as a multi-signal system

HackerRank's 2026 Orchestrate hackathon is an especially useful reference case. Participants built an agent for a real support-triage task; the submission was evaluated through code quality, output accuracy, AI interaction transcript and a technical AI-judge interview. The challenge bank included edge cases, prompt injection and jailbreak attempts.

References:
- [Behind the Scenes of HackerRank Orchestrate — HackerRank](https://www.hackerrank.com/blog/behind-the-scenes-of-hackerrank-orchestrate/)
- [What 12,885 Developers Taught Us About Building with AI — HackerRank](https://www.hackerrank.com/blog/what-12885-developers-taught-us-about-building-with-ai/)
- [The New Cheating Problem — HackerRank](https://www.hackerrank.com/blog/the-new-cheating-problem-and-why-the-answer-isnt-a-stricter-test/)

The reusable architecture is:

```text
Code
  ├── quality
  └── structure

Output
  ├── correctness
  └── safety

Process evidence
  └── AI/tool interaction

Defense
  └── explain architecture + trade-offs

                ↓
           Combined decision
```

The important lesson is that **no single observable signal is enough** when the platform is measuring practical technical capability.

## Designing a high-quality challenge

A challenge should have:

```text
Problem statement
   ↓
Persona / role
   ↓
Initial repo + environment
   ↓
Explicit constraints
   ↓
Happy path
   ↓
Hidden edge cases
   ↓
Adversarial inputs
   ↓
Expected behaviour
   ↓
Scoring rubric
   ↓
Canonical solution
   ↓
Hints / reviewer guidelines
```

The same structure is useful for internal training, public coding content, benchmark construction and hands-on technical workshops.

## Quality gates for question authors

Before publication:

1. **Clarity:** Can the candidate identify the real task without guessing hidden requirements?
2. **Transfer:** Does the task resemble a realistic engineering responsibility?
3. **Difficulty:** Is success determined by engineering reasoning rather than obscure trivia?
4. **Evaluation:** Can the rubric distinguish weak, adequate and strong solutions?
5. **Adversarial resilience:** What happens with malformed input, prompt injection, dependency failure or unexpected state?
6. **Reproducibility:** Does the same submission get evaluated consistently across isolated environments?
7. **Leak resistance:** Can the hidden answer be inferred from visible tests or public artefacts?

## Patterns

- containerized workspaces
- challenge-as-code
- reproducible environments
- hidden-test design
- rubric-driven evaluation
- multi-signal scoring
- adversarial test design
- human-in-the-loop review
- AI-as-judge with calibration
- anti-cheating / integrity design
- question analytics
- challenge lifecycle management

## Related casebook articles

[LLM Evaluation Is a Systems Problem](../articles/llm-evaluation-systems.md) — evaluation design and bounded semantic judgement.

[Failure Modes Before Features](../articles/failure-modes-before-features.md) — model the failure surface before finalizing a challenge.

[Reference Implementations](../articles/reference-implementations.md) — make the challenge environment and examples actually teach.

[Scaling Technical Knowledge](../patterns/scaling-technical-knowledge.md) — make authoring, contribution and maintenance scalable.

## Build target

Create a small assessment platform that can:

**author challenge → launch isolated workspace → run hidden/public tests → collect evidence → produce rubric-scored report → support reviewer override → analyse challenge quality**.

Then add an AI-native mode in which candidates can use coding agents but must submit the resulting code, outputs, and a structured explanation of architectural decisions.
