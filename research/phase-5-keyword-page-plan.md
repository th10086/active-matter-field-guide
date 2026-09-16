# Active Matter Phase 5 Keyword Audit and Page Plan

Verified: 2026-09-16 (Asia/Shanghai)

This is the Phase 5 planning record. It converts keyword demand into publishable pages only when Phase 4 contains sufficient verified facts. Search demand is not treated as evidence for gameplay claims.

## 1. Source inventory

The supplied `similarweb数据` folder contains four data files rather than screenshots. Every worksheet and CSV row was read. All three workbooks have one visible worksheet, no hidden worksheets, two columns and no merged cells.

| Source file | Coverage | Rows reviewed | Core finding |
|---|---|---:|---|
| `Active Matter 相关关键词.xlsx` | Related keywords | 100 data rows | Strong branded demand, but rows 22–101 are dominated by Gaijin/War Thunder, military hardware, unrelated games and broad extraction-shooter terms. |
| `Active Matter 语句匹配.xlsx` | Phrase match | 100 data rows | Contains the richest game-specific intents: PvE, Steam, player count, system requirements, account linking, Linux, Replicator slots, price, review, maps and optional PvP. It also contains physics research, attractiveness questions, other products, non-English queries, piracy and cheats. |
| `Active Matter 问题查询.xlsx` | Questions | 29 data rows | Only a small minority are relevant to the game. Clean English questions center on how to play, PvE availability/limits, playtest status and player count. Several useful-looking Russian questions need English demand and in-game verification before use. |
| `relatedQueries (19).csv` | Google Trends related queries, worldwide, 2026-08-16 to 2026-09-16 | 24 non-empty query rows across Top and Rising | `active matter review` leads the Top index; game, release date and PvE are also relevant. Rising results are polluted by unrelated games and an unrelated safeguarding query. Scores are relative indices, not search volume. |

## 2. File-by-file findings

### Related keywords

Useful branded terms include:

| Keyword | Reported volume | Decision |
|---|---:|---|
| active matter | 64.5K | Homepage and site-wide entity term |
| active matter game | 4.6K | Homepage and game overview framing |
| activematter | 1.8K | Brand variant; no separate page |
| active matter demo | 910 | Answer in FAQ/release page; do not imply a current demo without verification |
| has active matter been released | 880 | Release/platform page |
| how can i play active matter | 880 | Beginner and platforms pages |
| is there a beta for active matter | 880 | Release FAQ; historical intent |
| active matter pc downloads | 850 | Official-buy links only; do not target download/piracy phrasing |
| active matter engine | 830 | Demand retained in backlog because Phase 4 has no verified engine source |
| active matter release date | 350 | Release/platform page |
| extraction shooter / extraction shooters | 23.5K / 15.1K | Category context only, not evidence of Active Matter-specific demand |

Typos such as `acruve matter`, `activie matters` and `active meter` are spelling variants, not separate pages.

### Phrase match

High-value, game-specific intents:

| Keyword | Reported volume | Page decision |
|---|---:|---|
| active matter pve | 1.4K | Dedicated PvE page |
| active matter steam | 1.1K | Platforms, editions and system requirements |
| active matter player count | 1.1K | Backlog only; requires a live, timestamped data source |
| can my laptop run active matter | 980 | System requirements |
| active matter connect with steam | 920 | Crossplay and account linking |
| active matter demo | 910 | FAQ/release page |
| active matter pc downloads | 850 | Official purchase links only |
| active matter engine | 830 | Backlog; no verified official source yet |
| active matters how to unlock new slots in replicator | 540 | Backlog; exact unlock rule is not verified |
| active matter on linux | 530 | Linux and Steam Deck page |
| does active matter have a pve mode | 500 | PvE page |
| active matter price | 410–470 | Editions and price |
| active matter best perks | 430 | Backlog; no current verified perk dataset/testing |
| active matter pve only mode | 430 | PvE page |
| active matter review | 420 | Backlog; an independent verdict needs hands-on evidence |
| new active matter map | 370 | Maps hub and official update pages |
| active matter release date | 350 | Release/platform page |
| active matter optional pvp | 340 | Raid modes and PvE page |

The non-English rows were used only to identify possible research gaps. They were not selected as English target keywords.

### Question queries

Clean English game questions:

- How can I play Active Matter?
- Does Active Matter have a PvE mode?
- Does Active Matter PvE still have a limit in September 2026?
- Why are the developers publishing updates if the playtest closed?
- How many people play Active Matter?

The last question is retained for a later live-data page. The playtest question belongs in release history/FAQ. The sheet is too sparse and polluted to determine the full information architecture on its own.

### Google Trends related queries

Useful Top terms were `active matter review` (100), `active matter game` (70), `matter team` (30), `active matter release date` (26), `active matter pve` (17), `gaijin` (15) and `activematter` (2). `steam charts` was both a Top term and Breakout, supporting demand for a future player-count page but not supplying the data for that page.

`dark matter`, `wardogs`, `beautiful light`, `escape from tarkov` and the safeguarding query were excluded from the page plan.

## 3. Google Autocomplete supplement

Because the question workbook contains few clean English questions, Google Suggest was checked with English prefixes on 2026-09-16. Autocomplete has no volume metric and is used only as qualitative demand evidence.

Useful suggestions grouped by intent:

