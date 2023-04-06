import React from 'react'
import { adVerano } from '../../../data'
import ofertaStyle from './oferta.module.css'
import { OfertaCard } from './OfertaCard'

const sectionContainer = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.03)),url(../assets/ads/paquete_especial.jpg)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '30px 0'
}

export const OfertaSection = () => {
  
  console.log(adVerano)
  
  return (
    <section style={sectionContainer}>
      <div className={`${ofertaStyle.container} row flex`}>
        <div className={ofertaStyle.title}>
          <h2>Paquetes Especiales - Temporada Verano</h2>
        </div>
        {
          adVerano.map( card => (
            <OfertaCard
              key={ card.id }
              {...card}
            />
          ))
        }
      </div>
    </section>
  )
}