import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { renderHook, waitFor, wrapper } from 'utils/test-utils'
import birthsResponse from 'mock-data/births-response.json'

import { useBirthdayList } from './birthday-list.hooks'

describe('BirthdayList hooks', () => {
  let mock: MockAdapter

  beforeAll(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  describe('useBirthdayList', () => {
    test('useBirthdayList returns correct values', async () => {
      mock.onGet().reply(200, birthsResponse)

      const { result } = renderHook(useBirthdayList, { wrapper })

      await waitFor(() => expect(result.current.isSuccess).toBe(false))
      await waitFor(() => expect(result.current.birthdayList.length).toBe(3))
    })

    test('birthdayList data sorted correctly', async () => {
      mock.onGet().reply(200, birthsResponse)

      const { result } = renderHook(useBirthdayList, { wrapper })

      await waitFor(() =>
        expect(result.current.birthdayList[0].year).toBe(birthsResponse.births[1].year.toString()),
      )
    })
  })
})
