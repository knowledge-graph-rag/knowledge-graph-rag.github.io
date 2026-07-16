import { project } from '../project'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section className="hero" id="overview" aria-labelledby="project-title">
      <div className="container-wide hero-copy">
        <p className="paper-status">{project.status}</p>
        <h1 id="project-title">{project.title}</h1>
        <div className="author-list" aria-label="Authors">
          {project.authors.map((author, index) => (
            <span key={author.name} className="author">
              {author.href ? <a href={author.href} target="_blank" rel="noopener noreferrer">{author.name}</a> : author.name}
              {index < project.authors.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
        <p className="affiliation-line">{project.affiliation}</p>
        <div className="resource-links" aria-label="Project resources">
          {project.resources.map((resource) => (
            <a key={resource.label} href={resource.href} target="_blank" rel="noopener noreferrer" className="resource-link">
              <Icon name={resource.icon} />
              <span>{resource.label}</span>
            </a>
          ))}
        </div>
      </div>
      <figure className="container-wide teaser">
        <div className="teaser-frame">
          <video controls muted playsInline preload="metadata" poster="./media/rag-poster.webp" aria-label="Recorded KG-RAG Assistant interface walkthrough">
            <source src="./media/rag-demo.mp4" type="video/mp4" />
          </video>
        </div>
        <figcaption>
          <strong>Interface record.</strong> The checked-in deterministic fixture makes this source-selection interaction reproducible. The recording demonstrates the interface; it does not evaluate retrieval or answer quality.
        </figcaption>
      </figure>
    </section>
  )
}
