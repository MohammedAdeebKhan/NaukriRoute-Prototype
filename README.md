# NaukriRoute — Functional Prototype

**Tagline:** From Skills to Opportunities.

This repository contains a lightweight hackathon prototype of NaukriRoute. It is intentionally small and uses controlled/local demo data so the core product journey can be demonstrated without claiming live job scraping, production APIs, or a production database.

## What is implemented

- Home dashboard
- My Career Blueprint / roadmap
- Learn / course catalog
- Course detail view
- Opportunities list
- Opportunity detail view
- Community page
- Profile page
- Clickable navigation
- Recommendation cards and readiness indicators
- Controlled demo data

## Core demonstrated flow

**Profile → Recommendations → Skill Gap / Route → Learn → Career Blueprint → Opportunities**

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- Local JavaScript demo data

The architecture documents describe the intended future use of Python/FastAPI, a database, approved APIs and an AI/LLM layer. Those production integrations are not claimed to be implemented in this prototype.

## Run locally

No build system is required.

1. Download or clone the repository.
2. Open `index.html` in a browser.

For a local server:

```bash
python3 -m http.server 8000
```

Then open:

`http://localhost:8000`

## Scope boundary

This is a proof-of-concept, not a production application. Authentication, persistent accounts, live opportunity feeds, payment systems, scraping, moderation, and production database/API integrations are outside the prototype scope.

## Suggested GitHub submission description

"NaukriRoute is an AI-powered career readiness and employability platform prototype that connects student profiles with market-demand signals, skill-gap analysis, learning actions, career blueprints and opportunity discovery."
