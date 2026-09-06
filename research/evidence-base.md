# Evidence Base

This portfolio uses a small set of durable research and practitioner sources to ground its engineering patterns. The purpose is not to reproduce the source material, but to extract reusable principles and make the provenance visible.

## 1. Developer experience, flow and friction

### Developer Productivity for Humans
Christopher Jaspan, Green, et al., IEEE Software (2023).

Key idea: developer productivity is a human and sociotechnical problem; technology and social conditions need to be considered together.

Use in this portfolio:
- optimize for flow, feedback and cognitive load rather than activity counts
- treat developer friction as an engineering signal
- evaluate systems through both human and technical outcomes

Source: https://research.google/pubs/developer-productivity-for-humans-a-human-centered-approach-to-developer-productivity/

### Measuring Flow and Friction for Developers
Brown, Chang, Holtz, D'Angelo, IEEE (2023).

Key idea: measuring the experience of flow and friction gives a more useful view of developer experience than raw output alone.

Source: https://research.google/pubs/measuring-flow-and-friction-for-developers-part-6-measuring-flow-and-friction-for-developers/

### What Improves Developer Productivity at Google? Code Quality.
Cheng, Murphy-Hill, et al., Foundations of Software Engineering industry paper (2022).

Key idea: code quality, technical debt, infrastructure support, communication, priorities and organizational change are all linked to perceived developer productivity.

Source: https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/

### Measuring Developer Goals
Ferrari-Church and Egelman, IEEE Software (2024).

Key idea: developer goals should be observable and understood through both behavioral and sentiment data.

Source: https://research.google/pubs/measuring-developer-goals/

## 2. Onboarding and knowledge transfer

### Software Solutions for Newcomers' Onboarding in Software Projects: A Systematic Literature Review
Santos, Felizardo, Gerosa, Steinmacher (2024).

Key idea: onboarding is costly and error-prone; research identifies multiple supporting strategies, with process support and recommendation systems among common approaches.

Source: https://arxiv.org/abs/2408.15989

### Onboarding in Software Engineering: A Multivocal Literature Review
2026 review covering 87 academic and practitioner sources.

Key idea: effective onboarding includes mentorship, practical task-based learning and collaborative tools; common obstacles include communication gaps, insufficient documentation and high cognitive load.

DOI: https://doi.org/10.1016/j.infsof.2026.108120

### Restructure This: Using AI to Restructure Onboarding Documents to Reduce Cognitive Overload
Feng, Tandan, Steinmacher, Gerosa, Sarma (2026).

Key idea: task-based and cognitively informed documentation can reduce cognitive load and improve newcomer task success and usability.

Source: https://arxiv.org/abs/2605.19174

## 3. Scaling through reusable patterns

### InnerSource Patterns
InnerSource Commons.

Key idea: reusable patterns work best when expressed with a problem, context, forces, solution and resulting context. Mature patterns can encode lessons so they can be adapted rather than rediscovered.

Relevant patterns include:
- Extensions for Sustainable Growth
- Standard Release Process
- Group Support
- Explicit Governance Levels
- InnerSource Ambassadors
- Circle Communities
- Internal Developer Platform
- Document Architecture Decisions
- Code Consumers

Source: https://github.com/InnerSourceCommons/InnerSourcePatterns

Source: https://innersourcecommons.org/learn/patterns/

### Building Welcoming Communities
GitHub Open Source Guides.

Key idea: sustainable participation depends on reducing friction for users and contributors, making contribution paths visible, and creating positive early experiences.

Source: https://opensource.guide/building-community/

### Open Source Metrics
GitHub Open Source Guides.

Use this as a practitioner reference for measuring project health and adoption rather than relying on vanity metrics alone.

Source: https://opensource.guide/

## 4. Architecture, decisions and distributed alignment

### Architecture Decision Record
Martin Fowler, 2026.

Key idea: short decision records preserve context, rationale, alternatives and consequences. The act of writing the decision also improves alignment and exposes disagreement early.

Source: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html

### Scaling the Practice of Architecture, Conversationally
Andrew Harmel-Law, 2021.

