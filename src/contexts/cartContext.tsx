import axios from 'axios'
import React, {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'

interface CartContextType {
  products: {
    id: string
    name: string
    description: string
    imageUrl: string
    price: string
    defaultPriceId: string
    unformattedPrice: number
  }[]
  totalProducts: number
  formattedTotalPrice: string
  isCreatingCheckoutSession: boolean
  handleAddToCart: (product: CartContextType['products'][number]) => void
  handleRemoveFromCart: (product: CartContextType['products'][number]) => void
  handleBuyProduct: () => Promise<void>
}

interface CartProviderProps {
  children: ReactNode
}

const cartContext = createContext({} as CartContextType)

export const CartContextProvider: React.FC<CartProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<CartContextType['products']>([])

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const totalProducts = useMemo(() => products?.length, [products])

  const totalPrice = products.reduce((previousValue, currentItem) => {
    return previousValue + currentItem.unformattedPrice
  }, 0)

  const formattedTotalPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(totalPrice)

  const handleAddToCart = (newProduct: CartContextType['products'][number]) => {
    const foundProduct = products.find(
      (product) => product.defaultPriceId === newProduct.defaultPriceId,
    )

    if (foundProduct) {
      return
    }

    const auxProducts = [...products, { ...newProduct }]

    setProducts(auxProducts)
  }

  const handleRemoveFromCart = (
    oldProduct: CartContextType['products'][number],
  ) => {
    const auxProducts = products.filter(
      (product) => product.defaultPriceId !== oldProduct.defaultPriceId,
    )

    setProducts(auxProducts)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const productItems = products.map((product) => ({
        price: product.defaultPriceId,
        quantity: 1,
      }))

      const response = await axios.post('/api/checkout', {
        productItems,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
      alert('Falha no redirecionamento')
    }
  }

  return (
    <cartContext.Provider
      value={{
        products,
        totalProducts,
        formattedTotalPrice,
        handleAddToCart,
        handleRemoveFromCart,
        handleBuyProduct,
        isCreatingCheckoutSession,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(cartContext)

  if (!context) {
    throw new Error('useCart must be inside a CartContextProvider')
  }

  return context
}
