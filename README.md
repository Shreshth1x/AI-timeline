# The AI timeline

A minimal, sourced public timeline explaining AI through breakthroughs, cultural moments and public reactions. Five brief precursors lead into 2015–9 September 2026.

## Content

`app/events.json` is the editable collection. Each entry carries a stable anchor, event/publication date, short explanation, editorial significance, category and evidence links. The page renders the whole collection without account requirements or third-party social embeds.

Selection favors changes a nontechnical reader can understand: surprising abilities, ordinary people doing extraordinary things, and public debates. Model releases are included when they change the story. Evidence labels distinguish reported accounts, demonstrations and predictions. Polls identify their geography; posts are not treated as representative surveys. Month-only dates retain their original precision and are placed within their month using known relative chronology.

[Accelerando](https://github.com/prinz-ai/accelerando) provided leads for the recent research-automation story. Original sources were checked separately. Repeated benchmark updates, revenue milestones and speculative extrapolations were generally omitted; scientific results, coding agents, real safety incidents and insider warnings were retained with context. Neither the source project's singularity framing nor its claims about inevitability are adopted as facts.

## Design

The current presentation follows [Physical Intelligence](https://www.pi.website/): a narrow document centered on the page, with left-aligned text, a compact header, straightforward text links and restrained sizing. All text uses Helvetica/Arial on white, including dates. There are no colored labels, decorative rules, oversized headings, progress indicators or scroll effects. Source photographs remain alongside the relevant events.

The original version drew on Mobbin and Osmo references; the current design supersedes that styling at the user's request. All event data, original links and stable anchors remain intact.

## Local use

Run `npm install` if dependencies are absent, then `npm run dev`. Use `npm run build` for production and `npx tsc --noEmit` for type checks. The Sites project identifier is retained in `.openai/hosting.json`; reuse it when publishing updates.

## Vercel deployment

The production site is [aicompletetimeline.vercel.app](https://aicompletetimeline.vercel.app), in the `harshithmbusiness-projects` Vercel team. Source lives in [Shreshth1x/AI-timeline](https://github.com/Shreshth1x/AI-timeline).

Vercel runs `npm run build:vercel` and serves the static `dist/client` export. This build pre-renders all timeline entries and excludes the Cloudflare-specific plugins; it needs no runtime secrets or account sign-in. The normal `npm run build` remains available for the original Sites deployment.
