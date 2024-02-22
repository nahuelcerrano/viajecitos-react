import { useContext } from "react"
import { FiltersContext } from "../../context/Filters"

export const useFilters = () => {
  const { filters, setFilters, currentPage } = useContext(FiltersContext)

  const filterDestination = (destinos) => {

    if (currentPage === 'DestinosPage' || currentPage === 'HotelesPage') {
      return destinos.filter(destino => {
        
        return (
          destino.price >= filters.minPrice &&
          (
            filters.continent === 'all' ||
            destino.continent === filters.continent
          )
        )
      })
    } else {
      return destinos
    }
  }

  return { filters, filterDestination, setFilters }
}