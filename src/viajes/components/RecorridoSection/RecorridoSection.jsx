import React from 'react'
import { RecorridoCard } from './RecorridoCard'
import { destinos } from '../../../data'
import sectionStyles from './recorrido.module.css'


export const RecorridoSection = () => {

  const newCountry = destinos.slice(0, 4)

  return (
    <section className={sectionStyles.sectionContainer}>
      <div className={`${sectionStyles.container} row flex`}>
        <div className={sectionStyles.title}>
          <h2 className='text-center text-2xl font-bold py-5'>Recorridos Únicos</h2>
          <p>
            Destinos especiales y exoticos, con nuestro catalago de mas de 50 destinos, 
            ofrecemos desde los lugares mas elegidos 
            hasta los lugares que solo los mas aventureros se animan a ir, ¿Cuál elegirás?
          </p>
        </div>
        {
        newCountry.map(countries => (
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