| Intent | Suggestions retained |
|---|---|
| Getting started | `active matter how to play`, `active matter how to ready up`, `active matter beginner guide`, `active matter walkthrough` |
| Raids and co-op | `active matter how many players in a raid`, `active matter how to revive teammate`, `active matter pve raids`, `active matter pve coop`, `active matter isolated raids` |
| Buying and platforms | `active matter where to play`, `active matter where to buy`, `active matter is it free`, `active matter is it worth it`, `active matter can i run it`, `active matter steam deck` |
| Maps | `active matter maps`, `active matter map guide`, `active matter headquarters map`, `active matter loot map` |
| Systems | `active matter how to get monolith tokens`, `active matter crafting`, `active matter perks` |
| Gear | `active matter weapons`, `active matter weapons list`, `active matter weapon stats`, `active matter weapon tier list` |
| General | `active matter game review`, `active matter system requirements`, `active matter crossplay` |

The suggestions for readying up, reviving, water samples, loot spots, Monolith tokens, perks, weapon stats and rankings are not first-release pages because Phase 4 does not contain verified launch-build evidence for their answers.

## 4. Pollution filter

The following classes were excluded before page selection:

- Piracy/download abuse: `скачать`, torrent, unofficial PC download and Steam-key intent where it implies grey-market acquisition.
- Cheats and automation: private cheats, trainer, script, Solara, auto clicker, aimbot and equivalent phrases.
- Non-English target terms for this English site. They may reveal gaps but do not define English page keywords.
- Scientific active matter: MIPS, hydrodynamics, bacteria/gel/tumor simulations, Giomi and academic queries.
- Attractiveness and unrelated “matter” questions.
- Other games and products: War Thunder, Dark Matter, Antimatter Dimensions, Wardogs, Beautiful Light, model-matter labs and cable/cosmetic products.
- Military vehicle/weapon names and Gaijin-store terms not specifically tied to Active Matter.
- Misspellings as separate pages.
- Unsupported tactical claims: exact recipes, drop locations, extraction coordinates, timers, damage values, tier lists and map unlock steps.

## 5. Page selection rules

A first-release page must satisfy all of the following:

1. It has direct branded demand, a necessary navigation/legal role, or a clear internal-linking role.
2. Phase 4 provides enough official facts for a useful page without fabricated detail.
3. Its intent does not substantially duplicate another page.
4. It can be illustrated with a mapped official asset, a clearly labeled theme image, or a text/table layout that does not require an invented screenshot.
5. Volatile values carry a verification date and patch/version where applicable.

The full matrix contains 45 candidate/required routes. Thirty-seven are approved for the first release, including six trust/legal pages. Eight evidence-gated routes stay out of the build; they are research backlog entries, not placeholder pages.

## 6. Main navigation

The logo links to Home. The six primary menu items are:

| Menu | Submenu |
|---|---|
| Getting Started | Beginner Guide; How Raids Work; PvE Mode; Raid Modes; Solo & Co-op |
| Maps | Maps Overview; Dalniy Island; Park; Gigastructure; Downtown |
| Systems | Workshop; Harmonization & Progression; Crossplay & Account Linking |
| Enemies | Enemies & Anomalies; Flowermen; Creature Field Guide; Anomalies |
| Updates | Latest Patch; Release Launch; Gigastructure; 250 Shades of Liberty; Fire Walk |
| Game Info | Release Date & Platforms; Editions & Price; System Requirements; Linux & Steam Deck; Languages & Controls; FAQ |

On mobile, each item becomes an accordion. `About`, `Sources`, `Contact`, `Privacy`, `Terms` and `Disclaimer` stay in the footer so the gameplay navigation remains focused.

## 7. Pages withheld from the first release

| Route | Demand signal | Missing evidence | Publication gate |
|---|---|---|---|
| `/maps/airport/` | New-map and map-guide demand | Object-mapped official image and enough route-level gameplay detail | Capture current map/selection UI and verify content in the launch client |
| `/maps/vanilla-mall/` | Map demand | Only a short official patch mention | Confirm current layout, mode rules and mapped media |
| `/systems/replicator-refiner/` | Replicator slot and crafting queries | Current launch UI, unlock rules and versioned recipes | Capture launch client and verify every step/value |
| `/systems/monolith-tokens/` | Google Suggest and Russian question demand | Verified earning rules, reward table and current terminology | Confirm in-game and official patch sources |
| `/weapons/` | Strong Google Suggest cluster | Complete current weapon list, stats and testing | Build a versioned in-game dataset; no copied tier list |
| `/guides/perks/` | 430 phrase-match volume plus autocomplete | Current perk list and reproducible evaluation | Verify all perks and disclose ranking method |
| `/game-info/review/` | Top Trends term and 420 phrase volume | Independent hands-on evidence | Play/test the launch build and separate fact from opinion |
| `/game-info/player-count/` | 1.1K phrase volume and `steam charts` Breakout | Reliable live/time-series data integration | Add timestamped Steam data and methodology |

## 8. Synchronized deliverables

- `page-matrix.csv` is the route-level source of truth for intent, source sufficiency, priority and first-release status.
- `material-requirements.csv` uses the same 45 page IDs and routes. Its `first_release` field must match the page matrix.
- `asset-manifest.csv` remains the asset provenance source of truth. Material rows reference its planned filenames; no supplied keyword file is treated as a production image.

## 9. Phase gate

Phase 5 is complete when the user approves this information architecture. No UI design or site implementation should start before approval.
