import type { Author, EvidenceSource, Resource } from './types'

export const project = {
  shortTitle: 'KG-RAG Assistant',
  title: 'RAG Application Using Knowledge Graph and Vector Search',
  status: 'Senior capstone technical report',
  affiliation: 'Washington State University',
  authors: [
    { name: 'Molly Iverson' },
    { name: 'Ethan Villalovoz', href: 'https://github.com/ethanvillalovoz' },
    { name: 'Chandler Juego' },
    { name: 'Adam Shtrikman' },
  ] satisfies Author[],
  resources: [
    { label: 'Paper', href: './paper/RAGApp-Academic-Paper-Final.pdf', icon: 'paper' },
    { label: 'Code', href: 'https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant', icon: 'github' },
    { label: 'Demo', href: 'https://www.youtube.com/watch?v=YWdR3FAdq1o', icon: 'film' },
    { label: 'Data', href: 'https://huggingface.co/datasets/miverson9/acme10-he-ragapp-embeddings/tree/main', icon: 'database' },
  ] satisfies Resource[],
  abstract: [
    'Retrieval-augmented generation (RAG) conditions a language model on information retrieved from an external corpus. This report presents KG-RAG Assistant, a senior capstone application that combines two retrieval paths: dense vector search over more than 10,000 Wikipedia articles and structured entity context from DBpedia. The system also supports a replaceable collection of PDF class notes to demonstrate retrieval over private or domain-specific material.',
    'A React interface communicates with a FastAPI backend, where spaCy processes the question, SentenceTransformer encodes it, FAISS retrieves semantically similar text, SPARQL queries DBpedia for the first recognized entity, and an OpenAI model synthesizes the resulting context. The team packaged the frontend and backend with Docker and exercised the implementation through unit, integration, functional, performance, and client-acceptance testing.',
    'All representative cases documented in the final report passed. For the prompt “Who is Alan Turing?”, the final three recorded runs averaged 7.615 seconds end to end; because the report did not preserve hardware and full runtime metadata, this number is a historical engineering measurement rather than a reproducible benchmark.',
  ],
}

export const evidenceFixture = {
  query: 'How do vector search and knowledge graphs complement each other?',
  graph: {
    title: 'Retrieval-augmented generation',
    excerpt: 'A generation pipeline can combine parametric model knowledge with information retrieved from an external corpus.',
  } satisfies EvidenceSource,
  vector: [
    {
      title: 'Semantic retrieval passage',
      excerpt: 'Dense retrieval represents queries and documents as vectors and ranks passages using geometric similarity.',
      score: 0.91,
    },
    {
      title: 'Knowledge graph passage',
      excerpt: 'Knowledge graphs encode entities and relationships in a structure that supports explicit traversal and queries.',
      score: 0.86,
    },
  ] satisfies EvidenceSource[],
  answer: 'Vector search finds passages that are semantically similar to a question, even when the wording differs. A knowledge graph contributes explicit entities and relationships. Used together, the vector index provides broad recall while the graph adds structured context that is easier to inspect and constrain.',
}
