import { useState } from 'react'

import { BirthdayList } from './components/birthday-list/birthday-list'

export const BirthdaysPage = () => {
  const [loadData, setLoadData] = useState<boolean>(false)
  return loadData ? <BirthdayList /> : <button onClick={() => setLoadData(true)}>Load data</button>
}
