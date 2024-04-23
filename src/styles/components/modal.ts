import { styled } from '..'

export const ModalContainer = styled('div', {
  minWidth: '30rem',
  height: '100%',
  padding: '72px 48px 48px',
  zIndex: 999,
  background: '$gray800',

  position: 'absolute',
  right: 0,
  top: 0,

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  transition: 'all 0.2s ease-in-out',

  "&[data-state='opened']": {
    transform: 'translateX(0%)',
  },

  "&[data-state='closed']": {
    transform: 'translateX(100%)',
  },

  h2: {
    color: '$gray100',
    fontWeight: 700,
    fontSize: '1.25rem',
  },

  '.closeImg': {
    height: '1.5rem',
    width: '1.rem',
    color: '#8D8D99',

    position: 'absolute',
    top: '1.75rem',
    right: '-13.125rem',

    '&:hover': {
      cursor: 'pointer',
    },
  },
})

export const ProductsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  marginTop: '2rem',
})

export const ProductItemContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem',

  '.shirtImg': {
    position: 'relative',
    borderRadius: '8px',
    width: '6rem',
    height: '6rem',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  },
})

export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',

  paddingBottom: '0.5rem',

  h2: {
    marginBottom: '5px',
    color: '$gray300',
    fontSize: '1.125rem',
    fontWeight: 400,
  },

  span: {
    marginBottom: '8px',
    color: '$gray100',
    fontWeight: 700,
    fontSize: '1.125rem',
  },

  button: {
    background: 'transparent',
    border: 'none',
    color: '$green300',
    fontSize: '1rem',
    fontWeight: 700,

    cursor: 'pointer',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green500',
    },
  },
})

export const SaleInfo = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const LabelsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',

  span: {
    color: '$gray100',
    fontWeight: 400,
    fontSize: '1rem',
  },

  strong: {
    color: '$gray100',
    fontWeight: 700,
    fontSize: '1.125rem',
  },

  '.amount': {
    color: '$gray300',
    fontSize: '1.125rem',
    fontWeight: 400,
  },

  '.price': {
    color: '$gray100',
    fontSize: '1.5rem',
    fontWeight: 700,
  },
})

export const PurchaseButton = styled('button', {
  background: '$green300',

  padding: '20px 0',

  width: '100%',

  marginTop: '3.5rem',

  transition: 'all 0.2s ease-in-out',

  '&:hover': {
    background: '$green500',
  },

  cursor: 'pointer',

  border: 'none',
  borderRadius: '8px',

  color: '$white',
  fontSize: '1.125rem',
  fontWeight: 700,
})

export const TopSection = styled('div', {})

export const BottomSection = styled('div', {
  marginTop: '2rem',
})
