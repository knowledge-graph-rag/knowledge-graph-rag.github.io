# KG-RAG Project Page Provenance

Verified: 2026-07-19

## Source Ledger

| Page content | Exact value or claim | Canonical source | Location | Notes |
| --- | --- | --- | --- | --- |
| Title | RAG Application Using Knowledge Graph and Vector Search | Supplied final paper | Page 1 | Preserved verbatim |
| Authors | Molly Iverson, Ethan Villalovoz, Chandler Juego, Adam Shtrikman, Vikas Aditya, Parteek Kumar | Revised supplied technical report | Page 1 | Six-author order preserved in the header, paper metadata, and report citation |
| Affiliations | Washington State University; HackerEarth | Revised supplied technical report | Page 1 | Superscripts distinguish WSU contributors from the HackerEarth contributor |
| Project status | Spring 2025 senior capstone for HackerEarth | Supplied final paper | Abstract and Introduction | Not a conference publication |
| Main contribution | Two retrieval paths combine dense Wikipedia/PDF retrieval with DBpedia entity context before language-model synthesis | Supplied final paper | Abstract; Sections 1 and 3 | Systems-integration claim, not an accuracy claim |
| Corpus scale | More than 10,000 Wikipedia articles | Supplied final paper | Abstract; Section 3.2 | Exact release manifest was not preserved |
| Testing | Twelve representative report cases passed; separate CI screenshot records sixteen passed tests and four warnings | Revised supplied technical report | Section 6.1; Figure 4; Appendix A.1 | Counts are not merged; software behavior, not answer-quality accuracy |
| Historical timing | Final three-run average of 7.615 seconds for one Alan Turing prompt | Revised supplied technical report | Section 6.2; Figure 5; Appendix A.2 | Historical engineering measurement, not a reproducible benchmark or latency guarantee |
| Evaluation boundary | Answer quality and a KG accuracy advantage were not benchmarked | Revised supplied technical report | Sections 6-8 | Remains visible beside the validation evidence |
| Code | `ethanvillalovoz/knowledge-graph-rag-assistant` | Official maintained repository | README and repository URL | Public MIT-licensed source repository |
| Demo | YouTube project record and checked-in MP4 | Official maintained repository | README; `docs/media` | Interface demonstration, not a retrieval-quality evaluation |
| Data | Project-owned retrieval artifacts at immutable revision `28777c9a144261672040710e0316ca5e40345172` | Official maintained repository | README; `docs/REPRODUCIBILITY.md` | Original teammate-hosted repository remains documented as provenance |
| Software release | v1.1.1; DOI `10.5281/zenodo.21445868` | Official maintained repository | `CITATION.cff`; README | Displayed as software metadata, not a paper venue |
| Paper-to-code boundary | Report records April 2025 commit `1ad5cc0`; current `main` is maintained v1.1.1 | Official maintained repository | `docs/REPRODUCIBILITY.md` | Reproductions must record the intended code surface |
| Report citation | Six authors, 2025, Washington State University | Official maintained repository | `CITATION.cff` preferred citation | Shown separately from the software citation |
| Software citation | Molly Iverson, Ethan Villalovoz, Chandler Juego, Adam Shtrikman; v1.1.1; DOI | Official maintained repository | `CITATION.cff` | Shown separately from the report citation |
| Author contributions | Four student developers; Vikas Aditya provided project guidance/client feedback; Parteek Kumar provided capstone instruction/supervision | Revised supplied technical report | Author contributions, page 6 | Authorship and contribution wording are both preserved |

## Artifact Ledger

| Shipped asset | Role | Original source | Rights status | Transform |
| --- | --- | --- | --- | --- |
| `assets/media/rag-demo.mp4` | Prototype teaser | KG-RAG repository | Team-authored project asset | None |
| `assets/media/rag-poster.webp` | Video poster | KG-RAG repository | Team-authored project asset | None |
| `assets/media/system-overview-paper.svg` | Archived April 2025 system overview | KG-RAG repository | Team-authored project asset | None |
| `assets/media/validation-record.webp` | Figure 4 validation record | Revised supplied technical report | User-authorized project asset | Figure region rasterized from page 5; labels and conditions retained |
| `assets/media/timing-record.webp` | Figure 5 historical timing record | Revised supplied technical report | User-authorized project asset | Figure region rasterized from page 5; labels and conditions retained |
| `assets/paper/RAGApp-Academic-Paper-Final.pdf` | Revised technical report resource | User-supplied revised paper | User-authorized project asset | Stable website filename retained |
| `assets/paper/paper-preview.webp` | Revised paper preview | User-supplied revised paper | User-authorized project asset | First page rasterized and resized |
| `assets/brands/wsu-primary-horizontal.svg` | WSU affiliation mark | Official WSU brand logos page inline primary horizontal lockup | Institutional trademark; used factually | Official inline SVG packaged locally with its official page colors; geometry unchanged |
| `assets/brands/hackerearth-wordmark.png` | Client mark | Official HackerEarth Help Center logo asset | Company mark; used factually | None |
| `assets/brands/huggingface.svg` | Dataset service icon | Official Hugging Face site asset | Service mark; used to identify destination | None |

## Visual Reference Boundary

The locally downloaded VoxPoser source was inspected to understand its hierarchy, spacing, and academic-page conventions. The Motion Tracks page and public source were inspected for the paper-and-citation section's information hierarchy. No HTML, CSS, JavaScript, prompts, paper, media, logos, figures, or interactive assets from these references are included. NeRFies and PerAct are named as the visible template lineage; their code and assets are not included either.
