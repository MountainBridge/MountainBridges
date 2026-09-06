# Making AI Systems Production-Ready

A prototype answers: **can the model do this?**

A production system has to answer a different set of questions: **when should it act, what context may it use, how do we know it is right, and what happens when it is wrong?**

## Start with the boundary

The model should not own every decision.

A safer architecture separates responsibilities:

```text
User intent
    ↓
Policy / validation
    ↓
Context assembly
    ↓
Model reasoning
    ↓
Tool / action boundary
    ↓
Verification
    ↓
User-visible result
```

This makes it easier to reason about where uncertainty is introduced.

## Define the contract

Before tuning prompts, define what the system promises.

| Area | Questions |
|---|---|
| Inputs | What data is accepted? |
| Context | What sources are authoritative? |
| Output | What must be true about the result? |
| Actions | Which actions require approval? |
| Failure | What must trigger refusal or review? |
| Evidence | What can we inspect after execution? |

A strong contract constrains both the model and the surrounding software.

## Make uncertainty visible

Not every model output deserves the same treatment.

A simple policy can route results based on confidence and risk:

```text
Model result
   ↓
Risk + evidence assessment
   ├── low risk / strong evidence → continue
   ├── ambiguous                → request clarification
   └── high risk / weak evidence → human review
```

The exact thresholds should be domain-specific. The pattern is to make uncertainty a first-class system state.

## Evaluate changes as system changes

Changing a model version, retrieval strategy, prompt, tool schema, or context source can change behaviour even when application code is untouched.

That means the regression surface includes:

- prompts and instructions
- retrieved context
- tool definitions
- model versions
- policies and guardrails
- evaluation rubrics
- downstream integrations

The release unit is the behaviour of the system, not just the source-code diff.

## Build observability around decisions

Useful telemetry captures enough information to answer:

```text
What was requested?
What context was supplied?
What path was taken?
What tools were called?
What evidence was produced?
Why was the result accepted or rejected?
```

Sensitive data should be handled according to the system's security and privacy requirements; observability should improve diagnosability without becoming an uncontrolled copy of the underlying data.

## Production readiness checklist

A serious AI system should have explicit answers for:

- failure and fallback behaviour
- evaluation coverage
- latency and cost budgets
- data boundaries
- prompt / model versioning
- tool permissions
- rollback strategy
- human-review thresholds
- monitoring and incident response

## The principle

AI becomes an engineering problem when it crosses into production.

The solution is not to remove uncertainty. It is to **bound it, measure it, expose it, and design the surrounding system so one uncertain component cannot silently become a system-wide failure**.
