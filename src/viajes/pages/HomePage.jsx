import React from 'react'
import { PageHeader } from '../components/PageHeader'
import homeStyles from './home.module.css'

export const HomePage = () => {
  return (
    <>
      <PageHeader page='home' />
      
      <main className={homeStyles.main}>
        <section className={`${homeStyles.sectionContainer}`}>
          <div className={`${homeStyles.container} row flex`}>
            <div className={homeStyles.title}>
              <h2 className={homeStyles.h2}>Recorridos Únicos</h2>
              <p>
                Destinos especiales y exoticos, con nuestro catalago de mas de 50 destinos, 
                ofrecemos desde los lugares mas elegidos 
                hasta los lugares que solo los mas aventureros se animan a ir, ¿Cuál elegirás?
              </p>
            </div>
            {/* <CardRecorrido /> */}
          </div>
        </section>
      </main>


    </>
  )
}