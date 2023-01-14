import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BirthdaysPage } from './birthdays-page'

describe('BirthdaysPage', () => {
  test('render content after click button', async () => {
    render(<BirthdaysPage />)

    await userEvent.click(screen.getByRole('button'))
    await waitFor(async () => await screen.findByRole('list'), { timeout: 3000 })

    expect(screen.getByRole('list')).toBeTruthy()
  })
})
