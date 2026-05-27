# PeekBox — Session Summary

## Goal
Evolve the PeekBox assistant chatbot into a powerful, self-contained component with real-time database queries, object search, and location awareness.

## Constraints & Preferences
- Chatbot must always print a welcome message inviting the user to type "aiuto"
- All example questions in help must start with uppercase and end with "?"
- Asterisks (*) must not appear in response text
- When the chatbot doesn't understand, the response must match the style of the welcome message
- Saturation percentage in dettaglio-box must sum object quantities, not count distinct objects

## Progress
### Done
- Created standalone ChatbotComponent at `src/app/components/chatbot/` with separate HTML, TS, SCSS
- Implemented intent-based response system using DatabaseService methods (box count, object count, shared boxes, spaces, help, preferences, transit, trash)
- Added welcome message shown once on first chat open
- Formatted all example questions in help with uppercase + "?"
- Removed all asterisks from chatbot response strings
- Fixed "Cestino?" standalone query by moving `cestin`/`eliminat`/`cancell` check outside the `box` branch
- Fixed saturation statistic in dettaglio-box: added `totaleElementi` getter that sums `quantita` per object (fallback 1), updated `saturazionePercent` and HTML display to use it
- Fixed `cercaOggetti` URL in `database.ts`: removed broken path segment `/${utenteId}` so calls go to the correct backend route `/api/cerca?q=...`
- Refactored `area-personale.page` to use `<app-chatbot>` and removed all inline chatbot code
- **Enhanced chatbot**: injected `HttpClient` for direct API calls, added extended intent parsing with search patterns (`cerca`, `trova`, `dove si trova`, etc.), added `cercaOggettiResponse()`, `doveSiTrovaOggettoResponse()`, `posizioneBoxResponse()` methods, added `dettaglioPosizioneOggetto()` with GPS checkpoint lookup

### In Progress
- (none currently)

### Blocked
- (none)

## Key Decisions
- Chatbot uses DatabaseService directly for stats queries instead of an external AI endpoint (no backend AI route exists)
- Search endpoint fixed in database.ts: the frontend was calling `/api/cerca/${utenteId}` but backend only registers `/api/cerca` — the utenteId is redundant because the backend reads `req.user.id` from the JWT token
- Chatbot component is standalone with separate template+style files (follows project convention for non-trivial components)
- Chosen to inject HttpClient into the chatbot for search/location calls instead of overloading the page component with chat logic

## Next Steps
- Test object search flow: "dove si trova [oggetto]" → search API → get box name → get box details + GPS checkpoint
- Test all enhanced help commands end-to-end

## Critical Context
- Error on initial build was a stale cache (`Cannot find module './area-personale/area-personale.page'`); cleared `.angular/` → build passed
- Backend route `GET /api/cerca` expects `?q=...` query param; does NOT accept a path `:utenteId` parameter
- Search API returns `{ id, nome, tipo: "oggetto"|"box", contesto }` — for objects `contesto` is the parent box name, for boxes it's the parent armadio name
- Object `quantita` field can be undefined/null; chatbot's `totaleElementi` falls back to 1 per object
- Backend endpoints used by chatbot: `GET /api/checkpoint/:boxId/ultimo` (last GPS position of a box), `GET /api/checkpoint/tutti/:utenteId` (all checkpoints for a user)

## Relevant Files
- `src/app/components/chatbot/chatbot.component.ts`: core chatbot logic (enhanced with search + GPS)
- `src/app/components/chatbot/chatbot.component.html`: FAB button + chat panel template
- `src/app/components/chatbot/chatbot.component.scss`: all chat styles
- `src/app/area-personale/area-personale.page.ts`: imports ChatbotComponent
- `src/app/area-personale/area-personale.page.html`: uses `<app-chatbot></app-chatbot>`
- `src/app/services/database.ts`: `cercaOggetti()` URL fixed; provides all box/object/armadi/shared-data methods
- `src/app/dettaglio-box/dettaglio-box.page.ts`: `totaleElementi` getter + fixed `saturazionePercent`
- `src/app/dettaglio-box/dettaglio-box.page.html`: displays `{{ totaleElementi }}` instead of `{{ oggetti.length }}`
- `src/types/models.ts`: all data interfaces (Box, Oggetto, ArchivioCondiviso, etc.)
- `PeekBox-Backend/server.js`: backend routes, especially `GET /api/cerca` (line 1087)
