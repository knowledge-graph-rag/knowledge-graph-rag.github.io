import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  eyebrow?: string
  title: string
  intro?: ReactNode
  children: ReactNode
  wide?: boolean
  className?: string
}

export function Section({ id, eyebrow, title, intro, children, wide = false, className = '' }: SectionProps) {
  return (
    <section id={id} className={`section ${className}`.trim()} aria-labelledby={`${id}-title`}>
      <div className={wide ? 'container-wide' : 'container'}>
        {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        {intro ? <div className="section-intro">{intro}</div> : null}
        {children}
      </div>
    </section>
  )
}
