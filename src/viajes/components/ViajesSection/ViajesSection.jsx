import React from 'react'
import { ViajesCard } from './ViajesCard'
import viajes from './viajes.module.css'

export const ViajesSection = () => {
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
      <ViajesCard />
    </section>
  )
}