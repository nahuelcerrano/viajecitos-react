import React from 'react'
import { useFilters } from '../../hooks/useFilters'
import { destinos } from '../../../data'
import { DestinoFilters } from '../FiltersComponents/DestinoFilters'
import { ViajesCard } from './ViajesCard'
import viajes from './viajes.module.css'

export const ViajesSection = ({ numCardsToShow }) => {

  const { filterDestination } = useFilters()

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
      <DestinoFilters />
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