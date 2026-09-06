# Research & Evidence Base

This is the evidence layer behind the engineering casebook. It favors primary research, first-party engineering documentation and empirical studies over generic summaries.

The intent is traceability:

**evidence → principle → pattern → architecture → implementation → measurement → feedback**

## 1. Developer productivity, flow and friction

### Developer Productivity for Humans
Christopher Jaspan, Green, et al., IEEE Software (2023).

**Core idea:** developer productivity is a human and sociotechnical problem; technology and social conditions need to be considered together.

**Use:** optimize for flow, feedback and cognitive load rather than activity counts; treat developer friction as an engineering signal.

Source: https://research.google/pubs/developer-productivity-for-humans-a-human-centered-approach-to-developer-productivity/

### Measuring Flow and Friction for Developers
Brown, Chang, Holtz, D'Angelo, IEEE (2023).

**Core idea:** measuring flow and friction provides a useful view of developers' experience that complements raw output measures.

**Use:** time-to-success, interruptions, search burden and task-level friction become useful engineering signals.

Source: https://research.google/pubs/measuring-flow-and-friction-for-developers-part-6-measuring-flow-and-friction-for-developers/

### What Improves Developer Productivity at Google? Code Quality
Cheng, Murphy-Hill, et al., Foundations of Software Engineering industry paper (2022).

**Core idea:** perceived productivity is associated with code quality, technical debt, infrastructure/tools/support, communication, goals/priorities and organizational change; the study reports 39 factors.

**Use:** improving the system around developers matters alongside improving the local coding workflow.

Source: https://research.google/pubs/what-improves-developer-productivity-at-google-code-quality/

### Measuring Developer Goals
Ferrari-Church and Egelman, IEEE Software (2024).

**Core idea:** developer goals are better understood through a combination of behavioral and sentiment-oriented measurement.

Source: https://research.google/pubs/measuring-developer-goals/

## 2. Onboarding and knowledge transfer

### A Case Study of Onboarding in Software Teams: Tasks and Strategies
An Ju, Hitesh Sajnani, Scot Kelly, Kim Herzig (2021).

**Study:** interviews with 32 developers and 15 engineering managers, triangulated with developer and manager surveys.

**Core idea:** onboarding tasks affect learning, confidence building and socialization; situational strategies are more useful than one universal recipe.

Source: https://arxiv.org/abs/2103.05055

### Software Solutions for Newcomers' Onboarding in Software Projects: A Systematic Literature Review
Santos, Felizardo, Gerosa, Steinmacher (2024).

**Core idea:** onboarding is costly and error-prone; the literature identifies process support and recommendation approaches among recurring strategies.

Source: https://arxiv.org/abs/2408.15989

### Onboarding in Software Engineering: A Multivocal Literature Review
Information and Software Technology (2026).

**Core idea:** effective onboarding commonly involves mentorship, practical task-based learning and collaboration; recurring obstacles include communication gaps, insufficient documentation and cognitive load.

DOI: https://doi.org/10.1016/j.infsof.2026.108120

### Restructure This: Using AI to Restructure Onboarding Documents to Reduce Cognitive Overload
Feng, Tandan, Steinmacher, Gerosa, Sarma (2026).

**Core idea:** task-based and cognitively informed restructuring can improve newcomer task success and usability.

Source: https://arxiv.org/abs/2605.19174

## 3. Architecture, decisions and distributed alignment

### Architecture Decision Record
Martin Fowler, updated 2026.

**Core idea:** short decision records preserve context, rationale, alternatives and consequences and keep decisions close to the codebase where they can be revisited or superseded.

Source: https://martinfowler.com/bliki/ArchitectureDecisionRecord.html

### Scaling the Practice of Architecture, Conversationally
Andrew Harmel-Law (2021).

**Core idea:** architecture can scale through lightweight records, advisory structures, team-sourced principles and technology sensing rather than a centralized architecture bottleneck.

Source: https://martinfowler.com/articles/scaling-architecture-conversationally.html

### Building Infrastructure Platforms
Martin Fowler / Thoughtworks.

**Core idea:** platform repositories benefit from explicit decisions and consequences so later teams can understand why infrastructure works the way it does.

Source: https://www.martinfowler.com/articles/building-infrastructure-platform.html

## 4. Discoverability, documentation and ownership

### The Spotify Story — Backstage
Spotify / Backstage.

**Problem:** infrastructure fragmentation made it difficult to find APIs, ownership and documentation and increased context switching.

**Solution pattern:** centralized software catalog + plugins + templates + documentation discovery.

Source: https://backstage.io/docs/overview/background/

