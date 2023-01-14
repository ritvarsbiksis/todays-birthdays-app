import { HeaderStyles } from './header.types'

export const useStyles = (): HeaderStyles => {
  return {
    // header-root
    root: {
      marginBottom: '10px',
    },
    // header-title
    title: {
      margin: '0',
      color: 'darkslategray',
      textTransform: 'uppercase',
      fontWeight: 300,
    },
  }
}
