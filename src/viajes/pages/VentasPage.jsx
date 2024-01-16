import React from 'react'

import homeStyles from './home.module.css'
import { ViajesSection } from '../components'

export const VentasPage = () => {
  return (
    <>
      <main className={homeStyles.main}>
        <ViajesSection/>
      </main>
    </>
  )
}