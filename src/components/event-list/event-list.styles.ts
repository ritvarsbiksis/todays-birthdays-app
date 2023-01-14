import { EventListStyles } from './event-list.types'

export const useStyles = (): EventListStyles => {
  return {
    // event-list-root
    root: {
      color: 'darkcyan',
      listStyleType: 'none',
      padding: 0,
      maxWidth: '600px',
    },
  }
}
