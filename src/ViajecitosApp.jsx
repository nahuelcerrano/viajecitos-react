import React from 'react'
import { AppRouter } from './router/AppRouter'

import { NextUIProvider } from '@nextui-org/react'
import { CartProvider } from './context/Cart'

export const ViajecitosApp = () => {
  return (
    <NextUIProvider>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </NextUIProvider>
  )
}