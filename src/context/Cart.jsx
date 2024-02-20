import React, { createContext, useEffect, useState } from 'react'
import { destinos } from '../data'

export const CartContext = createContext(null)

const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < destinos.length + 1; i++) {
    const countryId = `country${i}`
    cart[countryId] = 0
  }
  return cart
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  useEffect(() => {
    localStorage.setItem('destinos', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const contextValue = {cartItems, addToCart, removeFromCart}

  return (
    <CartContext.Provider value={contextValue}>
      { children }
    </CartContext.Provider>
  )
}