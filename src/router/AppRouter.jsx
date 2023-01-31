import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ContactPage } from '../contacto/pages/ContactPage'
import { ViajesRoutes } from '../viajes/routes/ViajesRoutes'

export const AppRouter = () => {

  return (
    <>
      <Routes>

        <Route path='contact' element={<ContactPage />} />

        <Route path='/*' element={<ViajesRoutes />} />
      
      </Routes>
    </>
  )
}