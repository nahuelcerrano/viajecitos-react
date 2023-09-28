import React from 'react'

import { OfertaCard } from '../OfertaSection/OfertaCard'
import { ad_verano } from '../../../data'
import servicesDiscount from './services.module.css'

export const ServicesDiscount = () => {
  return (
    <section className='row'>
      <h1 className='text-center text-2xl font-extrabold py-5'> Paquetes especiales para nuestros viajeros </h1>
      <div className={ servicesDiscount.container }>
        {
          ad_verano.map( card => (
            <OfertaCard
              key={ card.id }
              {...card}
            />
          ))
        }
      </div>
      <div className={ servicesDiscount.container }>
        {
          ad_verano.map( card => (
            <OfertaCard
              key={ card.id }
              {...card}
            />
          ))
        }
      </div>
    </section>
  )
}
