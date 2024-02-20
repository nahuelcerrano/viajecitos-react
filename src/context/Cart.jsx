import React, { createContext, useContext, useState } from 'react'
import { useReducer } from 'react';

const CartContext = createContext()

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.payload]
  
    default:
      break;
  }
}

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, [])

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      { children }
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}