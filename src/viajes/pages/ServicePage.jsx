import React from 'react'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import { AboutSection } from '../components/AboutSection/AboutSection'
import homeStyles from './home.module.css'

export const ServicePage = () => {
  return (
    <>
      <PageHeader page='servicios' />

      <main className={ homeStyles.home }>
        <AboutSection />
      </main>
    </>
  )
}