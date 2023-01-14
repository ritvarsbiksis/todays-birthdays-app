import { EventItemStyles } from './event-item.types'

export const useStyles = (): EventItemStyles => {
  return {
    // event-item-root
    root: {
      marginBottom: 10,
    },
    // event-item-year
    year: {
      color: 'darkgrey',
      fontSize: 'small',
      fontWeight: 600,
    },
    // event-item-description
    description: {
      fontSize: 'medium',
      fontWeight: 300,
      color: 'darkgrey',
    },
  }
}
