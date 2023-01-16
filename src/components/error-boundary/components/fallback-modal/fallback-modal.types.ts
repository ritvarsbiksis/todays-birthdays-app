import { AxiosError } from 'axios'

export interface FallbackModalProps {
  error: Error | AxiosError
  resetErrorBoundary: () => void
}
