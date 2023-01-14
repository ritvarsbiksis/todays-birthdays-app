import { useEffect, useState } from 'react'

import { EventList } from 'components/event-list/event-list'
import birthdaysData from 'mock-data/birthdays.json'

import { ResponseStatus } from './birthdays-page.types'

export const BirthdaysPage = () => {
  const [dataStatus, setDataStatus] = useState<ResponseStatus>('initial')

  const handleClickButton = () => setDataStatus('loading')

  useEffect(() => {
    if (dataStatus === 'loading') {
      const loadingTimer = setTimeout(() => {
        setDataStatus('success')
      }, 2000)

      return () => clearTimeout(loadingTimer)
    }
  }, [dataStatus])

  switch (dataStatus) {
    case 'initial':
      return (
        <button type="button" onClick={handleClickButton}>
          Load data
        </button>
      )
    case 'loading':
      return <div>Loading ...</div>
    default:
      return <EventList eventsData={birthdaysData} />
  }
}
