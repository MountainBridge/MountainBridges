# 02 — Production AI Application Engineering

## The problem

A chatbot demo can prove that an LLM responds. It does not prove that an AI application can be built, evaluated, observed, secured and operated as a real software system.

This project is a public, synthetic reference application for learning how to take an AI feature from **user experience to production engineering**.

It must not contain employer source code, credentials, customer data or proprietary workflows.

## End-to-end architecture

```text
Developer / User
      ↓
React + TypeScript UI
      ↓
API / Auth / Streaming
      ↓
AI Application Layer
   ┌──┼───────────────┐
   ↓  ↓               ↓
 RAG Tools / MCP   Agent Workflow
   └──┼───────────────┘
      ↓
Ground Truth + Evaluation
      ↓
Regression / Safety / Quality Checks
      ↓
Observability + Cost + Failure Analysis
      ↓
CI/CD → Deployment → Feedback
```

## What the project demonstrates

### Full-stack engineering

- React + TypeScript frontend
- Backend API layer
- Authentication and authorization
- Streaming responses
- Persistence and data access
- Error handling and retries

### AI engineering

- Retrieval-augmented generation
- Tool calling
- Agent workflows with bounded responsibilities
- Context construction
- Prompt and context versioning
- Ground-truth datasets
- Evaluation before deployment

### AI quality engineering

The application treats AI behaviour as software behaviour that needs testing.

The test model includes:

- deterministic functional checks
- retrieval quality checks
- expected-answer evaluation
- hallucination / unsupported-claim checks
- null and missing-context cases
- adversarial and boundary inputs
- latency and cost measurements
- regression against a versioned evaluation set

The goal is not to make an LLM produce a perfect score. The goal is to make **changes observable and explainable**.

## Developer experience layer

Every implementation decision becomes part of the learning surface:

```text
Architecture
    ↓
Runnable Example
    ↓
Test / Failure
    ↓
Explanation
    ↓
Tutorial
    ↓
Workshop
    ↓
Developer Feedback
    ↓
Improved Example
```

The repository therefore contains:

- architecture diagrams
- setup guide
- API examples
- evaluation walkthrough
- failure-mode examples
- troubleshooting guide
- tutorial chapters
- workshop exercises
- contribution guide

## Production-readiness checklist

Before calling an AI feature production-ready, the reference implementation asks:

- What is the source of truth?
- How is context retrieved and refreshed?
- How do we know an answer is correct?
- What happens when retrieval fails?
- What happens when the model refuses or hallucinates?
- Can we reproduce a regression?
- What changed between model or prompt versions?
- What does the request cost?
- What is the latency distribution?
- What telemetry lets an engineer investigate failure?
- What can the agent do, and what must remain human-controlled?
- How does the application fail safely?

## DevRel outcome

The finished project should let another developer clone a working AI application, understand its architecture, deliberately break part of it, run the evaluation suite, inspect the evidence and learn how the system was designed to recover.

That is the intended proof of senior full-stack DevRel capability:

**build the system → evaluate the system → explain the system → teach the system → improve it from developer feedback.**
