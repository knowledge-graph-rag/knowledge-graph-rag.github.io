# Knowledge Graph RAG project page design brief

## Classification

- Operating mode: official project page.
- Baseline classification: redesign.
- Audience: researchers, recruiters, open-source contributors, and capstone reviewers who need to understand and inspect the retrieval path quickly.
- Primary job: explain what the project exposes, show authentic interface evidence, and route visitors to code and reproducibility artifacts.

## Page brief

- One-sentence contribution: an evidence-aware RAG workspace that keeps semantic and DBpedia retrieval paths visible instead of hiding them behind a chat response.
- First-viewport evidence: project identity, original-team status, canonical resources, and the authentic deterministic interface recording.
- Complete resource set: code, local setup, dataset, interface recording, original capstone video, final report, abstract, client presentation, performance notes, and retrieval diagram source.
- Scientific questions:
  1. What does the interface expose that a conventional chat UI hides?
  2. How do vector and knowledge-graph paths contribute evidence?
  3. What does the recorded demo establish, and what does it not establish?
  4. How can someone reproduce or inspect the system?
  5. What limitations remain?
- Contribution-specific interaction: a four-stage, keyboard-operable retrieval-path stepper tied to the canonical architecture terminology. It explains the mechanism; it is not presented as experimental output.

## Design thesis

Treat the page like a compact technical record: quiet editorial typography, visible provenance, and one inspectable evidence path. The identity comes from the graph/vector split and the project's authentic artifacts, not a generic marketing shell.

## Signature element

The retrieval-path stepper keeps graph and vector evidence visually parallel before joining them at synthesis. Buttons expose `aria-pressed` state, work with keyboard and touch, retain a static fallback, and disable motion under `prefers-reduced-motion`.

## Acceptance criteria

- The first viewport names the project, its capstone/maintained-fork status, the original team, and exposes Code, Demo, Report, and Dataset links.
- The authentic video uses its repository poster, native controls, metadata-only preload, and an explicit deterministic-fixture caption.
- The architecture figure remains uncropped with meaningful alt text and an editable-source link.
- The stepper has deterministic state, visible selection, keyboard focus, and useful content with JavaScript disabled.
- No unsupported award, benchmark, factuality, latency, or hosted-demo claim appears.
- Static-hosting limitations, retrieval limitations, and original-team attribution remain visible.
- Desktop 1440×1000 and mobile 390×844 render without horizontal overflow.
- All resource links resolve; video and figure assets load; no console errors remain.
- Page has correct title, description, canonical URL, Open Graph metadata, favicon, semantic headings, skip link, focus visibility, reduced-motion handling, and HTTPS-only resources.
- Publication preflight passes in official-project mode or any warning is documented.
