import type { AppProps } from 'next/app'
import Image from 'next/image'

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
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <CartContainer>
          <AmountContainer>
            <span>1</span>
          </AmountContainer>
          <Image src={cartImg} alt="" />
        </CartContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
