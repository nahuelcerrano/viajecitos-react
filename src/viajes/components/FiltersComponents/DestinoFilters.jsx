import React, { useId, useState } from 'react'

import filterStyles from './filter.module.css'

export const DestinoFilters = ({ changeFilters }) => {

  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const continentFilterId = useId()

  const handleChangeMinPrice = () => {
    setMinPrice(event.target.value)
    changeFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeContinent = () => {
    changeFilters(prevState => ({
      ...prevState,
      continent: event.target.value
    }))
  }

  console.log(minPrice)

  return (
    <>
      <section className={filterStyles.filters}> 
        <div>
          <label htmlFor={minPriceFilterId}>Precio</label>
          <input 
            type="range"
            id={minPriceFilterId}
            min='0'
            max='1000'
            step='50'
            onChange={handleChangeMinPrice}
          />
          <span>${minPrice}</span>
        </div>

        <div>
          <label htmlFor={continentFilterId}>
            <span>Contienente </span>
            <select id={continentFilterId} onChange={handleChangeContinent}>
              <option value="all">Todos</option>
              <option value="europa">Europa</option>
              <option value="asia">Asía</option>
              <option value="africa">Africa</option>
              <option value="america del sur">América del Sur</option>
              <option value="america del norte">América del Norte</option>
            </select>
          </label>
        </div>

      </section>
    </>
  )
}