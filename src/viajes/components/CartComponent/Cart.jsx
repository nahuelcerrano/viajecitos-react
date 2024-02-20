import React from 'react'
import { useCart } from '../../../context/Cart'

export const Cart = () => {

  const { cart } = useCart()

  return (
    <section>
      <h2>Carrito de Compras</h2>
      <ul>
        {
          cart.map((destino) => (
            <li key={destino.id}>
              {destino.name} - ${destino.price}
            </li>
          ))
        }
      </ul>
    </section>
  )
}