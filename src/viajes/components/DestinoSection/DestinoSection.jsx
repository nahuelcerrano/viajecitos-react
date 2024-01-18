import React from 'react'
import { destinos } from '../../../data';
import destinoStyles from './destino.module.css'
import { DestinoCard } from './DestinoCard';

export const DestinoSection = () => {

  const newCountry = destinos.slice(4, 11)

  return (
    <section className={destinoStyles.section}>
      <div className={` ${destinoStyles.container} flex row`}>
        <div className={destinoStyles.sectionTitle}>
          <h2 className='text-center text-2xl font-bold py-5'>Elegí tu destino</h2>
          <p>Los 6 destinos mas populares que eligen nuestro viajeros</p>
        </div>
        {
          newCountry.map(countries => (
            <DestinoCard
              key={ countries.id }
              {...countries}
            />
          ))
        }
      </div>
    </section>
  )
}