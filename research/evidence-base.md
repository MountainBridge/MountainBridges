# Research & Evidence Base

This is the evidence layer behind the engineering casebook. It favors primary research, first-party engineering documentation and empirical studies over generic summaries.

The intent is traceability:

**evidence → principle → pattern → architecture → implementation → measurement → feedback**

## 1. Developer productivity, flow and friction

### Developer Productivity for Humans
Christopher Jaspan, Green, et al., IEEE Software (2023).

**Core idea:** developer productivity is a human and sociotechnical problem; technology and social conditions need to be considered together.

Source: https://research.google/pubs/developer-productivity-for-humans-a-human-centered-approach-to-developer-productivity/

### Measuring Flow and Friction for Developers
Brown, Chang, Holtz, D'Angelo, IEEE (2023).

**Core idea:** measuring flow and friction complements raw output measures.

Source: https://research.google/pubs/measuring-flow-and-friction-for-developers-part-6-measuring-flow-and-friction-for-developers/

### What Improves Developer Productivity at Google? Code Quality
Cheng, Murphy-Hill, et al. (2022).

**Core idea:** code quality, technical debt, infrastructure/tools/support, communication and priorities are associated with perceived productivity.

Source: https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/

### Measuring Developer Goals
Ferrari-Church and Egelman, IEEE Software (2024).

**Core idea:** developer goals benefit from behavioral and sentiment-oriented measurement.

Source: https://research.google/pubs/measuring-developer-goals/

## 2. Onboarding and knowledge transfer

### A Case Study of Onboarding in Software Teams: Tasks and Strategies
An Ju, Hitesh Sajnani, Scot Kelly, Kim Herzig (2021).

Source: https://arxiv.org/abs/2103.05055

### Software Solutions for Newcomers' Onboarding in Software Projects: A Systematic Literature Review
Santos, Felizardo, Gerosa, Steinmacher (2024).

Source: https://arxiv.org/abs/2408.15989

### Please Turn Your Cameras On: Remote Onboarding of Software Developers during a Pandemic
Rodeghero, Zimmermann, Houck, Ford (2021).

**Core idea:** remote onboarding creates distinctive challenges around social connection and team integration.

alphaXiv: https://www.alphaxiv.org/abs/2011.08130

### Restructure This: Using AI to Restructure Onboarding Documents to Reduce Cognitive Overload
Feng, Tandan, Steinmacher, Gerosa, Sarma (2026).

Source: https://arxiv.org/abs/2605.19174

## 3. Architecture, decisions and distributed alignment

### Architecture Decision Record
Martin Fowler, updated 2026.

Source: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html

### Scaling the Practice of Architecture, Conversationally
Andrew Harmel-Law (2021).

Source: https://martinfowler.com/articles/scaling-architecture-conversationally.html

### Building Infrastructure Platforms
Martin Fowler / Thoughtworks.

Source: https://www.martinfowler.com/articles/building-infrastructure-platform.html

## 4. Discoverability, documentation and ownership

### The Spotify Story — Backstage
Spotify / Backstage.

Source: https://backstage.io/docs/overview/background/

### Announcing TechDocs
Spotify / Backstage (2020).

Source: https://backstage.io/blog/2020/09/08/announcing-tech-docs/

## 5. Golden paths and self-service

### Golden Paths for Engineering Execution Consistency
Google Cloud.

Source: https://cloud.google.com/blog/products/application-development/golden-paths-for-engineering-execution-consistency

### Platform Engineering
Google Cloud.

Source: https://cloud.google.com/solutions/platform-engineering

## 6. Consistency through patterns and automation

### From Ruby to Node: Overhauling Shopify's CLI
Shopify Engineering.

Source: https://shopify.engineering/overhauling-shopify-cli-for-a-better-developer-experience

### InnerSource Patterns
InnerSource Commons.

Source: https://patterns.innersourcecommons.org/

### Extensions for Sustainable Growth
InnerSource Commons.

