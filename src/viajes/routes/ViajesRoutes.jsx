import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/Navbar'
import { AboutPage } from '../pages/AboutPage'
import { HomePage } from '../pages/HomePage'
import { OfficePage } from '../pages/OfficePage'
import { TripPage } from '../pages/TripPage'

export const ViajesRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Routes>
          <Route path='home' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='viajes' element={<TripPage />} />
          <Route path='oficinas' element={<OfficePage />} />

          <Route path='/*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </>
  )
}