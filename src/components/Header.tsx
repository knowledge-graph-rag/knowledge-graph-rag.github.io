import { useEffect, useState } from 'react'
import { project } from '../project'
import { Icon } from './Icon'
import { Mark } from './Mark'

const navItems = [
  ['Overview', 'overview'],
  ['Abstract', 'abstract'],
  ['Evidence', 'evidence'],
] as const

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('overview')

  useEffect(() => {
    const sections = navItems
      .map(([, id]) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible?.target.id) setActive(visible.target.id)
    }, { rootMargin: '-20% 0px -65%', threshold: [0, 0.2, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#overview" aria-label={`${project.shortTitle}, back to top`}>
          <Mark />
          <span>{project.shortTitle}</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen((value) => !value)}>
          <span className="sr-only">Toggle navigation</span>
          <Icon name="menu" size={23} />
        </button>
        <nav id="site-nav" className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Project sections">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-github" href="https://github.com/ethanvillalovoz/knowledge-graph-rag-assistant" target="_blank" rel="noreferrer" aria-label="KG-RAG source code on GitHub">
            <Icon name="github" size={21} />
          </a>
        </nav>
      </div>
    </header>
  )
}
