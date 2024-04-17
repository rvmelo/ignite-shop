import Image from 'next/image'
import React from 'react'

import { ModalContainer } from '@/styles/components/modal'

import closeImg from '../../assets/close.svg'

interface ModalProps {
  modalState: 'opened' | 'closed'
  setModalState: (value: 'opened' | 'closed') => void
}

export const Modal: React.FC<ModalProps> = ({ modalState, setModalState }) => {
  return (
    <ModalContainer data-state={modalState === 'opened' ? 'opened' : 'closed'}>
      <Image
        src={closeImg}
        width={520}
        height={480}
        alt=""
        onClick={() => setModalState('closed')}
      />
      <h2>Sacola de Compras</h2>
    </ModalContainer>
  )
}
