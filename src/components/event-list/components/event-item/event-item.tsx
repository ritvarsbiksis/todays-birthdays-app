import { css } from '@emotion/css'

import { useStyles } from './event-item.styles'
import { EventItemProps } from './event-item.types'

export const EventItem = ({ eventInfo }: EventItemProps) => {
  const styles = useStyles()

  return (
    <li className={css(styles.root, { label: 'event-item-root' })}>
      <div className={css(styles.year, { label: 'event-item-year' })}>{eventInfo.year}</div>
      <div>{eventInfo.title}</div>
      {eventInfo.description && (
        <div className={css(styles.description, { label: 'event-item-description' })}>
          {eventInfo.description}
        </div>
      )}
    </li>
  )
}
