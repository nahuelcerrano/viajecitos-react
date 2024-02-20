import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate } from 'react-router-dom'
import { Input, Card, CardHeader, CardBody, CardFooter, Divider, Button } from '@nextui-org/react';
import { EyeFilledIcon, EyeSlashFilledIcon } from "./svg";



export const ContactForm = () => {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);


  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    watch
  } = useForm()

  const navigate = useNavigate()

  const password = watch('password', '')
  const confirmPassword = watch('confirmPassword', '')

  const onSubmit = (data) => {
    console.log(data)
    navigate('/reedirecion')
  }

  return (
    <section className='flex place-content-center justify-center py-16 bg-form'>
        <Card
          isBlurred
          className='bg-background/60'
        >
          <form onSubmit={handleSubmit(onSubmit)}>
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
                <Input 
                  {...register('name', {
                    required: 'El nombre es requerido',
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
                      message: 'Ingrese un nombre válido'
                    },
                    minLength: {
                      value: 5,
                      message: 'El nombre debe tener al menos 5 caracteres'
                    },
                    maxLength: {
                      value: 20,
                      message: 'El nombre debe tener menos de 20 caracteres'
                    },
                  })}
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                }} type='text' variant='bordered' radius='sm' label='Name'
                description={errors.name && <span className='text-[#DE0B0F]'>{errors.name.message}</span>}/>
                
                <Input 
                  {...register('lastname', {
                    required: 'El apellido es requerido',
                    pattern: {
                      value: /^[a-zA-ZÀ-ÿ\s]{4,40}$/,
                      message: 'Ingrese un apellido válido'
                    },
                    minLength: {
                      value: 5,
                      message: 'El apellido debe tener al menos 5 caracteres'
                    },
                    maxLength: {
                      value: 20,
                      message: 'El apellido debe tener menos de 20 caracteres'
                    },
                  })}
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ],
                    helperWrapper: [
                      'text-[#DE0B0F]',
                      'text-xl'
                    ]
                }} type='text' variant='bordered' radius='sm' label='Last Name'
                description={errors.lastname && <span className='text-[#DE0B0F]'>{errors.lastname.message}</span>}/>  
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-5">
                <Input
                  {...register('password', {
                    required: 'La contraseña es requerida'
                  })}
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
                  description={errors.password && <span className='text-[#DE0B0F]'>{errors.password.message}</span>}
                />
                <Input
                  {...register('confirmPassword', {
                    required: 'Por favor confirme la contraseña',
                    validate: (value) => value === password || 'Las contraseñas no coinciden'
                  })}
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
                  description={errors.confirmPassword && <span className='text-[#DE0B0F]'>{errors.confirmPassword.message}</span>}
                />
              </div>
              <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-5">
                <Input
                  {...register('email', {
                    required: 'El email es requerido',
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail)\.com$/,
                      message: 'Ingrese un email de Gmail, Outlook o Hotmail válido'
                    }
                  })}
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }} type='email' variant='bordered' radius='sm' label='Email'
                  description={errors.email && <span className='text-[#DE0B0F]'>{errors.email.message}</span>}/>
                <Input
                  {...register('number', {
                    required: 'El apellido es requerido',
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Ingrese solo números'
                    },
                    minLength: {
                      value: 5,
                      message: 'El número de telefono debe tener mas de 5 caracteres'
                    },
                    maxLength: {
                      value: 14,
                      message: 'El número de telefono debe tener menos de 14 caracteres'
                    },
                  })}
                  classNames={{
                    inputWrapper: [
                      'border-stone-500',
                      'dark:hover:bg-default/70',
                    ]
                  }} type='text' variant='bordered' radius='sm' label='Number'
                  description={errors.number && <span className='text-[#DE0B0F]'>{errors.number.message}</span>}/>        
              </div>
            </div>
          </CardBody>
          <Divider/>
          <CardFooter className='flex justify-center py-5 '>
            {/* <Button 
              variant="shadow"
              radius='md'
              className='bg-gradient-to-tr from-green-400 to-green-600 text-white shadow-lg px-16'
              disabled={!isDirty}
              type='submit'
            >
              Enviar
            </Button>   */}
            <button type="submit" disabled={!isDirty}>Enviar</button>
          </CardFooter>
          </form>
        </Card>
      </section>
  )
}