# Engineering Bibliography

This bibliography records the external sources used to shape the 2026 engineering radar, portfolio articles, and implementation roadmap. Sources are grouped by the engineering claim they support rather than treated as a generic reading list.

## Banking platform: production engineering references

1. Stripe — **Idempotent requests / API v2 idempotency**. Primary API documentation supporting safe retries, idempotency keys and replay semantics for mutating requests.
   https://docs.stripe.com/api/idempotent_requests
   https://docs.stripe.com/api-v2-overview

2. Monzo — **How we built a queue on top of Kafka** (January 25, 2024). Documents why Monzo adopted Kafka for durability, its queue abstraction, dead-lettering, concurrent processing and the distinction between workloads that do and do not require ordering.
   https://monzo.com/blog/how-we-built-a-queue-on-top-of-kafka

3. Monzo — **Vertically scaling ordered consumption using Kafka** (October 29, 2024). Documents the difference between unordered concurrent processing and workloads that genuinely require ordering or mutual exclusion.
   https://monzo.com/blog/vertically-scaling-ordered-consumption-using-kafka

4. Monzo — **Redefining our microservice development process** (June 23, 2022). Documents the benefits and operational/developer-experience complexity of running thousands of microservices.
   https://monzo.com/blog/2022/06/24/redefining-our-microservice-development-process

5. Monzo — **How we run migrations across 2,800 microservices** (August 26, 2024). Documents the operational trade-offs created by a very large microservice estate.
   https://monzo.com/blog/how-we-run-migrations-across-2800-microservices

6. HSBC — **Technology and financial crime**. Primary company source describing the use of machine learning and advanced analytics across customer and transaction data and reporting approximately 980 million transactions monitored per month on average.
   https://www.hsbc.com/who-we-are/esg-and-responsible-business/fighting-financial-crime/technology

7. AWS Prescriptive Guidance — **Transactional outbox pattern**. Primary engineering guidance for database/event dual-write consistency, outbox tables, CDC, idempotent consumers and saga-related trade-offs.
   https://docs.aws.amazon.com/en_en/prescriptive-guidance/latest/cloud-design-patterns/transactional-outbox.html

8. AWS Prescriptive Guidance — **Cloud design patterns**. Primary reference for event sourcing, publish-subscribe, retry, saga, circuit breaker, synchronous/asynchronous communication and related alternatives.
   https://docs.aws.amazon.com/en_en/prescriptive-guidance/latest/cloud-design-patterns/introduction.html

9. AWS Prescriptive Guidance — **Choosing a coordination approach**. Describes when orchestration versus choreography is appropriate and why distributed transactions often require saga-style coordination.
   https://docs.aws.amazon.com/prescriptive-guidance/latest/modernization-integrating-microservices/choosing-approach.html

## Banking platform: academic and research evidence

10. **Detecting Credit Card Fraud via Heterogeneous Graph Neural Networks with Graph Attention**. Research supporting the use of heterogeneous transaction/entity relationships in fraud detection.
   https://arxiv.org/abs/2504.08183

11. **An experimental study on fairness-aware machine learning for credit scoring problems** — Digital Finance (2026). Open-access research on fairness-aware ML for credit scoring; authors include researchers from the Graduate University of Science and Technology / Vietnam Academy of Science and Technology, Hanoi University of Science and Technology, Banking Academy of Vietnam and University of Koblenz.
   https://link.springer.com/article/10.1007/s42521-026-00202-6

12. Kozodoi, Jacob & Lessmann — **Fairness in credit scoring: Assessment, implementation and profit implications** — European Journal of Operational Research. Empirical work examining fairness processors against prediction performance and profitability using real-world credit-scoring datasets.
   https://www.sciencedirect.com/science/article/pii/S0377221721005385

13. **The Fairness of Credit Scoring Models** — Management Science. Research on fairness in credit-scoring models and the sources of unfairness in data/model design.
   https://pubsonline.informs.org/doi/abs/10.1287/mnsc.2022.03888

