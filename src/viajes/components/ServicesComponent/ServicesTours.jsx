import React from 'react'
import { ToursCards } from './ToursCards'
import { country } from '../../../data'

export const ServicesTours = () => {
  return (
    <section className='row'>
      <div className=''>
        <h1 className='font-extrabold text-2xl py-8 text-center'>Tours Guiados en varios destinos</h1>
      </div>
      {
        country.map( tour => (
          <ToursCards 
            key={ tour.id }
            { ...tour }
          />
        ))
      }
    </section>
  )
}