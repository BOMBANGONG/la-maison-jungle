import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import { fetchPlants } from '../api/fetchPlants'

export const PlantListContext = createContext()

export const PlantListProvider = ({ children }) => {
  const [plants, setPlants] = useState([])
  const [isPlantLoading, setIsPlantLoading] = useState(false)

  const getPlants = async () => {
    setIsPlantLoading(true)
    try {
      const response = await fetchPlants()
      if (response?.length) {
        setPlants(response)
      }
      // setPlants(response)
      setIsPlantLoading(false)
      console.log(response)
    } catch (error) {
      setIsPlantLoading(false)
      console.error(error)
    }
  }

  useEffect(() => {
    getPlants()
  }, [])

  if (!plants) return null

  return (
    <PlantListContext.Provider value={{ isPlantLoading, plants }}>
      {children}
    </PlantListContext.Provider>
  )
}
