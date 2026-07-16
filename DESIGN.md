# KG-RAG academic project page design brief

## Classification

- Operating mode: official project page.
- Baseline classification: redesign. The published page is technically clean and honest, but its oversized editorial hero and product-record framing do not foreground the supplied academic paper.
- Audience: researchers, capstone reviewers, recruiters, and open-source contributors.
- Primary job: identify the paper, show the delivered system, distinguish the two retrieval paths, and route visitors to the paper and reproducibility artifacts.

## Page brief

- One-sentence contribution: a delivered RAG prototype that integrates exact dense retrieval over normalized SentenceTransformer embeddings with first-entity DBpedia context and language-model synthesis in one inspectable system.
- First-viewport evidence: exact paper identity, author order, Washington State University affiliation, verified resources, and the authentic interface recording.
- Complete resource set for the finished page: paper PDF, code, deterministic interface recording, original capstone video, dataset, final report, project abstract, client presentation, performance record, editable architecture source, and local/Docker setup.
- Scientific questions:
  1. What did the capstone system integrate and deliver?
  2. What does dense retrieval contribute, and what does DBpedia contribute?
  3. What does the deterministic interface fixture establish?
  4. What testing and historical timing evidence exists?
  5. What was not evaluated, and what remains limited?
  6. How can another developer read, run, and inspect the project?
- Contribution-specific interaction: an evidence inspector that exposes the checked-in deterministic query fixture, its two dense passages and scores, its knowledge-graph context, and the resulting synthesis. Visitors can focus either path without hiding the other by default.

## Design thesis

Use the visual grammar of an academic paper page: centered identity, compact resource controls, authentic media, readable prose, and thin rules. The signature is the side-by-side evidence contract, with restrained blue and green path colors carried from retrieval to synthesis.

## Reference influence ledger

| Reference | Role | Principle adopted | Local adaptation | Boundary / not copied |
| --- | --- | --- | --- | --- |
| Ethan's private research-page template | Code lineage and shared shell | Centered paper identity, compact resources, responsive navigation, restrained citation treatment | React/Vite shell and accessible controls are instantiated with KG-RAG data and components | All PointWorld content, media, logos, project-specific explorers, and copy are removed |
| PointWorld | Primary narrative reference | Establish paper identity and resources before the method; let authentic evidence dominate | The KG-RAG demo recording follows title, authors, affiliation, and resources | No code, custom icons, media, branding, or composition is copied |
| VoxPoser | Component reference | Demonstrate behavior early and make the method inspectable | One controlled demo plus an evidence-path inspector | No code, media, prompt files, styling, or markup is copied |
| Existing KG-RAG page | Project lineage | Preserve explicit fixture/static-hosting disclosures and complete project record | The disclosure is carried into the video caption and evidence module | The oversized editorial treatment and generic stage stepper are not retained |

## Representative preview scope

This branch intentionally implements only the reusable header, paper identity, authentic teaser, abstract, and central evidence inspector. Quantitative validation, architecture, limitations, reproducibility, team contributions, and citation are held until the direction is approved.

## Acceptance criteria

- Exact paper title, author order, and WSU affiliation match the supplied PDF.
- No venue, award, DOI, arXiv identifier, or comparative accuracy claim is invented.
- The paper, code, demo, and data resources are independently usable.
- The authentic video has controls, a poster, `preload="metadata"`, and a fixture-not-benchmark caption.
- The evidence inspector uses the checked-in frontend fixture verbatim in meaning and exposes both retrieval paths by default.
- Focus controls are keyboard accessible, have visible selected state, and respect reduced motion.
- Desktop 1440x1000 and mobile 390x844 render without horizontal overflow.
- The production build, typecheck, console, and primary interaction pass before review.
- The live `main` branch is not changed until the representative preview is approved.
