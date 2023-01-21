import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { App } from 'components/app/app'
import { GlobalStyles } from 'styles/global-styles'

import reportWebVitals from './reportWebVitals'
import { ErrorBoundary } from 'components/error-boundary/error-boundary'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const queryClient = new QueryClient({ defaultOptions: { queries: { useErrorBoundary: true } } })

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
