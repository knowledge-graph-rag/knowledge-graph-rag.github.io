# Knowledge Graph RAG project page provenance

Verified: 2026-07-15

## Source ledger

| Page content | Exact value or claim | Source | Location | Notes |
| --- | --- | --- | --- | --- |
| Title | Knowledge Graph RAG Assistant | Project repository | `README.md` heading | Canonical public project name. |
| Contribution | The interface keeps dense-search and DBpedia retrieval paths visible and lets a visitor inspect evidence. | Project repository | `README.md` introduction and “Why This Exists” | Editorially condensed without adding a factuality claim. |
| Status | Ethan Villalovoz's maintained fork of a Washington State University senior design capstone built for HackerEarth. | Project repository | `README.md`, “Why This Exists” | Preserved verbatim in meaning. |
| Original team | Molly Iverson, Ethan Villalovoz, Chandler Juego, Adam Shtrikman | Project repository | `README.md`, “Why This Exists” | Order preserved. |
| Architecture | React + TypeScript; FastAPI; SentenceTransformers + FAISS; DBpedia; OpenAI | Project repository | `README.md`, “System” | Responsibilities paraphrased from the canonical table. |
| Demo status | The recorded interface uses a deterministic fixture and does not score retrieval quality. | Project repository | `README.md` demo caption; `docs/demo-strategy.md` | Displayed next to the video and in the limitations section. |
| Live-demo status | GitHub Pages is a static walkthrough and does not run the backend, FAISS, DBpedia queries, or OpenAI synthesis. | Project repository | `docs/demo-strategy.md`, “Why Not GitHub Pages” | Used to prevent the static site from implying a hosted model. |
| Limitations | Corpus coverage, chunking, similarity thresholds, DBpedia sparsity, and inspectability not guaranteeing correctness | Project repository | `README.md`, “Limitations” | Condensed but not strengthened. |
| Code link | `https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant` | Project repository | Canonical repository URL | Verified public. |
| Dataset link | `https://huggingface.co/datasets/miverson9/acme10-he-ragapp-embeddings/tree/main` | Project repository | `README.md`, “Run The Full Pipeline” | No claim is made about a hosted model. |
| Demo video | `https://www.youtube.com/watch?v=YWdR3FAdq1o` | Project repository | `README.md`, “Project Record” | Original capstone recording. |
| Report links | Final report, abstract, client presentation, performance notes | Project repository | `README.md`, `docs/project-report/`, `docs/performance-stats.md` | Hosted from the canonical code repository. |

## Artifact ledger

| Asset | Scientific role | Original source | Rights status | Transform | Attribution |
| --- | --- | --- | --- | --- | --- |
| `docs/media/rag-demo.mp4` | Authentic interface walkthrough | Canonical project repository | Team-authored project asset; displayed from source repository | None | Caption links to source repository and labels deterministic-fixture status. |
| `docs/media/rag-poster.webp` | Video poster | Canonical project repository | Team-authored project asset; displayed from source repository | None | Same caption as video. |
| `docs/media/retrieval-flow.svg` | System architecture figure | Canonical project repository | Team-authored project asset; displayed from source repository | None | Figure caption links to editable Excalidraw source. |

Institutional and client logos are intentionally omitted. No PDF figure, benchmark plot, generated image, or third-party project asset is copied into the page.

## Reference influence ledger

| Reference | Role | Transferable principle | Local adaptation | Boundary / not copied | Credit needed |
| --- | --- | --- | --- | --- | --- |
| VoxPoser project page and repository split | Primary narrative reference | A dedicated user account can separate a research code repository from its project-page repository; the page should expose evidence and resources early. | Separate `knowledge-graph-rag` account and `knowledge-graph-rag.github.io` repository; evidence-first page sequence. | No VoxPoser code, copy, composition, branding, or assets used. | No code or asset credit required. |
| Knowledge Graph RAG repository README | Primary narrative and lineage | Keep retrieval evidence, reproducibility, and limitations adjacent. | Page follows the query → retrieval → evidence → synthesis chain and links all canonical artifacts. | No new scientific claims or benchmark values added. | Canonical repository and original team are credited. |

## Content completeness decisions

- Included: code, dataset, deterministic interface recording, original capstone recording, architecture figure, final report, abstract, performance notes, setup path, limitations, and original team attribution.
- Omitted intentionally: paper/BibTeX, venue, award, model checkpoint, and hosted app links because the canonical repository does not provide them.
- The page never describes the deterministic fixture as a retrieval-quality evaluation or the static site as a live RAG service.
