import React from 'react'
import { ToursCards } from './ToursCards'
import { destinos } from '../../../data'

export const ServicesTours = () => {
  return (
    <section className='row'>
      <div className=''>
        <h1 className='font-extrabold text-2xl py-8 text-center'>Tours Guiados en varios destinos</h1>
      </div>
      {
        destinos.map( tour => (
          <ToursCards 
            key={ tour.id }
            { ...tour }
          />
        ))
      }
    </section>
  )
}