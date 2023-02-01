import React from 'react'
import newsletter from './footer.module.css'

export const Newsletter = () => {
  return (
    <section className={newsletter.newsletter}>
      <div className={newsletter.newsflex}>
          <h2>Newsletter Section</h2>
          <div>
            <input 
              type="text" 
              placeholder='Ingresá tu correo'
              className={newsletter.input} />
            <button className={newsletter.button}>
              Enviar
            </button>
          </div>
      </div>
    </section>
  )
}