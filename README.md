# Knowledge Graph RAG project page

Static project page for the [Knowledge Graph RAG Assistant](https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant), published at [knowledge-graph-rag.github.io](https://knowledge-graph-rag.github.io/).

The page is an evidence-first walkthrough of the project. It hosts no backend or live model: FastAPI, FAISS retrieval, DBpedia queries, OpenAI synthesis, and the full corpus remain part of the source repository's local/Docker workflow.

## Edit locally

No build step or dependency install is required.

```bash
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`. GitHub Pages publishes `index.html` from the `main` branch root.

## Content and assets

- Canonical content source: the maintained [project repository](https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant).
- The interface recording, poster, and retrieval-flow figure are served directly from that repository so this page does not maintain altered copies.
- Claim, resource, artifact, and reference-influence records are maintained in [PROVENANCE.md](PROVENANCE.md).
- The page's narrative, interaction, and acceptance criteria are documented in [DESIGN.md](DESIGN.md).

The original capstone team was Molly Iverson, Ethan Villalovoz, Chandler Juego, and Adam Shtrikman. This page does not claim that its deterministic interface fixture is a retrieval-quality evaluation or that GitHub Pages hosts the full RAG pipeline.

## License status

The application source repository carries an MIT license. This page repository does not currently apply a separate license to its page code; media and data retain the provenance and reuse conditions documented by their canonical sources.
