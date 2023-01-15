import { EventList } from 'components/event-list/event-list'

import { useBirthdayList } from './birthday-list.hooks'

export const BirthdayList = () => {
  const { isSuccess, birthdayList } = useBirthdayList()
  return isSuccess ? <EventList eventsData={birthdayList} /> : <div>Loading ...</div>
}
