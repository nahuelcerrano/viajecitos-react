import React from 'react'
import BankCard from './BankCard'
import { banks } from '../../../data'
import bankStyles from './services.module.css'

export const ServicesBanks = () => {
  return (
    <section>
      <h1 className='text-center text-2xl font-extrabold py-5'>Ofrecemos estos beneficios de los siguientes bancos</h1>
      <div className='row'>
        <div className={ bankStyles.card }>
          {
          banks.map( card => (
            <BankCard
              key={ card.id }
              {...card}
            />
          ))
        }
        </div>
      </div>
    </section>
  )
}