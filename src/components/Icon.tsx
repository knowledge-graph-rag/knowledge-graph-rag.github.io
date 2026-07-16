import { FaDatabase, FaFileLines, FaFilm, FaGithub } from 'react-icons/fa6'
import type { IconName } from '../types'

interface IconProps {
  name: IconName
  size?: number
}

export function Icon({ name, size = 19 }: IconProps) {
  const filled = { size, 'aria-hidden': true }
  const shared = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (name) {
    case 'database': return <FaDatabase {...filled} />
    case 'film': return <FaFilm {...filled} />
    case 'github': return <FaGithub {...filled} />
    case 'paper': return <FaFileLines {...filled} />
    case 'external': return <svg {...shared}><path d="M14 4h6v6M20 4 11 13"/><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6"/></svg>
    case 'menu': return <svg {...shared}><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  }
}