### Announcing TechDocs
Spotify / Backstage (2020).

**Pattern:** documentation lives with code and is generated/published centrally. Spotify also describes Golden Paths as opinionated and supported paths and discusses cross-team ownership and dependency problems in long tutorials.

Source: https://backstage.io/blog/2020/09/08/announcing-tech-docs/

### Current TechDocs Documentation
Backstage.

**Evidence:** the current documentation describes thousands of documentation sites and service-level discovery from the software catalog.

Source: https://backstage.io/docs/next/features/techdocs/

## 5. Golden paths and self-service

### Golden Paths for Engineering Execution Consistency
Google Cloud (2023).

**Core pattern:** an opinionated, self-service route for a specific recurring task that reduces cognitive load while keeping underlying infrastructure understandable.

**Critical constraints:** support complete development-to-production flow, integrate existing platforms, remain flexible, and do not force adoption when the path does not fit.

Source: https://cloud.google.com/blog/products/application-development/golden-paths-for-engineering-execution-consistency

### Platform Engineering
Google Cloud.

**Use:** supporting context for internal developer platforms, abstractions and Golden Paths.

Source: https://cloud.google.com/solutions/platform-engineering

## 6. Consistency through patterns and automation

### From Ruby to Node: Overhauling Shopify's CLI
Shopify Engineering.

**Problem:** loosely aligned contributions created fragmentation.

**Response:** shared code patterns, UI patterns/components, conventions, principles, reusable packages and static analysis.

Source: https://shopify.engineering/overhauling-shopify-cli-for-a-better-developer-experience

### InnerSource Patterns
InnerSource Commons.

**Core idea:** patterns capture repeatable solutions to recurring organizational engineering problems and make lessons easier to adapt than rediscover from scratch.

Source: https://patterns.innersourcecommons.org/

### Extensions for Sustainable Growth
InnerSource Commons.

**Core idea:** extensions beyond a core component can distribute contribution and reduce maintainer burden when the architecture supports them.

Source: https://patterns.innersourcecommons.org/p/extensions-for-sustainable-growth

## 7. Software delivery and AI adoption

### State of AI-assisted Software Development 2025
DORA / Google.

**Core idea:** AI amplifies the strengths and weaknesses of the underlying sociotechnical system; returns depend on improving the system around the tools.

Source: https://dora.dev/research/2025/dora-report/

### DORA AI Capabilities Model
DORA / Google Cloud.

**Use:** a structured model for the capabilities surrounding AI-assisted development.

Source: https://dora.dev/ai/capabilities-model/report/

## 8. LLM and RAG evaluation

### Evaluation of Retrieval-Augmented Generation: A Survey
2024 survey.

**Core idea:** evaluation must cover retrieval as well as generation, including relevance, accuracy and faithfulness.

Source: https://arxiv.org/abs/2405.07437

### Retrieval Augmented Generation Evaluation in the Era of Large Language Models: A Comprehensive Survey
2025 survey.

**Core idea:** RAG evaluation spans system performance, factual accuracy, safety and computational efficiency.

Source: https://arxiv.org/abs/2504.14891

### A Survey on LLM-as-a-Judge
Gu, Jiang, Shi, et al. (2024; revised 2025).

**Core idea:** model-based judging is scalable but raises reliability, consistency and bias concerns that require explicit evaluation design.

Source: https://arxiv.org/abs/2411.15594

### From Generation to Judgment: Opportunities and Challenges of LLM-as-a-Judge
2024 survey.

**Core idea:** LLM-based evaluation needs deliberate methodology across what, how and where to judge; the evaluator is not an unquestionable oracle.

Source: https://arxiv.org/abs/2411.16594

### A Survey on Large Language Model Benchmarks
Ni, Chen, Li, et al. (2025).

**Core idea:** benchmark contamination, bias and weak coverage of dynamic/process properties mean benchmark selection needs context.

Source: https://arxiv.org/abs/2508.15361

## How the sources map to the casebook

| Case | Core evidence |
|---|---|
| 01 — Information fragments | Developer productivity + onboarding + Backstage/TechDocs |
| 02 — Paved road without a prison | Golden Paths + platform engineering + documentation ownership |
| 03 — Contribution creates fragmentation | Shopify CLI + InnerSource patterns + automation |
| 04 — AI looks right but is wrong | RAG evaluation + LLM-as-a-Judge + DORA AI |
| 05 — Regression becomes a knowledge problem | Context engineering + evaluation research + decision records |

## Bibliography policy

Prefer primary papers, official engineering documentation, empirical studies and first-party engineering write-ups. Every new source should record what it actually supports, where it is used, and what its limits are.
