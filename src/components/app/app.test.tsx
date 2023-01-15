import { createSerializer } from '@emotion/jest'
import { render, screen } from '@testing-library/react'

import { App } from './app'

expect.addSnapshotSerializer(createSerializer())

describe('App', () => {
  test('renders correctly', () => {
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders header element', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })
})
