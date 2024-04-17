import { styled } from '..'

export const ModalContainer = styled('div', {
  minWidth: '30rem',
  height: '100%',
  padding: '72px 48px 48px',
  zIndex: 999,
  background: '$gray800',

  position: 'absolute',
  right: 0,

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

  img: {
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
