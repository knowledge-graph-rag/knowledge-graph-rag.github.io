import { useState } from 'react'
import { evidenceFixture } from '../project'

type Focus = 'both' | 'vector' | 'graph'

const focusLabels: Record<Focus, string> = {
  both: 'Showing both retrieval paths',
  vector: 'Focusing dense vector evidence',
  graph: 'Focusing knowledge-graph context',
}

export function EvidenceInspector() {
  const [focus, setFocus] = useState<Focus>('both')

  return (
    <div className="evidence-inspector" data-focus={focus}>
      <div className="inspector-toolbar">
        <div>
          <p className="toolbar-label">Deterministic interface fixture</p>
          <p className="toolbar-status" aria-live="polite">{focusLabels[focus]}</p>
        </div>
        <div className="focus-control" role="group" aria-label="Focus an evidence path">
          {(['both', 'vector', 'graph'] as Focus[]).map((option) => (
            <button key={option} type="button" aria-pressed={focus === option} onClick={() => setFocus(option)}>
              {option === 'both' ? 'Both paths' : option === 'vector' ? 'Dense' : 'Graph'}
            </button>
          ))}
        </div>
      </div>

      <div className="query-record">
        <span>Question</span>
        <p>{evidenceFixture.query}</p>
      </div>

      <div className="evidence-branches" aria-label="Retrieved evidence">
        <article className="evidence-path evidence-path--vector">
          <div className="path-heading">
            <div>
              <p className="path-kicker">Dense path</p>
              <h3>Semantic passages</h3>
            </div>
            <span className="path-count">2 above threshold</span>
          </div>
          <div className="source-list">
            {evidenceFixture.vector.map((source) => (
              <div className="source-record" key={source.title}>
                <div className="source-meta">
                  <strong>{source.title}</strong>
                  <span>{source.score?.toFixed(2)} similarity</span>
                </div>
                <p>{source.excerpt}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="evidence-path evidence-path--graph">
          <div className="path-heading">
            <div>
              <p className="path-kicker">Knowledge-graph path</p>
              <h3>Structured context</h3>
            </div>
            <span className="path-count">DBpedia fixture</span>
          </div>
          <div className="source-record source-record--graph">
            <div className="source-meta"><strong>{evidenceFixture.graph.title}</strong></div>
            <p>{evidenceFixture.graph.excerpt}</p>
          </div>
        </article>
      </div>

      <article className="synthesis-record">
        <div className="synthesis-heading">
          <span>Synthesis</span>
          <span>Fixture response</span>
        </div>
        <p>{evidenceFixture.answer}</p>
      </article>

      <p className="fixture-note">
        This is the project's checked-in offline fixture, reformatted for inspection. It is useful for reviewing the interface contract, not for measuring retrieval relevance, faithfulness, or a knowledge-graph advantage.
      </p>
    </div>
  )
}
