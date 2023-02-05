import React from 'react'
import { AdSection } from '../components/AdSection'
import { PageHeader } from '../components/PageHeader'
import { RecorridoSection } from '../components/RecorridoSection'
import homeStyles from './home.module.css'

export const HomePage = () => {
  return (
    <>
      <PageHeader page='home' />
      
      <main className={homeStyles.main}>
        <RecorridoSection />
        <AdSection />
        {/*<DestinoSection />
        <OfertaSection />
        <NosotrosSection /> */}
      </main>


    </>
  )
}