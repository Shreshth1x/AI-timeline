# The AI timeline

A minimal, sourced public timeline explaining AI through breakthroughs, cultural moments and public reactions. Four brief precursors lead into 2015–9 September 2026.

## Content

`app/events.json` is the editable collection. Each entry carries a stable anchor, event/publication date, short explanation, editorial significance, category and evidence links. The page renders the whole collection without account requirements or third-party social embeds.

Selection favors changes a nontechnical reader can understand: surprising abilities, ordinary people doing extraordinary things, and public debates. Model releases are included when they change the story. Evidence labels distinguish reported accounts, demonstrations and predictions. Polls identify their geography; posts are not treated as representative surveys. Month-only dates retain their original precision and are placed within their month using known relative chronology.

[Accelerando](https://github.com/prinz-ai/accelerando) provided leads for the recent research-automation story. Original sources were checked separately. Repeated benchmark updates, revenue milestones and speculative extrapolations were generally omitted; scientific results, coding agents, real safety incidents and insider warnings were retained with context. Neither the source project's singularity framing nor its claims about inevitability are adopted as facts.

## Design references

- [Matter's archive on Mobbin](https://mobbin.com/screens/344f302f-87b5-47f5-bb73-3db1dda84227): compact metadata, unobtrusive separators and generous white space.
- [Substack's reading history on Mobbin](https://mobbin.com/screens/b9d8ba56-a6af-49a0-bb86-9f267ee5674c): readable text-first entries with supporting sources.
- [Osmo Sticky Steps](https://www.osmo.supply/resource/sticky-steps-basic) and [Sticky Section Tabs](https://www.osmo.supply/resource/sticky-section-tabs-css): adapted active-section tracking and sticky year context, with native scrolling, requestAnimationFrame scheduling and reduced-motion support.

All type uses system Arial/Helvetica. Images are factual source illustrations, linked and credited in place: Google's DeepDream comparison (CC BY 4.0) and Paul Conyngham with Rosie (Gamgee).

## Local use

Run `npm install` if dependencies are absent, then `npm run dev`. Use `npm run build` for production and `npx tsc --noEmit` for type checks. The Sites project identifier is retained in `.openai/hosting.json`; reuse it when publishing updates.
