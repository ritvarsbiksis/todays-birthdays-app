import { Header } from 'components/header/header'
import { BirthdaysPage } from 'pages/birthdays-page/birthdays-page'

export const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Header />
      <BirthdaysPage />
    </div>
  )
}
