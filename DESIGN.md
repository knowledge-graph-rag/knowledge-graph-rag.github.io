# KG-RAG Project Page Design Specification

## Product Truth

- Audience: researchers, engineers, capstone reviewers, and prospective contributors.
- Primary job: understand the project, inspect authentic evidence, and reach the paper, code, video, and data.
- Primary flow: paper identity -> prototype evidence -> abstract -> video -> method -> evaluation -> limitations -> citation.
- Domain artifacts: retrieval traces, system architecture, prototype video, test records, and the paper.
- Constraint: static GitHub Pages site with no build step and no fabricated scholarly status.

## Research and Influence Ledger

| Reference | Role | Principle adopted | What remains distinct | Code or asset reuse |
| --- | --- | --- | --- | --- |
| VoxPoser | Primary visual reference | Academic masthead hierarchy, Google Sans/Noto Sans pairing, Bulma-scale typography and spacing, compact dark resource buttons, 60%-width teaser, light results band, 960px reading sections, simple BibTeX block, quiet footer | KG-RAG title, authors, status, resources, media, scientific content, and diagrams | None; local source inspected as reference only |
| Motion Tracks | Component reference | Paper end matter uses a centered section title, one-third/two-thirds paper-and-citation layout, and layered paper thumbnail | KG-RAG paper, authors, citation, links, typography, and copy control | None; clean local reimplementation with team-owned paper preview |
| NeRFies | Lineage reference | Familiar academic-project-page hierarchy | No NeRFies code or assets | None |
| PerAct | Lineage reference | Compact research-resource presentation | No PerAct code or assets | None |
| KG-RAG paper | Canonical narrative | Title, authors, abstract, method, historical timing, limitations, acknowledgements | Editorial web sequencing only | Team-authorized paper content |
| KG-RAG repository | Canonical artifacts | Demo, poster, retrieval-flow figure, and resource links | Presentation adapted for the project page | Team-authored assets |

## Design Thesis

Present KG-RAG as a restrained academic systems project whose identity comes from its inspectable two-path retrieval evidence, not decorative product styling.

## Information Architecture

- Initial viewport: title, six-person contributor line, WSU/HackerEarth affiliations, official affiliation marks, capstone status, and four resources.
- Evidence sequence: authentic teaser -> project views -> contribution summary -> abstract -> walkthrough -> method -> evaluation -> limitations.
- End matter: acknowledgements, Motion Tracks-style paper and citation section, and a single-line design attribution.

## Visual System

- Typography: Google Sans for the masthead and teaser; Noto Sans for body copy and section headings. VoxPoser's 48px title, 32px section title, and 20px author/affiliation scales are retained.
- Color: near-black paper title, reference blue (`#4b9ae8`) hero author links, muted crimson status, and neutral grays elsewhere. Superscripts and punctuation remain neutral so linked names carry the emphasis.
- Layout: centered masthead; exact four-fifths text column inside a 960px desktop container; later sections use the 1152px widescreen rhythm; responsive containers follow Bulma's 960/1152/1344px breakpoints.
- Components: Bulma-proportioned dark rounded resource buttons, 10px media radii, light-gray project-view band, and no product cards.
- Responsive: title and author line scale down; resource buttons and affiliation marks wrap; tables scroll only inside their own region.

## Accessibility and Performance

- Semantic headings and landmarks; visible focus rings; descriptive link text.
- Autoplay teaser is muted, inline, and paused for reduced-motion users.
- Video poster prevents an empty loading frame; below-fold images lazy-load.
- No analytics, tracking scripts, or framework runtime.

## Acceptance Contract

| Quality | Test | Passing evidence |
| --- | --- | --- |
| Scientific identity | Compare against supplied paper | Exact title, author order, affiliation, and capstone status |
| Resource completeness | Exercise links | Paper, code, video, and dataset resolve |
| Authentic evidence | Compare assets with source repository | Only team paper/media/figures are shipped |
| Responsive layout | Render at 1440px and 390px | No page-level horizontal overflow or clipped controls |
| Accessibility | Keyboard and reduced-motion checks | Visible focus, semantic labels, teaser respects motion preference |
| Provenance | Review notices and footer | Canonical content and visual inspiration are distinguished |
