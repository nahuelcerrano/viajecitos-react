import React from 'react'

export const HeroBanner = ({
  id,
  page,
  title,
  subtitle,
}) => {

  const heroImageUrl = `/assets/backgrounds/${ id }.jpg`
  
  return (
    <div>
      <div>
        <img src={ heroImageUrl } alt={ page } />
      </div>
      <div>
        <h1>{ title }</h1>
        <h2>{ subtitle }</h2>
      </div>
    </div>
  )
}