import React from 'react'
import { ToursCards } from './ToursCards'

export const ServicesTours = () => {
  return (
    <section className='row'>
      <div className=''>
        <h1 className='font-extrabold text-xl py-8'>Tours Guiados en varios destinos</h1>
      </div>
      <ToursCards />
      <ToursCards />
      <ToursCards />
      <ToursCards />
    </section>
  )
}