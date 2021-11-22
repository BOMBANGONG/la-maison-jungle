import React, { useEffect } from 'react'
import { useState, createContext } from 'react'
import { fetchPlants } from '../api/fetchPlants'

type Plant = {
  name: string
  category: string
  id: string
  light: number
  water: number
  cover: string
  price: number
  description: string
}

type PlantListContextType = {
  plants: Plant[]
  isPlantLoading: boolean
}

export const PlantListContext = createContext<PlantListContextType>(
  {} as PlantListContextType,
)

export const PlantListProvider: React.FC = ({ children }) => {
  const [plants, setPlants] = useState([])
  const [isPlantLoading, setIsPlantLoading] = useState(false)

  const getPlants = async () => {
    setIsPlantLoading(true)
    try {
      const response = await fetchPlants()
      if (response?.length) {
        setPlants(response)
      }
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
