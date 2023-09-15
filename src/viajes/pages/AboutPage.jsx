import React from 'react'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import homeStyles from './home.module.css'
import { AboutSection } from '../components/AboutSection/AboutSection'

export const AboutPage = () => {
  return (
    <>
      <PageHeader page='about' />

      <main className={ homeStyles.home }>
        <AboutSection />
      </main>
    </>
  )
}