import React, { useId } from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, ScrollShadow, Image} from "@nextui-org/react";
import { BsFillCartFill, BsFillCartDashFill } from 'react-icons/bs'
import { useCart } from '../../../hooks/useCart';
import { country } from '../../../data';



const CartItem = ({ 
  id,
  price, 
  name,
  addToCart
}) => {

  const url = `/countries/${id}.jpg`
  return (
    <li className="grid grid-cols-5 grid-rows-2 gap-3 max-w-lg items-center cursor-default">
      <div className='col-span-2 row-span-2'>
        <Image
          width={200}
          alt="NextUI hero Image"
          src={ url }
        />
      </div>
      <div className='col-span-3 flex justify-around'>
        <strong>{ name }</strong>
        <strong> ${ price } </strong>
      </div>
      <footer className='col-span-3 flex flex-col justify-center'>
        <strong>
          Viajes seleccionados: 10
        </strong>
        <Button 
          onPress={ addToCart }
          className='ml-8 bg-[#138823] shadow-md shadow-emerald-500/20'
        >
          Comprar
        </Button>
      </footer>
    </li>
  )
}

export const Cart = ({}) => {
  
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const cartCheckboxId = useId()
  const { cart, clearCart } = useCart()

  return (
    <>
      <Button className='bg-transparent text-slate-50 text-2xl ml-1' onPress={onOpen}>
        <BsFillCartFill />
      </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        scrollBehavior='inside'
        size="5xl"
        placement='top-center'
        backdrop='opaque'
        classNames={{
          body: "py-6",
          backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: "border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]",
          header: "border-b-[1px] border-[#292f46]",
          footer: "border-t-[1px] border-[#292f46]",
          closeButton: "hover:bg-white/5 active:bg-white/10",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-1">MI CARRITO</ModalHeader>
              <ModalBody>
                <ScrollShadow hideScrollBar className="flex justify-center">
                  <div className='flex flex-col'>
                    {
                      cart.map(product => (
                        <CartItem 
                          key={ product.id }
                          { ...product }
                        />
                      ))
                    }
                  </div>
                </ScrollShadow>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={clearCart}>
                  Limpiar carrito
                </Button>
                <Button className="bg-[#138823] shadow-lg shadow-emerald-500/20" onPress={onClose}>
                  Terminar compra
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}