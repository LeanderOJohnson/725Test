# Luma Flux Design System

Luma's professional fintech design system, recreated as a design-agent kit. Flux powers Luma's advisor platform for **structured products, annuities, and insurance** — research, comparison, ordering, and lifecycle management. The aesthetic balances **trust with innovation**: a deep navy + signal-blue palette, IBM Plex type, dense-but-legible data surfaces, and a strict surface hierarchy.

> Namespace for `@dsCard` HTML: `window.LumaFluxDesignSystem_35cd19`. Consumers link one file — `styles.css`.

---

## Product context

**Luma Financial Technologies** is an independent, multi-issuer/multi-carrier platform used by financial advisors and their firms. The product is a **top-navigation web app** (Luma never uses sidebars) organized into four areas:

| Area | What it does |
|---|---|
| **Overview** | Homepage. Quick-link hero, upcoming events, top rate changes, favorited products, saved filters. |
| **Research** | Annuities & structured-product **marketplace** — filter, compare, and apply for products across carriers/issuers. |
| **Manage** | **Orders** workflow — a swimlane board (Pending Review → Approved → Traded → Rejected → Cancelled) with batch approve/reject. |
| **Lifecycle** | **Securities** portfolio dashboard — account metrics, portfolio-health, holdings table, performance charts, cashflow events. |

Two product domains drive an important rule: **carrier logos appear only on insurance/annuity pages; issuer logos only on capital-market/securities pages.** Never mix them.

### Sources

This kit was built from the **Flux Kit** codebase (`@make-kits/leander-playground`), provided as a read-only mounted folder, and synced to **Flux 1.1** (June 2026 source update: layout components, MetricCard/Table/ComparisonBar/NavigationMenu/SwimlaneMap, IBM Plex Mono for financial data, dedicated stroke gray, expanded logo registry):
- `guidelines/` — `Guidelines.md`, `tokens.md`, `styles.md`, `responsiveness.md`, `components.md`, `setup.md`
- `src/styles/theme.css` — authoritative token definitions (mirrored into `tokens/`)
- `src/app/components/*.tsx` — the React component sources reimplemented here
- `src/imports/Screens/` — archetype recipes + reference PNGs (Overview, Dashboard, Table, Swimlanes, Form, Modal)
- `src/imports/Avatars/`, `src/app/assets/logos.ts` — carrier & issuer logo registry

Original install (for reference only): `pnpm add @make-kits/leander-playground` then `@import "@make-kits/leander-playground/styles";`.

---

## Content fundamentals

How Luma writes. Match this voice in any copy you produce.

- **Tone:** professional, plain-spoken, confidence-building. It's a tool for licensed professionals — precise, never hype-y or playful.
- **Person:** addresses the advisor in second person via terse imperatives ("Track events and take action expeditiously", "Compare and apply for products", "Stay up to date on policy performance"). Page subtitles follow the pattern **`Title | short imperative subtitle`**.
- **Casing:** **Sentence case** everywhere — buttons ("Apply", "Download Orders", "Manage Filters"), tabs, headers. UPPERCASE only for footer section headers (LUMA PRODUCTS, REFERENCES) and the occasional micro-label/badge ("THE INDEX STANDARD", "VIP Client").
- **Labels are short and literal:** "Min. Premium", "Surrender Schedule", "Mark to Market", "Free Withdrawal", "Counterparty". No marketing flourish on data labels.
- **Numbers carry meaning:** currency, rates, notional, CUSIPs, account IDs are always present and rendered in the primary font with **tabular figures** (`font-variant-numeric: tabular-nums`) so columns align. Show sign + color on deltas (+4.80% green, −4.80% red). Use `--` for "no value", `(00)` for zero counts.
- **No emoji.** None in product UI. Iconography is line icons, not emoji.
- **Status language:** Pending Review / Approved / Traded / Rejected / Cancelled. Policy events: "Policy Issued", "Systematic Withdrawal", "COI and Rider Charges".
- **Empty/placeholder strings** in the source decks read "Product Name", "Saved View Name 2", "Advisory MYGA" — keep realistic financial names in production.

---

## Visual foundations

**Palette.** Luma is **blue, not purple**. Primary action = Blue.60 `#0141e3`. Navy = Blue.90 `#00263e` (nav, footer, dark hero, primary-button active). Greens for gains/approvals, reds for loss/reject, yellow for warnings, teal/orange/purple as categorical accents (product-type tags, chart series). Avoid bluish-purple gradients.

**Surface hierarchy (always).** `Blue.10 #ecf1f7` page → `Neutral.10 #f8fafc` sections → `Neutral.00 #ffffff` cards/modals/dropdowns → `Blue.90` inverse chrome. Page backgrounds are never white; cards are never blue.

