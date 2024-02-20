import React from "react";


import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

import viajesCard from './viajes.module.css'
import { useCart } from "../../../context/Cart";

export const ViajesCard = ({
  id,
  url,
  name,
  description,
  price,
}) => {

  const { dispatch } = useCart()

  const addToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id, name, price }
    })
  }

  const destinoImageUrl = `/${ url }/${ id }.jpg`
  const capsName = name.toUpperCase()

  return (
    <div className={viajesCard.cardGrid}>
      <div className={viajesCard.cardImage}>
        <img src={ destinoImageUrl } alt={ name } />
      </div>
      <div className={viajesCard.cardText}>
        <h3>{ capsName }</h3>
        <p className={viajesCard.cardDescription}> { description }</p>
        <h3>$ { price }</h3>
        <div className={viajesCard.cardStars}>
          <span> <AiFillStar /></span>
          <span> <AiFillStar /></span>
          <span> <AiFillStar /></span>
          <span> <AiFillStar /></span>
          <span> <AiOutlineStar /></span>
        </div>
      </div>
      <div className={viajesCard.cardButton}>
        <button 
          onClick={addToCart}
          className={viajesCard.cardButtonHover}
        >
          Comprar
        </button>
      </div>
    </div>
  );
};
