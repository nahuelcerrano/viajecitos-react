import React from 'react'

import { ViajesSection, HotelSection, AdSection } from '../components'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import homeStyles from './home.module.css'

export const TripPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        <ViajesSection />
        <AdSection />
        <HotelSection />
      </main>

    </>
  )
}