Key idea: architecture can scale through lightweight decision records, advisory forums, team-sourced principles and technology sensing rather than a centralized architecture bottleneck.

Source: https://martinfowler.com/articles/scaling-architecture-conversationally.html

### Building Infrastructure Platforms
Martin Fowler / Thoughtworks.

Key idea: platform repositories benefit from ADRs and explicit documentation of decisions and consequences so later teams can understand why infrastructure works the way it does.

Source: https://www.martinfowler.com/articles/building-infrastructure-platform.html

## 5. Golden paths and self-service

### Platform engineering and internal developer portals: a multivocal literature review
Frontiers in Computer Science (2026).

Key idea: internal developer platforms commonly combine service catalogs, golden paths, self-service provisioning, scorecards, workflow automation, and governance. Adoption barriers include cognitive load, organizational resistance, measurement problems and platform sustainability.

Source: https://www.frontiersin.org/journals/computer-science/articles/10.3389/fcomp.2026.1814498/full

### Developer Portals and Golden Paths: Standardizing DevOps with Internal Platforms
Practitioner/research article (2024).

Key idea: golden paths reduce context switching and make common workflows more consistent and self-service.

Source: https://ijaibdcms.org/index.php/ijaibdcms/article/view/178

## 6. Software delivery and AI adoption

### DORA Core and DORA Software Delivery Performance Metrics
DORA / Google Cloud.

Key idea: delivery performance should be measured through outcomes such as throughput and instability, with context preserved around the application and organization.

Source: https://dora.dev/guides/dora-metrics/

### State of AI-assisted Software Development 2025
DORA / Google.

Key idea: AI amplifies the strengths and weaknesses of the underlying sociotechnical system; successful adoption depends on capabilities such as user-centricity, strong version control, AI-accessible internal data, small batches, clear AI stance, quality internal platforms and healthy data ecosystems.

Source: https://dora.dev/research/2025/dora-report/

### DORA AI Capabilities Model
DORA / Google Cloud.

Key idea: AI adoption is not just a model/tool choice; organizations need supporting capabilities and feedback mechanisms to realize value.

Source: https://dora.dev/ai/capabilities-model/report/

## 7. LLM and RAG evaluation

### A Survey on LLM-as-a-Judge
Gu, Jiang, Shi, et al. (2024; revised 2025).

Key idea: model-based judging is powerful at scale but introduces reliability, consistency and bias concerns that require explicit evaluation design.

Source: https://arxiv.org/abs/2411.15594

### LLMs-as-Judges: A Comprehensive Survey on LLM-based Evaluation Methods
Li, Dong, Chen, et al. (2024).

Key idea: LLM-based evaluation needs deliberate methodology rather than assuming the evaluator is an unquestionable oracle.

Source: https://arxiv.org/abs/2412.05579

### Evaluation of Retrieval-Augmented Generation: A Survey
Yu, Gan, Zhang, et al. (2024).

Key idea: RAG evaluation must account for both retrieval and generation, including relevance, accuracy and faithfulness.

Source: https://arxiv.org/abs/2405.07437

### Retrieval Augmented Generation Evaluation in the Era of Large Language Models: A Comprehensive Survey
Gan, Yu, Zhang, et al. (2025).

Key idea: RAG evaluation spans system performance, factual accuracy, safety and computational efficiency, reflecting the hybrid nature of retrieval + generation systems.

Source: https://arxiv.org/abs/2504.14891

### A Survey on Large Language Model Benchmarks
Ni, Chen, Li, et al. (2025).

Key idea: benchmarks can suffer from contamination, bias and weak coverage of process credibility and dynamic environments; benchmark selection therefore needs context.

Source: https://arxiv.org/abs/2508.15361

## How to use this evidence

The portfolio does not treat these sources as a checklist. They form a reference layer behind the practical patterns documented elsewhere:

**research → principle → pattern → architecture → implementation → measurement → feedback**

When a source changes or a better primary source emerges, update this file and the affected pattern rather than copying the claim into multiple places.
