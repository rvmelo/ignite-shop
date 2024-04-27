import Image from 'next/image'
import React from 'react'

import { useCart } from '@/contexts/cartContext'

import cartImg from '../../assets/cart.svg'
import logoImg from '../../assets/logo.svg'
import {
  AmountContainer,
  CartContainer,
  StyledHeader,
} from '../../styles/components/header'

interface HeaderProps {
  setModalState: (value: 'opened' | 'closed') => void
}

export const Header: React.FC<HeaderProps> = ({ setModalState }) => {
  const { totalProducts } = useCart()

  return (
    <StyledHeader>
      <Image src={logoImg} alt="" />
      <CartContainer onClick={() => setModalState('opened')}>
        {totalProducts > 0 && (
          <AmountContainer>
            <span>{totalProducts}</span>
          </AmountContainer>
        )}
        <Image src={cartImg} alt="" />
      </CartContainer>
    </StyledHeader>
  )
}
