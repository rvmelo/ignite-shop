import type { AppProps } from 'next/app'
import Image from 'next/image'
import { useState } from 'react'

import { Modal } from '@/components/modal'
import { globalStyles } from '@/styles/global'
import {
  AmountContainer,
  CartContainer,
  Container,
  Header,
} from '@/styles/pages/app'

import cartImg from '../assets/cart.svg'
import logoImg from '../assets/logo.svg'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [modalState, setModalState] = useState<'opened' | 'closed'>('closed')

  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartContainer onClick={() => setModalState('opened')}>
          <AmountContainer>
            <span>1</span>
          </AmountContainer>
          <Image src={cartImg} alt="" />
        </CartContainer>
      </Header>
      <Modal modalState={modalState} setModalState={setModalState} />
      <Component {...pageProps} />
    </Container>
  )
}
