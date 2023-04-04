import React from 'react'
import { AdSection, DestinoSection, PageHeader, RecorridoSection, OfertaSection, NosotrosSection } from '../components'
import homeStyles from './home.module.css'

export const HomePage = () => {
  return (
    <>
      <PageHeader page='home' />
      
      <main className={homeStyles.main}>
        <RecorridoSection />
        <AdSection />
        <DestinoSection />
        <OfertaSection />
        <NosotrosSection />
      </main>


    </>
  )
}