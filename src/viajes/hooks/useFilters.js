import { useContext } from "react"
import { FiltersContext } from "../../context/Filters"

export const useFilters = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterDestination = (destinos) => {
    return destinos.filter(destino => {
      
      return (
        destino.price >= filters.minPrice &&
        (
          filters.continent === 'all' ||
          destino.continent === filters.continent
        )
      )
    })
  }

  return { filters, filterDestination, setFilters }
}