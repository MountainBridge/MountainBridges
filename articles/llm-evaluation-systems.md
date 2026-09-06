# LLM Evaluation Is a Systems Problem, Not Just a Prompt Problem

> **30-second read:** A fluent answer is not proof that an AI system worked. Evaluate the full path—intent, context, retrieval, tools, output and decision—and make every verdict traceable to evidence.

> **2-minute read:** Think of an AI evaluation system like software testing for behaviour rather than strings. First define the user journey and what “correct” means. Then test execution, representative scenarios, edge cases and downstream impact. Use deterministic assertions for deterministic properties and model-based judges only for genuinely semantic properties. A judge should receive the scenario, rubric, permitted evidence, calibration examples and explicit failure conditions. Research shows LLM judges can correlate well with human preferences in some settings, but also exhibit biases such as position sensitivity; the engineering answer is calibration, multiple evidence signals and human escalation for uncertain cases.

## The real problem

When teams start testing LLM-powered systems, it is tempting to evaluate the prompt and final answer.

That misses most of the system.

A useful evaluation model follows the complete journey:

```text
Persona / intent
      ↓
Input + retrieved context
      ↓
Instructions / prompt
      ↓
Model + tools
      ↓
Output / action
      ↓
Evaluation evidence
      ↓
Decision + feedback
```

A plausible answer can still be a failed system outcome.

## What the research changes

### 1. LLM judges are useful, but not neutral

Zheng et al. found that strong LLM judges can reach high agreement with human preferences in conversational evaluation, while also identifying biases such as position and verbosity.

Wang et al. showed that simply changing the order in which responses appear can materially change an LLM judge's ranking. Their mitigation strategies include multiple evidence, balanced ordering and human-in-the-loop calibration.

**Engineering implication:** never treat one model-generated score as ground truth.

### 2. Evaluate retrieval and generation together

RAG evaluation research treats retrieval quality, relevance, factuality/faithfulness and generation quality as connected parts of the same system.

**Engineering implication:** a bad answer may be caused by retrieval, context assembly or generation; your test should identify which layer failed.

### 3. Evaluate in the environment where the work actually happens

SWE-bench evaluates models on real GitHub issues and corresponding code changes rather than isolated coding questions. SWE-agent then studies how the surrounding agent-computer interface affects repository-level software engineering performance.

**Engineering implication:** realistic tasks expose failure modes that toy prompts hide.

## Test the journey, not just the response

For an important scenario, capture the contract around the response:

| Dimension | What to define |
|---|---|
| Persona | Who is using the system? |
| Intent | What are they trying to accomplish? |
| Context | What information is the model allowed to use? |
| Behaviour | What should the system do? |
| Output | What form and properties should the result have? |
| Failure | What must never happen? |
| Evidence | What observations support the verdict? |

This makes evaluation explainable and reproducible.

## Evaluation layers

**L1 — execution** → does the workflow run and return a structurally valid result?

**L2 — scenario correctness** → does it satisfy representative user journeys?

**L3 — edge and failure behaviour** → what happens with missing, conflicting, adversarial or malformed inputs?

**L4 — system impact** → what changed upstream or downstream, and which behaviours could have shifted?

The higher the layer, the more context the evaluator needs.

## A bounded evaluation architecture

```text
Repository / specifications
           ↓
     Context extraction
           ↓
  Knowledge artifacts
     ↙        ↓        ↘
journeys   contracts  dependencies
     \        |        /
       Scenario selection
              ↓
     Candidate test cases
              ↓
  Deterministic + semantic checks
              ↓
       Evidence store
              ↓
       Human review / release gate
```

For semantic evaluation:

```text
Output
  ↓
Scenario + rubric + evidence
  ↓
Semantic evaluator
  ↓
Score + rationale + confidence
  ↓
Threshold
 ↙       ↓       ↘
pass   review    fail
```

Deterministic properties should stay deterministic. Semantic properties can use semantic evaluation.

## Context is the hidden variable

Compare two evaluators.

One sees only:

```text
Prompt + answer
```

The other sees:

```text
Persona
Journey
Input contract
Expected behaviour
Relevant dependencies
Known failure modes
Change history
```

The second can judge whether the system actually satisfied the task instead of merely producing a plausible sentence.

A 2025 context-engineering survey places retrieval, processing and management of contextual information alongside RAG, memory, tools and multi-agent systems as a unified design space.

## Failure modes worth testing explicitly

- correct-looking but unsupported answers
- stale or irrelevant retrieved context
- instruction conflicts
- tool calls that are syntactically valid but semantically wrong
- inconsistent output across equivalent inputs
- evaluation drift after model or prompt changes
- regressions caused by a dependency rather than the changed component
- judge bias caused by presentation order or evaluator configuration

## The practical rule

The goal is not to make a model sound more confident.

The goal is to make the **system's behaviour measurable, explainable and safe to change**.

> Better AI evaluation comes from better context, clearer contracts, stronger evidence and bounded judgement—not simply from a better prompt.

## Papers & further reading

### Core evaluation
- [A Survey on LLM-as-a-Judge — alphaXiv](https://www.alphaxiv.org/abs/2411.15594)
- [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena — alphaXiv](https://www.alphaxiv.org/abs/2306.05685)
- [Large Language Models are not Fair Evaluators — alphaXiv](https://www.alphaxiv.org/abs/2305.17926)
- [LLMs-as-Judges: A Comprehensive Survey on LLM-based Evaluation Methods — alphaXiv](https://www.alphaxiv.org/abs/2412.05579)

### Retrieval and context
- [Evaluation of Retrieval-Augmented Generation: A Survey — alphaXiv](https://www.alphaxiv.org/replicate/2405.07437)
- [Retrieval Augmented Generation Evaluation in the Era of Large Language Models — arXiv](https://arxiv.org/abs/2504.14891)
- [A Survey of Context Engineering for Large Language Models — alphaXiv](https://www.alphaxiv.org/abs/2507.13334)

### Software engineering agents
- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues? — alphaXiv](https://www.alphaxiv.org/abs/2310.06770)
- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering — alphaXiv](https://www.alphaxiv.org/abs/2405.15793)
- [Agentless: Demystifying LLM-based Software Engineering Agents — alphaXiv](https://www.alphaxiv.org/abs/2407.01489)
- [CodeJudgeBench: Benchmarking LLM-as-a-Judge for Coding Tasks — alphaXiv](https://www.alphaxiv.org/abs/2507.10535)

### Reliability and reasoning
- [Chain-of-Thought Prompting Elicits Reasoning in Large Language Models — alphaXiv](https://www.alphaxiv.org/abs/2201.11903)
- [Agent-as-a-Judge — alphaXiv](https://www.alphaxiv.org/abs/2601.05111)

## Bibliography rule

Each paper should earn its place by changing a design decision, evaluation strategy, architecture, failure-mode analysis or implementation pattern in this portfolio. Prefer the original paper, current version, and a canonical project or benchmark link where one exists.
