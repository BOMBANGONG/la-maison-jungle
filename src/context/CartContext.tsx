import React, { useState, useEffect, createContext } from 'react'

type Plant = {
  name: string
  category: string
  id: string
  light: number
  water: number
  cover: string
  price: number
  description: string
}

type Cart = ({ amount?: number } & Partial<Plant>)[]

type CartContextType = {
  cart: Cart
  updateCart: (name: string, amount: number) => void
  emptyCart: () => void
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

const getInitCart = () => {
  try {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
  } catch (error) {
    console.error(error)
    return []
  }
}

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<Cart>(getInitCart)

  function updateCart(name: string, price: number) {
    const currentPlantAdded = cart.find(plant => plant?.name === name)

    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        plant => plant?.name !== name,
      )
      setCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: (currentPlantAdded.amount ?? 0) + 1 },
      ])
    } else {
      setCart([...cart, { name, price, amount: 1 }])
    }
  }

  // set cart to empty cart
  function emptyCart() {
    setCart([])
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, updateCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  )
}
