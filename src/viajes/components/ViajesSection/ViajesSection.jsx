import React from 'react'
import { country } from '../../../data'
import { ViajesCard } from './ViajesCard'
import viajes from './viajes.module.css'

export const ViajesSection = () => {

  const newCountry = country.slice(0, 8)

  return (
    <section className={viajes.sectionViajes}>
      <div className={viajes.titleSection}>
        <h2>
          Nuestros viajes para usted
        </h2>
        <p>
          Destinos especiales y exoticos, con nuestro catalago de mas de 50 destinos
        </p>
      </div>
      <div className={viajes.cardsContainer}>
        {
          newCountry.map(countries => (
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