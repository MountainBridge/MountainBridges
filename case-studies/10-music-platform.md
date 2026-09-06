# Music Platform: Discovery, Personalization, Freshness, and Long-Term Value

> **30-second read:** A music platform is a ranking system inside a feedback loop. The service must balance known taste, discovery, freshness, catalog coverage, latency, creator exposure, and user satisfaction while constantly learning from its own recommendations.

> **2-minute read:** A listener may want familiar songs at one moment and discovery at another. New users have almost no history. New tracks have almost no interactions. Recommendations change behaviour, which changes the training data, which changes future recommendations. A robust platform therefore separates candidate generation, ranking, policy, exploration and evaluation, and makes feedback-loop effects visible.

## Product to build

A streaming experience with:

```text
Home
 ├── Personalized mixes
 ├── New releases
 ├── Continue listening
 ├── Mood / intent search
 └── Artist discovery

Platform services
 ├── Catalog
 ├── User profile
 ├── Event ingestion
 ├── Candidate retrieval
 ├── Ranking
 ├── Playback
 └── Experimentation
```

## Architecture

```text
Playback / user actions
          ↓
       Event stream
          ↓
   Feature computation
      ↙         ↘
User profile    Item profile
      \           /
       Candidate retrieval
               ↓
           Ranking
               ↓
      Policy + diversity
               ↓
        Final recommendation
               ↓
          User behaviour
               ↺
```

## Technology choices

| Concern | Technology | Why |
|---|---|---|
| Web / mobile API | TypeScript services | Strong contracts for playback and discovery APIs |
| Primary data | PostgreSQL | Account, subscription, playlist and catalog metadata integrity |
| Event stream | Kafka | High-volume playback and interaction events |
| Cache | Redis | Hot user/session state and low-latency recommendation retrieval |
| Search | OpenSearch | Catalog/entity search and metadata filtering |
| Data lake | Parquet + object storage | Cheap, replayable event history for model training |
| ML | Python + PyTorch | Recommender research and production inference ecosystem |
| Feature store | Redis/Feast-style layer | Consistent online/offline feature access |
| Model serving | FastAPI + containerized inference | Isolated, measurable model endpoint |
| Observability | OpenTelemetry + Prometheus | Latency and recommendation-path diagnostics |

## Cold start

A new listener has little history. A new song has little interaction data.

One production approach from Deezer uses semi-personalized recommendation with user clustering and a deep model, with both offline and online experiments.

Reference: [A Semi-Personalized System for User Cold Start Recommendation on Music Streaming Apps — alphaXiv](https://www.alphaxiv.org/abs/2106.03819)

The reusable pattern is:

```text
No history
  ↓
Contextual priors
  +
Population / cohort signals
  +
Editorial / popularity safeguards
  ↓
Initial recommendations
  ↓
Collect behaviour
  ↓
Personalize
```

## Long-term user representation

Industrial music recommendation has a particular difficulty: users consume sequences over time, often without explicit ratings. Recent work explores reusable user representations as a foundation across downstream recommendation tasks, while production research continues to explore temporal and multimodal representations.

References:
- [Large-Scale User Modeling with Recurrent Neural Networks for Music Discovery on Multiple Time Scales — alphaXiv](https://www.alphaxiv.org/abs/1708.06520)
- [Generalized User Representations for Transfer Learning — alphaXiv](https://www.alphaxiv.org/abs/2403.00584)

## Freshness and feedback loops

A recommender can become overly confident in its own past choices. Research on YouTube Music reports live A/B experiments across serving, training, architecture and exploration interventions for freshness and novelty. Other 2026 work models systemic feedback loops across retail and music, showing that recommendation adoption can change collective demand and popularity concentration.

References:
- [Breaking the Loop: An Empirical Comparison of Strategies for Novelty and Freshness in YouTube Music — alphaXiv](https://www.alphaxiv.org/abs/2607.23749)
- [The Diversity Paradox revisited — alphaXiv](https://www.alphaxiv.org/abs/2602.16315)

## LLM recommendation agent

A natural-language interface can sit above the deterministic catalog and ranking stack:

```text
Listener intent
     ↓
LLM interpretation
     ↓
Entity grounding
     ↓
Search / retrieval
     ↓
Recommendation candidates
     ↓
Ranking + policy
     ↓
Playlist / explanation
```

Recent production research on NetEase Cloud Music describes an LLM-powered recommendation agent using deterministic state-graph orchestration and explicit grounding to address entity hallucination and long-tail degradation.

Reference: [Melo: A Production LLM-Powered Music Recommendation Agent — alphaXiv](https://www.alphaxiv.org/abs/2607.23718)

## Failure modes

- new user receives only global popularity
- new track is never explored
- ranking becomes a popularity feedback loop
- LLM invents an artist or track
- a valid entity is retrieved but unavailable in the current catalog
- recommendation latency blocks playback UX
- offline metric improves while long-term satisfaction falls

## Patterns

- candidate generation → ranking
- cold-start priors
- exploration / exploitation
- multi-objective ranking
- feedback-loop monitoring
- entity grounding
- online experimentation
- feature freshness
- graceful degradation
- cache / retrieval separation

## Build target

Implement:

**catalog → search → playback events → user profile → candidate retrieval → ranking → recommendation slate → A/B instrumentation**

Then add natural-language recommendation on top, with deterministic catalog validation.
