import React from 'react'
import { RecorridoCard } from './RecorridoCard'
import { country } from '../../data'
import sectionStyles from './recorrido.module.css'


export const RecorridoSection = () => {
  return (
    <section className={sectionStyles.sectionContainer}>
      <div className={`${sectionStyles.container} row flex`}>
        <div className={sectionStyles.title}>
          <h2 className={sectionStyles.h2}>Recorridos Únicos</h2>
          <p>
            Destinos especiales y exoticos, con nuestro catalago de mas de 50 destinos, 
            ofrecemos desde los lugares mas elegidos 
            hasta los lugares que solo los mas aventureros se animan a ir, ¿Cuál elegirás?
          </p>
        </div>
        {
        country.map(countries => (
          <RecorridoCard 
            key={ countries.id }
            {...countries}
          />
        ))
      }
      </div>
    </section>
  )
}