import { EvidenceInspector } from './components/EvidenceInspector'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { project } from './project'

function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />

        <Section id="abstract" eyebrow="Abstract" title="Two retrieval paths in one delivered prototype" className="abstract-section">
          <div className="abstract-copy">
            {project.abstract.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <p className="contribution-statement">
            <span>What this work establishes</span>
            A credible systems-integration record: data preparation, dense indexing, entity lookup, prompt construction, a browser interface, automated tests, and Docker delivery operate within one prototype.
          </p>
        </Section>

        <Section
          id="evidence"
          eyebrow="Evidence contract"
          title="Inspect what each retrieval path contributes"
          intro={<p>Focus the dense or graph path to compare its role in the deterministic prompt fixture. Both remain visible by default so the combined context is not hidden behind the final answer.</p>}
          wide
          className="evidence-section"
        >
          <EvidenceInspector />
        </Section>
      </main>
      <Footer />
    </>
  )
}

export default App
