import React from 'react'

import { HotelSection, PageHeader } from '../components'
import { DestinoFilters } from '../components/FiltersComponents/DestinoFilters'

export const HotelesPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main>
        <section className='text-center flex flex-col w-full pb-7 pt-10'>
          <h2 className='text-center text-3xl font-bold py-7 mb-2.5'>
            Los mejores hoteles
          </h2>
          <p className='text-gray-500 w-1/2 mx-auto'>
            Los hoteles mas elegidos por nuestros viajeros.
          </p>
        </section>
        
        <DestinoFilters />
        
        <HotelSection numCardstoShow={24} />
      </main>
    </>
  )
}
