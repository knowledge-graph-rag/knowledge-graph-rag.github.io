export type IconName = 'database' | 'external' | 'film' | 'github' | 'menu' | 'paper'

export interface Author {
  name: string
  href?: string
}

export interface Resource {
  label: string
  href: string
  icon: IconName
  download?: boolean
}

export interface EvidenceSource {
  title: string
  excerpt: string
  score?: number
}