**Typography.** IBM Plex Sans for UI text; **IBM Plex Mono for financial data** — metric values (Display.Small 20/28/600 mono in MetricCards), and anything marked `.font-mono`/`[data-mono]`. All numbers use **tabular figures** (`font-variant-numeric: tabular-nums`) so currency, rates, IDs and notional align in columns. Default body is 14px/400 (90% of text). Weights 400/500/600 only — never lighter. Max ~3 sizes per screen. Hierarchy via size + weight, not color.

**Spacing.** Base 4px; valid values only `0,2,4,8,12,16,20,24,32,48` (gaps are intentional). **Cards: 24px padding on all sides, no exceptions.** Sections: 24px internal padding. Default element gap 8px; between sections 16px; 48px sparingly. 32px gap above the Footer (always).

**Corners & borders.** Radius default 8px (buttons, inputs); 12px for cards/large containers; 4px compact; pill for badges/toggles. Borders are 1px `Stroke.Default #dee2e6` — a dedicated stroke gray, deliberately NOT Neutral.50 (1.5px on inputs/secondary buttons). In-card row dividers use the lighter `Neutral.20 #eeeef2`.

**Elevation.** Mostly flat. **Cards are borderless by default** — their Neutral.00 fill alone separates them from the Surface.Secondary section beneath; add the `bordered` variant only when a card must sit on a same-color surface. The `elevated` variant uses a soft shadow (`shadow-card` = `0 4 4 / 8%`) for dropdowns/popovers. Floating ToolBar uses `shadow-toolbar` (16%). No heavy drop shadows, no glassmorphism, minimal blur.

**Surfaces, emphasis & patterns.**
- **Modals fill with Surface.Secondary** (not white). The header and footer are separated from the body by *space*, never a rule — no stroke directly under the header or directly above the footer. White cards carry the body content inside the secondary container.
- **Cards are borderless by default** (see Elevation) — no outline/stroke around a card unless it sits on a same-color surface (`bordered`).
- **Label–value pairs** render the label **body-regular** and the value **body-bold** (both Text.Body). Use the `lf-kv` pattern (`lf-kv__label` / `lf-kv__value`); `lf-kv--row` spreads them across a line for detail tables.
- **One primary button per page.** A screen has a single primary action; everything else is secondary, tertiary, or ghost. Two primaries competing on one page is a bug.
- **H3 is regular (400), not semibold** — it's a quiet sub-heading, distinguished by size not weight.
- **Color the copy with Text.Body by default.** Most text on a page is `--color-text-body`; reach for `--color-text-hint` **selectively** — secondary metadata, captions, placeholder-like helper text — never for primary reading copy.

**Backgrounds.** Solid surfaces, no photographic imagery in chrome. The one deliberate dark moment is the **Overview hero** (Blue.90) with white quick-link tiles — reserved for the homepage only. Charts use a subtle Blue.20→Blue.10 area fill under a navy line.

**Motion.** Restrained. 120–150ms color/opacity transitions on hover/focus; ~300ms on progress fills and segmented-control indicators. Tiles lift 2px on hover. No bounces, no infinite decorative loops.

**Interaction states.**
- *Hover:* buttons darken (primary → navy), ghost/secondary lighten to Neutral.10; rows tint to Neutral.10; nav items go Blue.80.
- *Active/press:* primary → Blue.90.
- *Focus:* keyboard-only (`:focus-visible`) — 2px Blue.50 ring with offset. Never bare `:focus` (no rings on mouse click).
- *Selected:* table rows + selected cards tint Blue.10; checkboxes/radios fill Blue.90.
- *Disabled:* Neutral.20 fill + Neutral.50 text; cards drop to ~0.6 opacity.

**Imagery vibe.** Brand logos (carriers/issuers) sit in **circular avatars on a white fill** with a 1px border — clean, neutral, no duotone. Cool, corporate, high-contrast.

**Logo sourcing (avatars).** All brand logos resolve through the canonical registry [`assets/logos/logos.json`](assets/logos/logos.json) — the single source of truth for name↔file. Match an entity by its registry `name`/`slug`, **never** by a numbered filename (the `issuer-N.png` names are not identities; the registry assigns them). Keep **carriers** (insurance/annuity) and **issuers** (capital-markets banks) strictly separate by page type. If an entity has no registered logo, or its entry is `"confirmed": false`, render `Avatar` `fallback` initials rather than borrowing another company's mark. Confirmed issuers today: **Barclays, Goldman Sachs, Popular**; the remaining issuer marks are pending identification.

