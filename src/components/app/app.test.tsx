import { render, screen } from '@testing-library/react'

import { App } from './app'

describe('App', () => {
  test('renders main element', () => {
    render(<App />)

    const divElement = screen.getByText(/app content/i)
    expect(divElement).toBeInTheDocument()
  })
})
