import React from 'react'
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import image from '/ads/verano_2.jpg'

export const ToursCards = () => {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 mb-10"
      shadow="sm"
      radius='sm'
    >
      <CardBody>
        <div className="grid grid-cols-3 grid-rows-3 gap-5 items-center justify-center">
          <div className="relative row-span-3 pr-5">
            <Image
              alt="Album cover"
              className="object-cover cursor-pointer"
              shadow="md"
              src={ image }
              width="100%"
              isZoomed
            />
          </div>

          <div className="col-span-2">
            <p className="text-lg font-extrabold">Tour de Barcelona - Tour Privado</p>
            <p className='text-small'>Duración: 4 horas / Incluye guías</p>
          </div>
          
          <div className="col-span-2">
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className='col-span-2'>
            <p className='py-2'>Desde 200$ - Con tarjetas Visa y Mastercard </p>
          </div>

        </div>
      </CardBody>
    </Card>
  )
}