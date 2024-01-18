import React from 'react'

import { ViajesSection, HotelSection, AdSection } from '../components'
import { PageHeader } from '../components/HeroBanner/PageHeader'
import homeStyles from './home.module.css'
import { ViajesAdSection } from '../components/ViajesSection/ViajesAdSection'
import { Button } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const TripPage = () => {
  return (
    <>
      <PageHeader page='viajes' />

      <main className={homeStyles.main}>
        <ViajesSection numCardsToShow={8}/>
        <div className='flex justify-center pt-5 pb-10'>
          <Link to='/viajes/destinos'>
            <Button 
              color="primary" 
              variant="shadow"
              radius='medium'
              size='lg'
              className="bg-gradient-to-tr from-[#25aae1] to-[#30dd8a] text-white shadow-lg"
            >
              Ver más
            </Button>
          </Link>
        </div>
        <ViajesAdSection />
        <HotelSection numCardstoShow={8}/>
        <div className='flex justify-center pt-5 pb-10'>
          <Link to='/viajes/hoteles'>
            <Button 
              color="primary" 
              variant="shadow"
              radius='medium'
              size='lg'
              className="bg-gradient-to-tr from-[#25aae1] to-[#30dd8a] text-white shadow-lg"
            >
              Ver más
            </Button>
          </Link>
        </div>
      </main>

    </>
  )
}