**Layout rules.** Compose pages from the **layout components** — `Page` (owns Surface.Primary), `PageContent` (1440px column), `Section` (owns Surface.Secondary), `PageHeader`, `Card` (owns Surface.Tertiary) — instead of hand-rolling surface-colored `<div>`s; picking the right container guarantees the right surface. Fixed **1440px** content column centered on the page surface; only the background expands wider. TopNav (92px) sticky at top, Footer last with 32px gap. White cards always nest inside a Surface.Secondary Section — never directly on the page. Bento metric rows (MetricCards) are the exception: they sit directly on the page, ungrouped. Form fields are sized to content (~160–320px) and laid out side-by-side — never a stack of full-width controls. Cards are fluid width, never fixed, and rarely clickable (put the interactive elements inside).

**PageHeader composition (a fixed rule).** The header is two stacked rows. **Row 1:** the title + optional pipe-separated subheader, with optional actions right-aligned — all in one row. **Row 2 (optional):** a nav row holding optional **Tabs pinned to the far left** and an optional **Stepper pinned to the far right**, each in its own container (`lf-pagehead__nav-start` / `__nav-end`). The nav row only appears when tabs and/or a stepper are present; either side may be omitted and the other keeps its edge. Use `PageHeader`'s `tabs` and `stepper` props rather than hand-rolling this layout.

**Never hardcode a primitive color as text/foreground color.** Always reach for a semantic `--color-text-*` token (`body`, `hint`, `disabled`, `inverse`, `error`, `success`, `warning`, `info`) or a matched categorical pair — never `--color-blue-90` etc. directly on `color`. This is what causes body copy and headers to render in navy by mistake.

**Margins are always 16px.** Every `margin` is **16px** (`var(--spacing-16)`) — no other margin value, ever. This is the only legal non-zero margin; the sole exception is an explicit `margin: 0` reset. Need a different amount of separation? Don't reach for a margin — use the layout's `gap` (flex/grid) or the relevant token-driven `padding` instead. Margin is reserved for the 16px gutter and nothing else.

---

## Iconography

