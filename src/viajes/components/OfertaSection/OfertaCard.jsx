import React from 'react'
import ofertaStyle from './oferta.module.css'

export const OfertaCard = ({
  id,
  title,
  description,
}) => {

  const ofertaImgUrl = `/ads/${ id }.jpg`

  return (
    <div className={ofertaStyle.card}>
      <div style={{
        backgroundImage: `url(${ofertaImgUrl})`,
        height: '50%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}>
        <span className={ofertaStyle.oferta}>25% OFF</span>
      </div>
      <div className={ofertaStyle.innterText}>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  )
}