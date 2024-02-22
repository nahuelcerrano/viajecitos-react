import React from 'react'
import { ToursCards } from './ToursCards'
import { destinos } from '../../../data'

export const ServicesTours = () => {
  return (
    <section className='row'>
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