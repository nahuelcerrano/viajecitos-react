import React from 'react'
import { hoteles } from '../../../data'
import { ViajesCard } from '../ViajesSection/ViajesCard'
import hotel from './hotel.module.css'

export const HotelSection = () => {

  return (
    <section className={hotel.sectionHotel}>
      <div className={hotel.titleSection}>
        <h2 className='text-center text-2xl font-bold py-5'>
          Los mejores hoteles
        </h2>
        <p>
          Los hoteles mas elegidos por nuestros viajeros.
        </p>
      </div>
      <div className={hotel.cardsContainer}>
        {
          hoteles.map(countries => (
            <ViajesCard
              key = { countries.id }
              { ... countries }
            />
          ))
        }
      </div>
    </section>
  )
}