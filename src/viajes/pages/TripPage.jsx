import React from 'react'

import { ViajesSection, HotelSection, AdSection } from '../components'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import homeStyles from './home.module.css'
import { ViajesAdSection } from '../components/ViajesSection/ViajesAdSection'

export const TripPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        <ViajesSection numCardsToShow={8}/>
        <ViajesAdSection />
        <HotelSection />
      </main>

    </>
  )
}