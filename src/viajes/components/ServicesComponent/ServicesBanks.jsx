import React from 'react'
import BankCard from './BankCard'
import { banks } from '../../../data'
import bankStyles from './services.module.css'

export const ServicesBanks = () => {
  return (
    <section className='row'>
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
    </section>
  )
}