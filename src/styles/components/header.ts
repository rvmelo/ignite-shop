import { styled } from '..'

export const StyledHeader = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const CartContainer = styled('div', {
  borderRadius: 6,
  background: '$gray800',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '3rem',
  width: '3rem',
  position: 'relative',

  '&:hover': {
    cursor: 'pointer',
  },
})

export const AmountContainer = styled('div', {
  height: '1.5rem',
  width: '1.5rem',
  borderRadius: '100%',
  background: '$green500',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  top: -8,
  right: -8,

  position: 'absolute',

  span: {
    color: '$white',
  },
})
