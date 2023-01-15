import { QueryFunctionContext, useQuery } from '@tanstack/react-query'
import axios from 'axios'

import { DD_PARAM, MM_PARAM, ONTHISDAY_BIRTHS_ENDPOINT } from 'constants/endpoints'
import { ONTHISDAY_BIRTHS_KEY } from 'constants/query-keys'
import { BirthsResponse } from 'types/onthisday'

interface UseWikiBirthdaysDataProps {
  mm: string
  dd: string
}

export const useWikiBirthdaysData = ({ mm, dd }: UseWikiBirthdaysDataProps) => {
  const fetchBirths = async ({ queryKey }: QueryFunctionContext<string[]>) => {
    const [, mm, dd] = queryKey
    const endpoint = ONTHISDAY_BIRTHS_ENDPOINT.replace(MM_PARAM, mm).replace(DD_PARAM, dd)
    return await axios.get<BirthsResponse>(endpoint).then(({ data }) => data)
  }

  return useQuery([ONTHISDAY_BIRTHS_KEY, mm, dd], fetchBirths, {
    refetchOnWindowFocus: false,
  })
}
