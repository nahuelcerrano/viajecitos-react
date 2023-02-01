import { viajes } from '../data/viajes';

export const getPageByName = ( page ) => {

  const validTrip = ['home', 'about', 'viajes']

  if ( !validTrip.includes(page) ) {
    throw new Error(`${ page } is not a valid page!`)
  }

  return viajes.filter( viaje => viaje.page === page )
}