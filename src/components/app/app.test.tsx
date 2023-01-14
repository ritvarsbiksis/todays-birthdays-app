import { createSerializer } from '@emotion/jest'
import { render, screen } from '@testing-library/react'

import { App } from './app'

expect.addSnapshotSerializer(createSerializer())

describe('App', () => {
  test('renders header element', () => {
    const { asFragment } = render(<App />)

    const header = screen.getByRole('banner')
    expect(header).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot()
  })
})
