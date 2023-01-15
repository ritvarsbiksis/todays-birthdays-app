import { Global } from '@emotion/react'

export const GlobalStyles = () => {
  return (
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        code: {
          fontFamily: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
          color: 'grey',
        },
      }}
    />
  )
}
