import type { AppProps } from 'next/app'
import { useState } from 'react'

import { Header } from '@/components/header'
import { Modal } from '@/components/modal'
import { CartContextProvider } from '@/contexts/cartContext'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [modalState, setModalState] = useState<'opened' | 'closed'>('closed')

  return (
    <CartContextProvider>
      <Container>
        <Header setModalState={setModalState} />
        <Modal modalState={modalState} setModalState={setModalState} />
        <Component {...pageProps} />
      </Container>
    </CartContextProvider>
  )
}
