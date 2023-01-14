import { css } from '@emotion/css'

import { EventItem } from './components/event-item/event-item'
import { useStyles } from './event-list.styles'
import { EventListProps } from './event-list.types'

export const EventList = ({ eventsData }: EventListProps) => {
  const styles = useStyles()

  return (
    <ul className={css(styles.root, { label: 'event-list-root' })}>
      {eventsData.map((event, key) => (
        <EventItem eventInfo={event} key={key} />
      ))}
    </ul>
  )
}
