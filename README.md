# Knowledge Graph RAG Project Page

Official project website for *RAG Application Using Knowledge Graph and Vector
Search*, a Washington State University senior capstone developed with
HackerEarth.

- [Live project page](https://knowledge-graph-rag.github.io/)
- [Technical report](assets/paper/RAGApp-Academic-Paper-Final.pdf)
- [Source code](https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant)
- [Versioned retrieval artifacts](https://huggingface.co/datasets/ethanvillalovoz/knowledge-graph-rag-retrieval-artifacts/tree/28777c9a144261672040710e0316ca5e40345172)

## Repository structure

```text
.
├── assets/
│   ├── brands/        Affiliation and resource marks
│   ├── media/         Project video, poster, and report figures
│   └── paper/         Technical report and first-page preview
├── index.html         Page content and semantic structure
├── styles.css         Layout, typography, and responsive styles
├── script.js          Citation tabs, copy control, and motion preference
├── DESIGN.md          Design system and acceptance criteria
├── PROVENANCE.md      Content, artifact, and reference-source ledger
└── THIRD_PARTY_NOTICES.md
```

The site is intentionally dependency-free: it uses static HTML, CSS, and
JavaScript and does not require a build step.

## Local preview

From the repository root, run:

```bash
python3 -m http.server 4180
```

Then open <http://127.0.0.1:4180/>.

## Editing guide

- Keep scholarly claims, author order, citations, and resource links aligned
  with the technical report and maintained software repository.
- Record content or asset changes in [PROVENANCE.md](PROVENANCE.md).
- Record material layout or interaction changes in [DESIGN.md](DESIGN.md).
- Keep project media under `assets/media/`, brand marks under `assets/brands/`,
  and paper files under `assets/paper/`.
- Preserve reduced-motion behavior for the teaser video and keyboard behavior
  for the citation tabs.

## Validation

Before publishing a change:

```bash
node --check script.js
git diff --check
```

Also inspect the page at desktop and mobile widths, exercise both citation
tabs and the copy button, and confirm that local assets and outbound resources
resolve.

## Deployment

GitHub Pages publishes the repository root from the `main` branch. A push to
`main` updates the public site, so changes should be locally verified before
they are published.

## Licensing and attribution

The original site code is available under the [MIT License](LICENSE). The
paper, project media, institutional marks, service marks, and linked dataset
retain their own rights and terms. See [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)
and [PROVENANCE.md](PROVENANCE.md) for details.
