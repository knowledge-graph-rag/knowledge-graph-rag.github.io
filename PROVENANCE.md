# KG-RAG project page provenance

Verified: 2026-07-16

## Canonical source order

1. Supplied paper, `RAGApp-Academic-Paper-Final.pdf`, for title, authorship, affiliation, claims, tests, timing, limitations, and contributions.
2. Maintained project repository for current code, links, setup instructions, and authentic web media.
3. Existing official GitHub Pages site for the currently published disclosure and project-record baseline.
4. Private research-page template for actual code lineage.
5. PointWorld and VoxPoser as design references only.

## Source ledger

| Page content | Exact value or claim | Source | Location | Notes/conflict |
| --- | --- | --- | --- | --- |
| Title | RAG Application Using Knowledge Graph and Vector Search | Supplied paper | Page 1 title | Supersedes the shorter repository/project-page title in the paper identity block. |
| Short project name | KG-RAG Assistant | Supplied paper | Page 1 abstract | Used only as navigation shorthand. |
| Authors | Molly Iverson, Ethan Villalovoz, Chandler Juego, Adam Shtrikman | Supplied paper | Page 1 author line | Order preserved. |
| Affiliation | Washington State University | Supplied paper | Page 1 | No university logo is used. |
| Publication status | Senior capstone technical report; no venue, DOI, or arXiv record supplied | Paper and repositories | Whole record | The page must not imply peer-reviewed publication. |
| Main contribution | Systems integration of dense vector search, DBpedia entity context, replaceable PDF notes, and LLM synthesis | Supplied paper | Abstract; Sections 3 and 9 | Editorial summary; not an accuracy claim. |
| Corpus scale | More than 10,000 Wikipedia articles | Supplied paper | Abstract; Section 3.2 | Exact corpus rows and release manifest were not preserved. |
| Dense retrieval | all-MiniLM-L6-v2, normalized vectors, FAISS IndexFlatIP, top ten, 0.5 threshold | Supplied paper | Section 3.4 | Reserved for the completed method section. |
| Historical timing | Final three-run average of 7.615 seconds for “Who is Alan Turing?” | Supplied paper | Section 5.2; Table 4 | Historical engineering measurement, not a reproducible benchmark. |
| Testing | Twelve representative report cases passed; a supporting CI screenshot recorded sixteen passing tests and four warnings | Supplied paper | Sections 5.1 and Appendix A.6 | The difference is retained rather than reconciled. |
| Evaluation boundary | Answer quality and a KG accuracy advantage were not benchmarked | Supplied paper | Sections 5 and 8; conclusion | Must remain visible in the completed page. |
| Demo fixture | Deterministic sample evidence demonstrates the interface and does not score retrieval quality | Project repository | `frontend/rag-app/src/data/demo.ts`; README | Exact fixture content powers the preview interaction. |
| Paper link | `./paper/RAGApp-Academic-Paper-Final.pdf` | User-supplied paper | Local page asset | Self-hosted in the project-page repository. |
| Code link | `https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant` | Project repository | Canonical URL | Verified public. |
| Dataset link | `https://huggingface.co/datasets/miverson9/acme10-he-ragapp-embeddings/tree/main` | Project repository | README | Separate artifact provenance applies. |
| Original demo link | `https://www.youtube.com/watch?v=YWdR3FAdq1o` | Project repository | README project record | Used as a resource, not embedded in the preview. |

## Artifact ledger

| Local asset | Scientific role | Original source | Rights status | Transform | Attribution destination |
| --- | --- | --- | --- | --- | --- |
| `public/media/rag-demo.mp4` | Authentic interface walkthrough | Maintained project repository | Team-authored project asset | None | Adjacent caption and third-party notices |
| `public/media/rag-poster.webp` | Video poster | Maintained project repository | Team-authored project asset | None | Same caption as video |
| `public/media/retrieval-flow.svg` | Architecture figure for completed page | Maintained project repository | Team-authored project asset | None | Figure caption and third-party notices |
| `public/paper/RAGApp-Academic-Paper-Final.pdf` | Primary paper resource | User-supplied final paper | User-authorized project asset | None | Paper resource label and citation section |
| Fixture text and scores in `src/project.ts` | Contribution-specific interaction | Maintained repository `frontend/rag-app/src/data/demo.ts` | Team-authored source fixture | Reformatted into an evidence inspector; values and meaning unchanged | Inline fixture disclosure and code link |

No PointWorld or VoxPoser code, media, logos, paper figures, prompts, or custom assets are included.

## Unresolved items for the completed page

- The paper supplies no venue, DOI, arXiv ID, or canonical scholarly citation. A technical-report citation may be prepared, but it must be labeled as such.
- The dataset has separate provenance and reuse terms; the page links it without relicensing it.
- Only Ethan has a verified author profile link in the supplied sources. Other author names remain plain text unless verified links are provided.
