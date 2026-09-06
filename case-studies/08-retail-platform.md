# Retail Platform: Search, Recommendations, Inventory, Checkout

> **30-second read:** A retail platform is a coordination problem between catalog, search, recommendations, inventory, pricing, checkout, fulfillment and customer trust. The key design move is to separate fast-changing derived views from authoritative business state.

> **2-minute read:** A shopper expects search to be fast, recommendations to feel relevant, prices and stock to be trustworthy, and checkout to behave consistently even when inventory or payment systems are under load. The platform should use read-optimized indexes and caches without making them the source of truth. Recommendation systems need explicit objectives, experimentation and protection against feedback loops. Inventory needs reservation semantics rather than a naive stock counter.

## Product to build

A reference commerce platform:

```text
Shopper
 ├── Search catalog
 ├── Browse recommendations
 ├── View price + stock
 ├── Add to cart
 ├── Checkout
 └── Track order

Merchant / operations
 ├── Update catalog
 ├── Manage inventory
 ├── Adjust pricing
 └── Investigate order failures
```

## System shape

```text
                         Web / Mobile
                              ↓
                         API Gateway
                              ↓
        ┌─────────────────────┼─────────────────────┐
        ↓                     ↓                     ↓
     Catalog               Search              Recommendation
        ↓                     ↓                     ↓
     Postgres            OpenSearch        Feature / model store
        │                     │                     │
        └─────────────── Event Bus ─────────────────┘
                              ↓
                     Cart / Checkout
                              ↓
                  Inventory reservation
                              ↓
                       Payment adapter
                              ↓
                     Order + Fulfillment
```

## Technology choices

| Concern | Technology | Why |
|---|---|---|
| Shopper UI | React + TypeScript | Complex interactive product/cart flows with typed interfaces |
| API | Node.js + TypeScript | Consistent service language and strong JSON/API tooling |
| Catalog / orders | PostgreSQL | Relational integrity for products, prices, orders and state transitions |
| Search | OpenSearch | Inverted indexes, filtering, ranking and faceting |
| Cache | Redis | Hot catalog fragments, sessions and low-latency reads |
| Events | Kafka | Decouple catalog changes, inventory, recommendations and analytics |
| Recommendations | Python + offline/online feature pipeline | ML ecosystem plus reproducible experiments |
| Object storage | S3-compatible | Product media and batch datasets |
| Observability | OpenTelemetry | Correlate shopper requests with downstream services |
| Runtime | Docker + Kubernetes | Repeatable environments and scale-out workloads |

## Inventory is not a number

The naive model is:

```text
stock = stock - 1
```

The real system needs to distinguish available, reserved, committed, cancelled and returned units.

```text
Available
   ↓ reserve
Reserved
   ↓ checkout success
Committed
   ↓ fulfillment
Fulfilled
```

A checkout timeout should not leave the platform guessing whether the item was consumed.

## Recommendation problem: relevance versus system effects

A recommender optimizes a changing system. Recommendations change what users consume; those interactions become training data; retraining changes future recommendations.

Recent work explicitly models this feedback loop and shows that increasing recommender adoption can redistribute demand and, depending on domain/model, amplify popularity concentration.

Reference: [The Diversity Paradox revisited: Systemic Effects of Feedback Loops in Recommender Systems — alphaXiv](https://www.alphaxiv.org/abs/2602.16315)

The engineering response is to separate:

```text
Candidate generation
      ↓
Ranking
      ↓
Business rules / eligibility
      ↓
Diversity / novelty controls
      ↓
Final slate
```

Do not evaluate only click-through rate. Include conversion, margin, return rate, novelty, inventory health and customer outcomes where relevant.

## Intent-driven shopping

A modern retail interface may receive a request such as:

> “Find me a lightweight black running shoe for monsoon weather under ₹8,000.”

That is not one search keyword. It is a structured intent that must be translated into product constraints and then into actual purchasable items.

Research such as [ShopX: A Foundation Model for Intent-to-Item Fulfillment in Agentic Shopping](https://www.alphaxiv.org/abs/2606.31693) explores the gap between natural-language intent and item-space fulfillment.

A robust architecture keeps inventory, price, eligibility and checkout constraints deterministic even when an LLM helps interpret intent.

## Failure modes

- stale search index shows unavailable products
- recommendation surfaces an item that cannot be shipped
- duplicate checkout request creates duplicate order
- inventory reservation expires after payment succeeds
- price changes between cart and checkout
- recommendation feedback loop narrows discovery
- promotion abuse creates fraudulent discounts

## Patterns

- read model versus source of truth
- inventory reservation
- idempotent checkout
- event-driven projection
- cache invalidation
- search indexing
- multi-objective ranking
- experiment contamination / interference
- fraud detection
- saga / compensation

## Related casebook patterns

[Designing a Developer Journey End to End](../articles/developer-journey-end-to-end.md)

[Failure Modes Before Features](../articles/failure-modes-before-features.md)

[Architecture Decisions That Survive](../articles/architecture-decisions-that-survive.md)

## Build target

Implement a vertical slice:

**catalog → search → product detail → cart → inventory reservation → checkout → order → fulfillment state**

Then add recommendation as a separate, explicitly evaluated subsystem.