## AI agent engineering, evaluation and observability

14. LangChain — **State of Agent Engineering (2026)**. Survey of 1,300+ professionals covering production adoption, observability, offline/online evaluation, and LLM-as-a-judge usage.
   https://www.langchain.com/state-of-agent-engineering

15. LangChain — **Evaluating AI Agents at the Run, Trace, and Thread Level** (June 23, 2026). Supports evaluating agent execution paths, tool calls, context and conversation state in addition to final outputs.
   https://www.langchain.com/resources/agent-evals

16. LangChain — **LLM Evals: The Feedback Loop Behind Reliable AI Agents** (March 10, 2026). Supports the idea that evals should become release gates and that production failures can become regression examples.
   https://www.langchain.com/resources/llm-evals

17. LangChain — **LLM observability & monitoring: how to evaluate agent behavior** (March 3, 2026). Supports the observability-to-evaluation feedback loop and trace-driven regression coverage.
   https://www.langchain.com/resources/llm-monitoring-observability

## Agent protocols and interoperability

18. Model Context Protocol — **2026-07-28 Specification**. Primary protocol source for the 2026 MCP architecture, including the stateless protocol core, routing, caching, authorization hardening, Tasks and extensions.
   https://blog.modelcontextprotocol.io/posts/2026-07-28/

19. Model Context Protocol — **2026-07-28 Specification Release Candidate**. Earlier release-candidate description of the stateless core, Extensions framework, Tasks, MCP Apps and authorization changes.
   https://blog.modelcontextprotocol.io/posts/2026-07-28-release-candidate/

20. Model Context Protocol — **The New MCP Roadmap** (August 22, 2026). Primary roadmap source for agentic messaging, HTTP-native transport, enterprise security and SDK direction.
   https://blog.modelcontextprotocol.io/posts/mcp-roadmap/

## Reproducibility and research-to-engineering practice

21. Hugging Face / ICML 2026 Open Reproductions — **What We Learned by Reproducing 2,200 papers from ICML** (August 13, 2026). Supports claim-by-claim reproduction, agent-assisted experiments, public traces/artifacts, and the need to distinguish verified, contested and inconclusive results.
   https://huggingface.co/blog/icml-2026-open-reproductions

22. Hugging Face — **ICML 2026 Agent Reproductions challenge**. Primary challenge specification for agent-assisted reproduction, experiment records, evidence and published logbooks.
   https://huggingface.co/ICML-2026-agent-repro

23. Hugging Face — **ICML 2026 Reproductions challenge guide**. Describes reproducible experiment expectations, scaled runs, evidence capture and handoff-ready logbooks.
   https://huggingface.co/ICML-2026-agent-repro/challenge

24. alphaXiv — research discovery and paper discussion platform.
   https://www.alphaxiv.org/

## How to use this bibliography

- Cite primary specifications, first-party company engineering reports and peer-reviewed research for architecture claims.
- Use university, journal, conference, publisher or institutional sources when they are available; use research-discovery platforms such as alphaXiv to discover papers, not as the only authority.
- Treat survey results as market signals, not universal engineering requirements.
- Treat research papers as hypotheses to reproduce or test, not automatic technology recommendations.
- Treat company engineering blogs as evidence of a company's context and trade-offs, not proof that the same architecture is correct everywhere.
- For every portfolio POC, record the source, concrete engineering question, baseline, experiment, failure cases and conclusion.
- Prefer dated sources when a claim is explicitly about 2026 market practice.

## Portfolio terminology

**LLM-as-a-judge:** an automated evaluator in which an LLM scores or classifies another model/agent's behavior against a defined rubric. Use it as one layer of evaluation rather than as the sole source of truth.

**Agent evaluation:** evaluate the output plus relevant execution evidence such as tool selection, arguments, context/retrieval, state transitions and policy compliance when those dimensions affect correctness or risk.

**Context engineering:** treat context selection, structure, freshness, provenance and tool/data boundaries as an engineered system rather than only a prompt-writing exercise.
