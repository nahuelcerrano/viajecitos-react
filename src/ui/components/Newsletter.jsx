import React from 'react'
import newsletter from './footer.module.css'
import { Button } from '@nextui-org/react'
import { Input } from '@nextui-org/react'

export const Newsletter = () => {
  return (
    <section className={newsletter.newsletter}>
      <div className={`${newsletter.newsflex} row`}>
          <h2>Newsletter Section</h2>
          <div className='flex justify-center'>
            <Input
              radius='none'
              variant='flat'
              type="email"
              label="Email"
              placeholder="Enter your email"
              className=''
            />
            <Button radius="none" color='success' className='h-full'>
              Enviar
            </Button> 
          </div>
      </div>
    </section>
  )
}