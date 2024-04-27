import Image from 'next/image'
import React from 'react'

import { useCart } from '@/contexts/cartContext'
import {
  BottomSection,
  InfoContainer,
  LabelsContainer,
  ModalContainer,
  ProductItemContainer,
  ProductsContainer,
  PurchaseButton,
  SaleInfo,
  TopSection,
} from '@/styles/components/modal'

import closeImg from '../../assets/close.svg'

interface ModalProps {
  modalState: 'opened' | 'closed'
  setModalState: (value: 'opened' | 'closed') => void
}

export const Modal: React.FC<ModalProps> = ({ modalState, setModalState }) => {
  const { products, handleRemoveFromCart } = useCart()

  return (
    <ModalContainer data-state={modalState === 'opened' ? 'opened' : 'closed'}>
      <Image
        className="closeImg"
        src={closeImg}
        width={520}
        height={480}
        alt=""
        onClick={() => setModalState('closed')}
      />
      <TopSection>
        <h2>Sacola de Compras</h2>
        {products.map((product) => (
          <ProductsContainer key={product.id}>
            <ProductItemContainer>
              <Image
                className="shirtImg"
                width={96}
                height={96}
                src={product.imageUrl}
                alt=""
              />
              <InfoContainer>
                <h2>{product.name}</h2>
                <span>{product.price}</span>
                <button onClick={() => handleRemoveFromCart(product)}>
                  Remover
                </button>
              </InfoContainer>
            </ProductItemContainer>
          </ProductsContainer>
        ))}
      </TopSection>
      <BottomSection>
        <SaleInfo>
          <LabelsContainer>
            <span>Quantidate</span>
            <strong>Valor total</strong>
          </LabelsContainer>
          <LabelsContainer>
            <span className="amount">3 itens</span>
            <strong className="price">R$ 270,00</strong>
          </LabelsContainer>
        </SaleInfo>
        <PurchaseButton>Finalizar Compra</PurchaseButton>
      </BottomSection>
    </ModalContainer>
  )
}
