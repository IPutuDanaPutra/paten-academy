# Paten Academy

Marketing landing page for **Paten Academy** — an 8-week AI literacy and product execution program for Indonesian solo founders and hustlers. Built as a single-page Next.js site with an embedded AI concierge chat that answers visitor questions using only the confirmed program content on the page.

**Live site:** _add your Vercel URL here after deploying_

---

## What's on the page

- **Hero** — full-width italic Source Serif 4 headline over a soft, slowly-drifting painterly gradient field
- **Kinetic marquee band** — `IDEA → PROMPT → MVP → LAUNCH`, continuous scroll with a shifting brand-gradient background
- **Why Paten Academy** — problem statements as stacked editorial rows, plus an asymmetric bento grid for the program's differentiators
- **Who This Is For** — an oversized italic pull-quote of the confirmed persona statement
- **What You'll Learn** — the Learning Objective and 5 curriculum focus areas as an uneven (3-then-2) card grid
- **Program Structure** — a horizontal timeline (desktop) / vertical timeline (mobile) across the program's three phases, over a dotted technical-diagram texture
- **Community & Partners** — an auto-scrolling, grayscale-to-color logo marquee of real, individually-verified partner organizations, plus a "become a partner" callout
- **Pricing** — the confirmed ticket price with a what's-included checklist
- **FAQ** — an accessible accordion (built on Radix UI) covering cost, duration, curriculum, and cohort size, with the full week-by-week curriculum table embedded in one answer
- **Call for Founders** — the closing application CTA
- **Ask Paten AI** — a floating chat concierge (see below)

### Content discipline

Every fact on the page traces back to `src/lib/content.ts`, a single typed source of truth shared by both the UI components and the chat agent's system prompt. Anything the source planning materials left unresolved (program duration ambiguity, unconfirmed team roles, unverified partner names, internal financials) is either explicitly flagged in the UI (a code comment, a placeholder state) or added to an `openItems` list that the chat agent is instructed to refuse to answer rather than guess at. Nothing on this site is fabricated to fill a gap.

## Ask Paten AI (chat concierge)

A floating chat trigger (bottom-right) opens a panel where visitors can ask about the program. It's grounded entirely in `content.ts` — the system prompt is generated directly from that file, so the agent can't know more (or less) than what's on the page. Anything explicitly unresolved (see `openItems` in `content.ts`) gets a polite deferral instead of a guess.

- **Backend:** a single Next.js API route (`src/app/api/chat/route.ts`) streams a response token-by-token from an OpenAI-compatible chat completions API (currently wired to [DeepSeek](https://api-docs.deepseek.com/)).
- **One site-wide key, not per-visitor:** the API key lives in a server-side environment variable (`CHAT_API_KEY`). Once it's set, chat works for every visitor automatically — there's no per-visitor key entry UI, and there shouldn't be.
- **Swapping providers:** since it's implemented against the OpenAI SDK, pointing it at a different OpenAI-compatible provider is a one-line `baseURL` change in `route.ts`.

## Tech stack

- **[Next.js 16](https://nextjs.org)** (App Router, Turbopack)
- **[Tailwind CSS v4](https://tailwindcss.com)** (CSS-first config, no `tailwind.config.js`)
- **[Radix UI](https://www.radix-ui.com/)** primitives (Accordion) for the FAQ
- **[Lucide](https://lucide.dev/)** for icons
- **[OpenAI SDK](https://github.com/openai/openai-node)** for the chat backend (pointed at an OpenAI-compatible provider)
- **TypeScript** throughout

No `tailwind.config.js` exists on purpose — Tailwind v4's default spacing/radius scale already matches this design system's tokens, so theme customization lives entirely in `src/app/globals.css` (`@theme inline` + a handful of small utility classes for things Tailwind doesn't ship, like the tactile card/button shadows and the painterly gradient background).

## Getting started

```bash
npm install
cp .env.local.example .env.local   # then fill in CHAT_API_KEY
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment variables

| Variable | Required | Description |
|---|---|---|
| `CHAT_API_KEY` | For the chat feature | Server-side API key for the chat backend. Without it, the chat panel opens and streams a graceful error instead of a response — the rest of the site works fine either way. |

## Project structure

```
src/
  app/
    api/chat/route.ts      # streaming chat endpoint
    layout.tsx              # font loading (Inter + Source Serif 4)
    globals.css              # design tokens + custom utility classes
    page.tsx                 # section assembly
  components/
    chat/                    # chat provider, panel, floating trigger, greeting bubble
    nav/                     # floating glass pill navbar
    ui/                      # small headless-UI wrappers (accordion)
    *.tsx                    # one component per page section
  lib/
    content.ts               # single source of truth for all copy
    icons.ts                 # icon name → Lucide component map
public/
  logo/                      # site wordmark
  logos/                     # verified partner organization logos
```

## Scripts

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run start    # run the production build locally
npm run lint     # eslint
```

## Deployment

Deployed on [Vercel](https://vercel.com). To deploy your own copy:

1. Import this repository into Vercel.
2. Add `CHAT_API_KEY` under Project Settings → Environment Variables (Production and Preview).
3. Deploy. Redeploy after adding/changing the env var — it doesn't apply retroactively to a running deployment.

## Known open items

A few things intentionally aren't hardcoded because the underlying facts aren't confirmed yet — see the `TODO` comments in the code and the `openItems` array in `src/lib/content.ts` for the full list. Notably:

- Total program duration (planning materials state both 8 and 12 weeks — the site currently uses 8, the majority-stated figure)
- The real logo asset for two partner organizations (only an icon-only mark was publicly available; no distinct wordmark was found)
- A confirmed partner-inquiry contact address (currently a placeholder link)
