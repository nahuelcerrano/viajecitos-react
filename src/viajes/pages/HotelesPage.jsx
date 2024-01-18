import React from 'react'
import { HotelSection, PageHeader } from '../components'

export const HotelesPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main>
        <HotelSection numCardstoShow={24} />
      </main>
    </>
  )
}
