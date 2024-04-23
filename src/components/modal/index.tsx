import Image from 'next/image'
import React from 'react'

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
import shirtImg from '../../assets/shirt.svg'

interface ModalProps {
  modalState: 'opened' | 'closed'
  setModalState: (value: 'opened' | 'closed') => void
}

export const Modal: React.FC<ModalProps> = ({ modalState, setModalState }) => {
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
        <ProductsContainer>
          <ProductItemContainer>
            <Image className="shirtImg" src={shirtImg} alt="" />
            <InfoContainer>
              <h2>Camiseta Beyond the Limits</h2>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </InfoContainer>
          </ProductItemContainer>
        </ProductsContainer>
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
