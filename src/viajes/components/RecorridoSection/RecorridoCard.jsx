import React from 'react'
import sectionStyles from './recorrido.module.css'

export const RecorridoCard = ({
  id,
  country,
  city,
  price,
}) => {
  
  const recorridoImageUrl = `src/assets/countries/${ id }.jpg`

  return (
    <div className='card'>
      <div style={{
        backgroundImage: `url(${recorridoImageUrl})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
      }}></div>
      <div className={sectionStyles.text}>
        <p>{`${country} | ${city}`}</p>
        <p>${ price }</p>
      </div>
      <div></div>
    </div>
  )
}