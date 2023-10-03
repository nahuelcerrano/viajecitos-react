import React from 'react'
import { nosotros } from '../../../data'
import { NosotrosCard } from './NosotrosCard'
import nosotrosStyle from './nosotros.module.css'

export const NosotrosSection = () => {
  return (
    <section className={nosotrosStyle.sectionNosotros}>
      <div className={`${nosotrosStyle.container} row flex`}>
        <div className={nosotrosStyle.title}>
          <h2 className='text-center text-2xl font-bold py-5'>Viaja con Nosotros</h2>
          <p>
            Con más de 20 años de experiencia en viajes, podrá confiarnos en nosotros su seguridad 
            en los mas de 50 destinos únicos que ofrecemos con tours personalizados y guias capacitados.
          </p>
        </div>
        {
          nosotros.map(about => (
            <NosotrosCard
              key={ about.id }
              {...about}
            />
          ))
        }
      </div>
    </section>
  )
}