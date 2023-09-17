import React, { useState } from 'react'
import { Input, Card, CardHeader, CardBody, CardFooter, Divider, Button } from '@nextui-org/react';
import { EyeFilledIcon, EyeSlashFilledIcon } from "./svg";



export const ContactForm = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <section className='flex place-content-center justify-center py-16 bg-form'>
        <Card
          isBlurred
          className='bg-background/60'
        >
          <CardHeader className="flex gap-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="flex flex-col px-4 py-10">
              <p className="text-3xl text-white font-bold py-5">Contactanos</p>
              <p className="text-small text-white italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </CardHeader>
          <Divider/>
          <CardBody>
            <div className="w-full flex flex-col py-10 px-16 gap-10">
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-5">
                <Input classNames={{
                  inputWrapper: [
                    'border-stone-500',
                    'dark:hover:bg-default/70',
                  ]
                }} type='text' variant='bordered' radius='sm' label='Name'/>
                <Input classNames={{
                  inputWrapper: [
                    'border-stone-500',
                    'dark:hover:bg-default/70',
                  ]
                }} type='text' variant='bordered' radius='sm' label='Last Name'/>  
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-5">
                <Input
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }}
                  label="Password"
                  variant="bordered"
                  radius='sm'
                  placeholder="Enter your password"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                />
                <Input
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }}
                  label="Password"
                  variant="bordered"
                  radius='sm'
                  placeholder="Enter your password"
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  className="max-w-xs"
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-5">
                <Input 
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }} type='email' variant='bordered' radius='sm' label='Email'/>
                <Input 
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }} type='text' variant='bordered' radius='sm' label='Number'/>        
              </div>
            </div>
          </CardBody>
          <Divider/>
          <CardFooter className='flex justify-center py-5 '>
            <Button 
              variant="shadow"
              radius='md'
              className='bg-gradient-to-tr from-green-400 to-green-600 text-white shadow-lg px-16'
            >
              Send
            </Button>  
          </CardFooter>
        </Card>
      </section>
  )
}