import React from 'react'
import { CartContext } from '../../../context/Cart'

export const CartItem = ({
  id,
  url,
  name,
  description,
  price,
}) => {

  const destinoImageUrl = `/${ url }/${ id }.jpg`

  return (
    <li className='cartItem'>
      <img src={destinoImageUrl} />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
      </div>
    </li>
  )
}
