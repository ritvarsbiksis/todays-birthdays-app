import { CSSObject } from '@emotion/css'

export interface EventListStyles {
  root: CSSObject
}

export interface EventInfo {
  year: string
  title: string
  description?: string
}

export interface EventListProps {
  eventsData: EventInfo[]
}
