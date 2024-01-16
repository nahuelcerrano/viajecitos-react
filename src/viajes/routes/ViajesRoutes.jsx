import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from '../../ui/components/Footer'
import { Navbar } from '../../ui/components/Navbar'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { ServicePage } from '../pages/ServicePage'
import { TripPage } from '../pages/TripPage'
import { ViajesSection } from '../components'

export const ViajesRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='servicios' element={<ServicePage />} />
          <Route path='viajes' element={<TripPage />} />
          <Route path='viajes/destinos' element={<ViajesSection />} />
          

          <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}