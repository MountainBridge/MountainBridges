# Engineering Bibliography

This bibliography records the external sources used to shape the 2026 engineering radar, portfolio articles, and implementation roadmap. Sources are grouped by the engineering claim they support rather than treated as a generic reading list.

## AI agent engineering, evaluation and observability

1. LangChain — **State of Agent Engineering (2026)**. Survey of 1,300+ professionals covering production adoption, observability, offline/online evaluation, and LLM-as-a-judge usage.
   https://www.langchain.com/state-of-agent-engineering

2. LangChain — **Evaluating AI Agents at the Run, Trace, and Thread Level** (June 23, 2026). Supports evaluating agent execution paths, tool calls, context and conversation state in addition to final outputs.
   https://www.langchain.com/resources/agent-evals

3. LangChain — **LLM Evals: The Feedback Loop Behind Reliable AI Agents** (March 10, 2026). Supports the idea that evals should become release gates and that production failures can become regression examples.
   https://www.langchain.com/resources/llm-evals

4. LangChain — **LLM observability & monitoring: how to evaluate agent behavior** (March 3, 2026). Supports the observability-to-evaluation feedback loop and trace-driven regression coverage.
   https://www.langchain.com/resources/llm-monitoring-observability

## Agent protocols and interoperability

5. Model Context Protocol — **2026-07-28 Specification**. Primary protocol source for the 2026 MCP architecture, including the stateless protocol core, routing, caching, authorization hardening, Tasks and extensions.
   https://blog.modelcontextprotocol.io/posts/2026-07-28/

6. Model Context Protocol — **2026-07-28 Specification Release Candidate**. Earlier release-candidate description of the stateless core, Extensions framework, Tasks, MCP Apps and authorization changes.
   https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/

7. Model Context Protocol — **The New MCP Roadmap** (August 22, 2026). Primary roadmap source for agentic messaging, HTTP-native transport, enterprise security and SDK direction.
   https://blog.modelcontextprotocol.io/posts/mcp-roadmap/

## Reproducibility and research-to-engineering practice

8. Hugging Face / ICML 2026 Open Reproductions — **What We Learned by Reproducing 2,200 papers from ICML** (August 13, 2026). Supports claim-by-claim reproduction, agent-assisted experiments, public traces/artifacts, and the need to distinguish verified, contested and inconclusive results.
   https://huggingface.co/blog/icml-2026-open-reproductions

9. Hugging Face — **ICML 2026 Agent Reproductions challenge**. Primary challenge specification for agent-assisted reproduction, experiment records, evidence and published logbooks.
   https://huggingface.co/ICML-2026-agent-repro

10. Hugging Face — **ICML 2026 Reproductions challenge guide**. Describes reproducible experiment expectations, scaled runs, evidence capture and handoff-ready logbooks.
   https://huggingface.co/ICML-2026-agent-repro/challenge

11. alphaXiv — research discovery and paper discussion platform.
   https://www.alphaxiv.org/

## How to use this bibliography

- Cite primary specifications and first-party engineering reports for architecture claims.
- Treat survey results as market signals, not universal engineering requirements.
- Treat research papers as hypotheses to reproduce or test, not automatic technology recommendations.
- For every portfolio POC, record the source, concrete engineering question, baseline, experiment, failure cases and conclusion.
- Prefer dated sources when a claim is explicitly about 2026 market practice.

## Portfolio terminology

**LLM-as-a-judge:** an automated evaluator in which an LLM scores or classifies another model/agent's behavior against a defined rubric. Use it as one layer of evaluation rather than as the sole source of truth.

**Agent evaluation:** evaluate the output plus relevant execution evidence such as tool selection, arguments, context/retrieval, state transitions and policy compliance when those dimensions affect correctness or risk.

**Context engineering:** treat context selection, structure, freshness, provenance and tool/data boundaries as an engineered system rather than only a prompt-writing exercise.
