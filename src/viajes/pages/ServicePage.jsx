import React from 'react'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import { AboutSection } from '../components/AboutSection/AboutSection'
import homeStyles from './home.module.css'
import { ServicesDiscount } from '../components/ServicesComponent/ServicesDiscount'
import { ServicesBanks } from '../components/ServicesComponent/ServicesBanks'
import { ServicesTours } from '../components/ServicesComponent/ServicesTours'

export const ServicePage = () => {
  return (
    <>
      <PageHeader page='servicios' />

      <main className={ homeStyles.home }>
        <ServicesDiscount />
        <ServicesTours />
        <ServicesBanks />
        <AboutSection />
      </main>
    </>
  )
}