Source: https://patterns.innersourcecommons.org/p/extensions-for-sustainable-growth

## 7. Software delivery and AI adoption

### State of AI-assisted Software Development 2025
DORA / Google.

Source: https://dora.dev/research/2025/dora-report/

### DORA AI Capabilities Model
DORA / Google Cloud.

Source: https://dora.dev/ai/capabilities-model/report/

### The State of Generative AI in Software Development: Insights from Literature and a Developer Survey
Gurgul, Gubela, Lessmann (2026).

**Core idea:** routine GenAI benefits can be strong while planning and requirements work remain harder; the authors point toward specification quality, architectural reasoning and oversight as increasingly important.

alphaXiv: https://www.alphaxiv.org/abs/2603.16975

## 8. LLM, RAG and repository-scale evaluation

### A Survey on LLM-as-a-Judge
Gu, Jiang, Shi, et al. (2025).

**Core idea:** model-based judging is scalable but raises reliability, consistency and bias concerns.

alphaXiv: https://www.alphaxiv.org/abs/2411.15594

### Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena
Zheng, Chiang, Sheng, et al. (2023).

**Core idea:** strong LLM judges can correlate well with human preferences, but position, verbosity and other biases need mitigation.

alphaXiv: https://www.alphaxiv.org/abs/2306.05685

### Large Language Models are not Fair Evaluators
Wang, Li, Chen, et al. (2023).

**Core idea:** changing response order can materially change an LLM judge's ranking; calibration strategies can reduce this bias.

alphaXiv: https://www.alphaxiv.org/abs/2305.17926

### Evaluation of Retrieval-Augmented Generation: A Survey
Yu, Gan, Zhang, et al. (2024).

**Core idea:** evaluate retrieval and generation together, including relevance, accuracy and faithfulness.

alphaXiv: https://www.alphaxiv.org/replicate/2405.07437

### Retrieval Augmented Generation Evaluation in the Era of Large Language Models
Gan, Yu, Zhang, et al. (2025).

Source: https://arxiv.org/abs/2504.14891

### SWE-bench: Can Language Models Resolve Real-World GitHub Issues?
Jimenez, Yang, Wettig, Yao, Pei, Press, Narasimhan (2024).

**Core idea:** repository-level software engineering requires long-context understanding, multi-file coordination and interaction with a real codebase.

alphaXiv: https://www.alphaxiv.org/abs/2310.06770

### SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering
2024.

alphaXiv: https://www.alphaxiv.org/abs/2405.15793

### RepoCoder: Repository-Level Code Completion Through Iterative Retrieval and Generation
Zhang, Chen, Zhang, et al. (2023).

**Core idea:** useful repository context is distributed across files; iterative retrieval can make that context available to code models.

alphaXiv: https://www.alphaxiv.org/abs/2303.12570

### CodeRAG: Finding Relevant and Necessary Knowledge for Retrieval-Augmented Repository-Level Code Completion
2025.

alphaXiv: https://www.alphaxiv.org/abs/2509.16112

### AlignCoder: Aligning Retrieval with Target Intent for Repository-Level Code Completion
2026.

alphaXiv: https://www.alphaxiv.org/abs/2601.19697

## How the sources map to the casebook

| Case | Core evidence |
|---|---|
| 01 — Information fragments | Developer productivity + onboarding + Backstage/TechDocs |
| 02 — Paved road without a prison | Golden Paths + platform engineering + documentation ownership |
| 03 — Contribution creates fragmentation | Shopify CLI + InnerSource + automation |
| 04 — AI looks right but is wrong | RAG evaluation + LLM-as-a-Judge + calibration |
| 05 — Regression becomes a knowledge problem | Context/repository research + evaluation + decision records |

## Bibliography policy

Prefer primary papers, official engineering documentation, empirical studies and first-party engineering write-ups. Every new source should record what it supports, where it is used, and what its limits are.
