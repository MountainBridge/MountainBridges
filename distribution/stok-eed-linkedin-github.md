# STOK.EED ↔ LinkedIn ↔ GitHub Content System

## Purpose

STOK.EED, LinkedIn and GitHub are one content system.

They are not three separate brands publishing three separate streams.

- **STOK.EED** = discovery, visual learning and onboarding.
- **LinkedIn** = professional conversation, context and distribution.
- **GitHub** = proof, implementation, architecture and evidence.

The same engineering question should appear at different depths.

## The content contract

Every flagship idea follows:

```text
REAL PROBLEM
    ↓
STOK.EED
30–60 sec visual / carousel / hook
    ↓
LINKEDIN
story + lesson + question
    ↓
GITHUB
case study + architecture + code + evidence
    ↓
STOK.EED
recap + visual mental model + CTA
```

## Four STOK.EED franchises

### 1. CRACK IT

Interview-oriented engineering reasoning.

Examples:
- Design a payment system.
- Why does idempotency matter?
- How would you debug a slow API?
- What happens when Kafka delivers an event twice?
- How do you explain a system-design trade-off?

CTA:
**Save it. Explain it. Build it.**

### 2. BUILD IT

Real-world engineering systems.

Examples:
- Banking platform.
- Event-streaming platform.
- Workflow platform.
- Regression Investigator.
- AI evaluation system.

CTA:
**Architecture on GitHub →**

### 3. UNDERSTAND IT

Concepts explained visually.

Examples:
- source of truth vs derived state
- sync vs async
- cache invalidation
- idempotency
- event-driven architecture
- context engineering
- evaluation vs generation

CTA:
**Full mental model → LinkedIn / GitHub**

### 4. MARKET READY

Career and portfolio readiness.

Examples:
- What hiring teams can actually infer from a GitHub repo.
- How to turn a project into a case study.
- How to explain architecture in an interview.
- How to show AI fluency without claiming AI expertise you cannot demonstrate.
- How to make a portfolio tell an engineering story.

CTA:
**Build your evidence →**

## First flagship narrative: Context → Quality

The strongest current cross-platform story is the Regression Investigator.

### STOK.EED hook

> **Your regression test failed.  
> That doesn't tell you what changed.**

Visual:
Change → affected journey → dependency → evidence → investigation → human decision.

### LinkedIn post

> We had a testing problem that wasn't really a testing problem.
>
> The question wasn't:
>
> **"Can we generate more tests?"**
>
> It was:
>
> **"Given this change, what could it affect — and what evidence do we have?"**
>
> That led us to context engineering:
>
> source code + user journeys + dependencies + contracts + test intent + versions + evidence.
>
> The goal isn't an AI that declares production safe.
>
> The goal is an investigator that can explain:
>
> **what changed → what might be affected → what evidence supports it → what should be investigated next.**
>
> Humans still decide.
>
> Full engineering model → GitHub.

### GitHub

The deep dive should contain:
- problem
- users/personas
- journey
- context sources
- change model
- dependency/blast-radius model
- evidence model
- agent loop
- deterministic authority
- uncertainty
- evaluation
- failure cases
- reproducible implementation where safe

## Second flagship narrative: Money → State

### STOK.EED hook

> **A payment can succeed twice.  
> Your system cannot.**

Then explain:
request → idempotency key → payment state → ledger → event → reconciliation.

GitHub becomes the banking architecture case study.

## Third flagship narrative: Complexity → Self Service

### STOK.EED hook

> **3,000 workflows.  
> The problem wasn't capability.  
> It was configuration friction.**

LinkedIn explains the product/engineering decision.

GitHub documents the architecture and reusable patterns.

## Publishing rules

1. Start with the **engineering question**, not the technology.
2. Every post must teach one reusable mental model.
3. Every major claim must have a source or be explicitly labelled as a design/experience claim.
4. Do not expose proprietary JPMorganChase implementation details.
5. Generalize enterprise examples honestly.
6. AI claims must distinguish experiment, evidence and opinion.
7. GitHub is the source of truth for technical depth.
8. LinkedIn is the source of truth for professional discussion.
9. STOK.EED is the source of truth for the visual learning experience.
10. Never make all three platforms identical copies.

## Weekly rhythm

### Tuesday — STOK.EED
One visual engineering question.

### Wednesday — LinkedIn
The story behind that question:
problem → insight → trade-off → question to the community.

### Thursday — GitHub
Case-study update, architecture diagram, runnable experiment or evidence.

### Saturday — STOK.EED
A visual recap, interview challenge or market-readiness lesson.

### Monthly — deep dive
One substantial GitHub case study + LinkedIn article/post + STOK.EED visual series.

## The traction loop

Do not optimize for posting volume.

Measure:

**STOK.EED**
- saves
- shares
- profile visits
- follows
- comments/questions

**LinkedIn**
- relevant profile views
- comments from engineers/hiring leaders
- connection requests
- GitHub clicks
- invitations to speak/collaborate

**GitHub**
- unique visitors
- clones
- stars
- forks
- issues/discussions
- people running the project
- external contributors

The strongest early signal is not a star.

It is:

> **Someone you don't know tries the work, asks a technical question, or builds on it.**

## The brand promise

> **STOK.EED helps engineers crack interviews, build real-world skills and become market-ready.**

The technical proof behind that promise lives in MountainBridge.

