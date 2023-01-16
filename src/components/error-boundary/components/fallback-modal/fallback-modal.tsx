import { css } from '@emotion/css'
import Modal from 'react-modal'

import { FallbackModalProps } from './fallback-modal.types'

Modal.setAppElement('#root')

export const FallbackModal = ({ error, resetErrorBoundary }: FallbackModalProps) => (
  <Modal
    isOpen
    onRequestClose={resetErrorBoundary}
    overlayClassName={css({
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgb(130 130 130 / 67%)',
    })}
  >
    <h3>{error.name}</h3>
    <h4>{error.message}</h4>
    <button onClick={resetErrorBoundary}>Close</button>
    <hr />
    <code style={{ fontSize: '14px' }}>{error.stack}</code>
  </Modal>
)
