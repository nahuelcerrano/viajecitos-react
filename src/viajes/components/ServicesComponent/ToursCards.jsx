import React from 'react'
import { Button, Card, CardBody, Image } from '@nextui-org/react'
import image from '/ads/verano_2.jpg'

export const ToursCards = ({
  id,
  country,
  name,
  alt,
  price,
  discount,
  bank,
}) => {

  const tourUrl = `/countries/${ id }.jpg`

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 mb-10"
      shadow="sm"
      radius='sm'
    >
      <CardBody>
        <div className="grid grid-cols-3 grid-rows-3 gap-0 items-center justify-center">
          <div className="relative row-span-3 pr-5">
            <Image
              alt={ alt }
              className="object-cover"
              shadow="md"
              src={ tourUrl }
              width="100%"
            />
          </div>

          <div className="col-span-2">
            <p className="text-lg font-extrabold">Tour de { name } - Tour Privado</p>
            <p className='text-small'>Duración: 4 horas / Incluye guías</p>
          </div>
          
          <div className="col-span-2">
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
          </div>

          <div className='col-span-2'>
            <p className='py-2'>Desde { price }$ - { discount }% OFF con { bank } </p>
            <Button 
              size='sm' 
              color='success'
              radius='sm'
              className='mr-5'
            >
              Comprar
            </Button>
          </div>

        </div>
      </CardBody>
    </Card>
  )
}