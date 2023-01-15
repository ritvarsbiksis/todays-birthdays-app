import userEvent from '@testing-library/user-event'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import birthsResponse from 'mock-data/births-response.json'
import { render, screen, waitFor } from 'utils/test-utils'

import { BirthdaysPage } from './birthdays-page'

describe('BirthdaysPage', () => {
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  test('render content after click button', async () => {
    mock.onGet().reply(200, birthsResponse)

    render(<BirthdaysPage />)

    await userEvent.click(screen.getByRole('button'))
    await waitFor(async () => await screen.findByRole('list'), { timeout: 3000 })

    expect(screen.getByRole('list')).toBeTruthy()
  })
})
