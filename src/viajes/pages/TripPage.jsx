import React from 'react'
import { AdSection, RecorridoSection } from '../components'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import { ViajesSection } from '../components/ViajesSection/ViajesSection'
import homeStyles from './home.module.css'

export const TripPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        <ViajesSection />
        <AdSection />
        <RecorridoSection />
      </main>

    </>
  )
}