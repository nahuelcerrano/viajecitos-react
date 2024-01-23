import React, { useState } from 'react'
import { destinos } from '../../../data'
import { ViajesCard } from './ViajesCard'
import viajes from './viajes.module.css'
import { DestinoFilters } from '../FiltersComponents/DestinoFilters'

export const ViajesSection = ({ numCardsToShow }) => {

  const [filters, setFilters] = useState({
    continent: 'all',
    minPrice: 0
  })

  const filterDestination = (destinos) => {
    return destinos.filter(destino => {
      
      return (
        destino.price >= filters.minPrice &&
        (
          filters.continent === 'all' ||
          destino.continent === filters.continent
        )
      )
    })
  }

  const filteredDestinations = filterDestination(destinos)

  const defaultDisplayedDestinations = filteredDestinations.slice(0, numCardsToShow)

  return (
    <section className={viajes.sectionViajes}>
      <div className={viajes.titleSection}>
        <h2 className='text-center text-2xl font-bold py-5'>
          Nuestros viajes para usted
        </h2>
        <p>
          Destinos especiales y exoticos, con nuestro catalago de mas de 50 destinos
        </p>
      </div>
      <DestinoFilters changeFilters={setFilters}/>
      <div className={viajes.cardsContainer}>
        {
          defaultDisplayedDestinations.map(destino => (
            <ViajesCard 
              key = { destino.id }
              { ... destino }
            />
          ))
        }
      </div>
    </section>
  )
}