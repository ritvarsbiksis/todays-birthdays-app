import { CSSObject } from '@emotion/css'

import { EventInfo } from '../../event-list.types'

export interface EventItemProps {
  eventInfo: EventInfo
}

export interface EventItemStyles {
  root: CSSObject
  year: CSSObject
  description: CSSObject
}
