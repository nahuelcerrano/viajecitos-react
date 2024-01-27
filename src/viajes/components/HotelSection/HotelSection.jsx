import React from 'react'
import { useFilters } from '../../hooks/useFilters'
import { hoteles } from '../../../data'
import { ViajesCard } from '../ViajesSection/ViajesCard'
import hotel from './hotel.module.css'

export const HotelSection = ({ numCardstoShow }) => {

  const { filterDestination } = useFilters()

  const filteredDestinations = filterDestination(hoteles)

  const defaultDisplayedDestinations = filteredDestinations.slice(0, numCardstoShow)

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
          defaultDisplayedDestinations.map(countries => (
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