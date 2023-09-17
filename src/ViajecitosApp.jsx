import React from 'react'
import { AppRouter } from './router/AppRouter'

import { NextUIProvider } from '@nextui-org/react'

export const ViajecitosApp = () => {
  return (
    <NextUIProvider>
      <AppRouter />
    </NextUIProvider>
  )
}