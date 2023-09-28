import React from 'react'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import { AboutSection } from '../components/AboutSection/AboutSection'
import homeStyles from './home.module.css'
import { ServicesDiscount } from '../components/ServicesSection/ServicesDiscount'
import { ServicesBanks } from '../components/ServicesSection/ServicesBanks'

export const ServicePage = () => {
  return (
    <>
      <PageHeader page='servicios' />

      <main className={ homeStyles.home }>
        <ServicesDiscount />
        <ServicesBanks />
        <AboutSection />
      </main>
    </>
  )
}