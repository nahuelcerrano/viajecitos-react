import React from 'react'

import homeStyles from './home.module.css'
import { PageHeader, ViajesSection } from '../components'
import { DestinoFilters } from '../components/FiltersComponents/DestinoFilters'

export const DestinosPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        {/* <DestinoFilters /> */}
        <ViajesSection numCardsToShow={34}/>
      </main>
    </>
  )
}