import React from 'react'
import { AppRouter } from './router/AppRouter'

import { NextUIProvider } from '@nextui-org/react'
import { CartProvider } from './context/Cart'
import { FiltersProvider } from './context/Filters'

export const ViajecitosApp = () => {
  return (
    <NextUIProvider>
      <CartProvider>
        <FiltersProvider>
          <AppRouter />
        </FiltersProvider>
      </CartProvider>
    </NextUIProvider>
  )
}