import React from 'react'

import homeStyles from './home.module.css'
import { PageHeader, ViajesSection } from '../components'

export const DestinosPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        <ViajesSection numCardsToShow={34}/>
      </main>
    </>
  )
}