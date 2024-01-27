import React from 'react'
import { HotelSection, PageHeader } from '../components'
import { DestinoFilters } from '../components/FiltersComponents/DestinoFilters'

export const HotelesPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main>
        <DestinoFilters />
        <HotelSection numCardstoShow={24} />
      </main>
    </>
  )
}