- **System:** thin line icons in the **Lucide** style (≈1.6–2px stroke, round caps/joins) — the original kit imports `lucide-react`. This recreation ships an inline equivalent set in [`ui_kits/icons.js`](./ui_kits/icons.js) (`window.LumaIcons`: Coins, TrendUp, Plus, Users, Chevron(s), Search, Filter, Bell, User, Download, Settings, Star, Check, X, Edit, Clock, Doc, Info, ArrowUp/DownRight). If you need icons not in this set, pull the matching glyph from [Lucide](https://lucide.dev) (CDN) to stay on-style. *(Substitution note: the inline set is a faithful Lucide-style stand-in, not the npm package.)*
- **Sizes:** 16px in small buttons/badges, 20px in medium buttons, 22–24px in TopNav.
- **No emoji, ever.** No unicode-glyph icons in production (a couple appear in specimen cards only for brevity). Icons reinforce meaning; left icons are decorative, right icons (chevron/arrow) signal navigation/expansion.
- **The Luma mark** is provided both as the `LumaLogo` React component (code-rendered, no asset needed) and as SVG files in `assets/`. Icon (square) + full (icon + wordmark), in navy / light / Blue.60.
- **Brand logos** live in `assets/logos/carriers/` (66) and `assets/logos/issuers/` (8) as PNGs, shown via the circular `Avatar`. Carriers = insurance/annuity pages; issuers = capital-markets pages.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (`@import`s all tokens).
- `readme.md` — this guide.
- `SKILL.md` — Agent-Skill front matter for use in Claude Code.

**`tokens/`** (all reachable from `styles.css`)
- `fonts.css` — IBM Plex Sans + IBM Plex Mono (Google Fonts).
- `colors.css` — primitive scales + surface / text / action / stroke / chart tokens.
- `typography.css` — type scale (`--text-*`) + `--font-mono`.
- `spacing.css` — spacing, radius, shadow tokens.
- `base.css` — element defaults (body, h1–h3, p, label), mono financial data, selected-row rule.
- `components.css` — `.lf-*` component classes (hover/focus live here).
- `components-layout.css` — `.lf-*` classes for Page/Section, MetricCard, Table, ComparisonBar, SwimlaneMap, NavigationMenu.

**`components/`** — React primitives (`.jsx` + `.d.ts` + `.prompt.md` + a `@dsCard` HTML per folder)
- `buttons/` — **Button**, **Badge** + **StatusDot**, **ChoiceChip** + **ChoiceChipGroup**
- `forms/` — **Input**, **SplitInput**, **Select**, **Slider**, **Checkbox**, **Radio**, **Toggle**, **SearchBar**
- `layout/` — **Page** + **PageContent**, **Section**, **Card** (+ Header/Title/Content), **MetricCard**, **Table**, **Divider**, **Avatar** (+ Group), **FilterPanel**, **ToolBar**
- `navigation/` — **Tabs**, **SegmentedControl**, **Stepper**, **TopNav**, **NavigationMenu** (mega-menu panel), **PageHeader**, **Footer**
- `feedback/` — **Tooltip**, **ProgressBar**, **AiInsights** (AI explanation panel)
- `charts/` — **Chart** (Highcharts-backed: line/area, bar, donut, sparkline, heatmap), **ComparisonBar**, **SwimlaneMap**
- `brand/` — **LumaLogo**

**`guidelines/`** — foundation specimen cards (Type, Colors, Spacing, Brand) for the Design System tab.

**`templates/`** — screen-archetype starting points offered to consuming projects (each folder: a `.dc.html` entry + `ds-base.js`)
- `page-template/` — **Page Template**, the canonical correct screen (mirror this when composing any page)
- `dashboard/` — summary-first domain screen (metrics → chart → table)
- `overview/` — the homepage (dark hero + quick links — homepage ONLY)
- `table-view/` — data list as primary content (+ batch ToolBar)
- `swimlanes/` — comparison columns + Table view toggle + SwimlaneMap
- `form/` — stepped input collection with sticky action bar
- `modal/` — overlay pattern (scrim, Surface.Secondary container, stepped header)

**`ui_kits/`** — full-screen product recreations (load the bundle + `icons.js`)
- `overview/` — Overview homepage (dark hero + quick links + events + rate changes)
- `research/` — Annuities marketplace (filters + comparison rows)
- `manage/` — Orders swimlane board (+ batch ToolBar)
- `lifecycle/` — Securities dashboard (metrics, portfolio health, holdings, performance)
- `icons.js` — shared Lucide-style icon set (`window.LumaIcons`)

**`assets/`** — `luma-icon-*.svg`, `luma-full-*.svg`, `logos/carriers/*.png`, `logos/issuers/*.png`

---

## Intentional additions

The mounted Flux Kit source (`@make-kits/leander-playground`) defines only its **icon families** (`.Base Icon Library` ×2, `Icon`) as Figma components — it ships no Figma component definitions for buttons, forms, cards, etc. Every React primitive in `components/` was therefore built from the kit's `guidelines/`, `src/app/components/*.tsx`, and `src/imports/Screens/` reference material, not from a matching Figma component. All 41 are **intentional additions**, confirmed here per design-system convention:

- **From the source `.tsx`/guidelines directly:** `LumaLogo`, `Badge`, `StatusDot`, `Button`, `ChoiceChip`, `ChoiceChipGroup`, `Input`, `SplitInput`, `Select`, `Slider`, `Checkbox`, `Radio`, `Toggle`, `Card`/`CardHeader`/`CardTitle`/`CardContent`, `Divider`, `Avatar`/`AvatarGroup`, `Tabs`, `SegmentedControl`, `Stepper`, `TopNav`, `PageHeader`, `Footer`, `Tooltip`, `ProgressBar`, `AiInsights`, `ToolBar` — reimplementations of the kit's own components, one-to-one.
- **From the Flux 1.1 source update (June 2026):** `Page`/`PageContent`, `Section`, `MetricCard`, `Table`, `ComparisonBar`, `SwimlaneMap`, `NavigationMenu` — one-to-one ports of the new `src/app/components/*.tsx`.
- **Added later, no source counterpart, requested by the team:** `Chart` (Highcharts-backed line/area/bar/donut/sparkline/heatmap — the kit had only a one-off hand-rolled inline SVG chart), `SearchBar` (formalizes the natural-language ask-bar built ad hoc in `va-marketplace`), `FilterPanel` (unifies three inconsistent hand-rolled filter bars across Research/Manage/Lifecycle into one shape).

No renames needed — these names are the kit's vocabulary going forward.

---

## Using a component in `@dsCard` / kit HTML

```html
<link rel="stylesheet" href="../../styles.css" />
<script src="…/react@18…"></script>
<script src="…/react-dom@18…"></script>
<script src="…/@babel/standalone…"></script>
<script src="../../_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, Card, TopNav, Footer } = window.LumaFluxDesignSystem_35cd19;
  // …render…
</script>
```

## Critical rules (don't break these)
- **Top navigation only** — no sidebars, ever.
- **Surface hierarchy** — Blue.10 page → Neutral.10 section → Neutral.00 card. Compose with `Page` / `Section` / `Card` so the surfaces come for free; white cards never sit directly on the page.
- **Footer last**, 32px gap above it, on every screen.
- **Tabular figures on all numbers**; **financial data in IBM Plex Mono** (`--font-mono`, `data-mono`); metric values = Display.Small mono with the delta Badge inline. **Sentence case** all labels. **Blue, not purple.**
- **24px card padding**, fluid card widths, cards not clickable.
- **Margins are always 16px** (`var(--spacing-16)`) — the only legal non-zero margin; everything else is `gap` or `padding`.
- Carrier logos on insurance pages, issuer logos on securities pages — never crossed.
