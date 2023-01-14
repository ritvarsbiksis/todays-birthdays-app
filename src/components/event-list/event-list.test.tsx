import { render, screen } from '@testing-library/react'

import data from 'mock-data/birthdays.json'

import { EventList } from './event-list'

describe('EventList', () => {
  test('renders correctly', () => {
    render(<EventList eventsData={data} />)

    expect(screen.getByRole('list')).toHaveStyle({
      color: 'darkcyan',
      listStyleType: 'none',
    })
    expect(screen.getAllByRole('listitem')).toHaveLength(5)
  })
})
