# RAG Application Using Knowledge Graph and Vector Search

Official academic project page for the [Knowledge Graph RAG Assistant](https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant).

This `redesign-preview` branch contains the representative visual direction: paper identity, verified resources, authentic interface media, the paper abstract, and a contribution-specific evidence inspector. The published `main` branch remains unchanged until the direction is approved.

## Run locally

Requirements: Node.js 20.19+ and pnpm.

```bash
pnpm install
pnpm dev
```

Create and inspect a production build with:

```bash
pnpm build
pnpm preview
```

## Evidence and rights

- Scientific identity and claims come from `public/paper/RAGApp-Academic-Paper-Final.pdf`.
- Current code, data, reports, and authentic media come from the maintained project repository.
- The interface shell is instantiated from Ethan Villalovoz's private `research-page-template`.
- PointWorld and VoxPoser are design references only; no code or media from those sites is included.
- The deterministic interface fixture demonstrates inspectability and does not measure retrieval or answer quality.

See [PROVENANCE.md](./PROVENANCE.md), [DESIGN.md](./DESIGN.md), and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md).

## License

Original page implementation is available under the [MIT License](./LICENSE). Research media, paper content, names, datasets, and third-party marks retain their respective rights and are not relicensed as generic template content.
