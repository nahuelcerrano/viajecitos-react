import React, { useContext } from 'react'
import { CartContext } from '../../../context/Cart'
import { destinos } from '../../../data';
import { CartItem } from './CartItem';
import "./cart.css";

export const Cart = () => {
  
  const storedDestinos = JSON.parse(localStorage.getItem('destinos'));
  const { cartItems } = useContext(CartContext)

  return (
    <section className='cart'>
      <h2>Carrito de Compras</h2>
      <ul className='cart'>
        {
          destinos.map(destino => {
            if (storedDestinos[destino.id] !== 0) {
              return (
                <CartItem
                  key={destino.id}
                  {...destino}
                />
              );
            }
          })
        }
      </ul>
    </section>
  )
}