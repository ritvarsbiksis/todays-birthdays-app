import { useMemo } from 'react'

import { EventInfo } from 'components/event-list/event-list.types'
import { useWikiBirthdaysData } from 'hooks/wiki-birthdays-data'

interface UseBirthdayList {
  birthdayList: EventInfo[]
  isSuccess: boolean
}

export const useBirthdayList = (): UseBirthdayList => {
  const [mm, dd] = new Date().toJSON().slice(5, 10).split('-')
  const { data, isSuccess } = useWikiBirthdaysData({ mm, dd })

  const birthdayList = useMemo((): EventInfo[] => {
    if (data?.births) {
      return data.births
        .map(({ text, year }) => {
          const [title, description] = text.split(', ')

          return {
            title,
            year: year.toString(),
            description,
          }
        })
        .sort(({ year: a }, { year: b }) => Number(b) - Number(a))
    }

    return []
  }, [data?.births])

  return {
    birthdayList,
    isSuccess,
  }
}
