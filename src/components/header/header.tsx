import { css } from '@emotion/css'

import { PAGE_TITLE } from 'constants/titles'

import { useStyles } from './header.styles'

export const Header = () => {
  const styles = useStyles()

  return (
    <header className={css(styles.root, { label: 'header-root' })}>
      <h1 className={css(styles.title, { label: 'header-title' })}>{PAGE_TITLE}</h1>
    </header>
  )
}
