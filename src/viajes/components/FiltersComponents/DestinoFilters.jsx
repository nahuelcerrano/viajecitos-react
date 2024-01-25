import React, { useId } from 'react'

import filterStyles from './filter.module.css'
import { useFilters } from '../../hooks/useFilters'

export const DestinoFilters = () => {

  const { filters, setFilters } = useFilters()
  
  const minPriceFilterId = useId()
  const continentFilterId = useId()

  const handleChangeMinPrice = () => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeContinent = () => {
    setFilters(prevState => ({
      ...prevState,
      continent: event.target.value
    }))
  }

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
            value={filters.minPrice}
          />
          <span>${filters.minPrice}</span>
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