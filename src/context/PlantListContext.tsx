import React, { useEffect, useReducer } from 'react'
import { createContext, Reducer } from 'react'
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

enum ActionTypes {
  fetchStart = 'fetchStart',
  fetchSuccess = 'fetchSuccess',
  fetchFail = 'fetchFail',
}

type Action = {
  type: ActionTypes
  payload?: Plant[]
}

type PlantsState = {
  entities: Plant[]
  isLoading: boolean
}

export const PlantListContext = createContext<PlantListContextType>(
  {} as PlantListContextType,
)

const initialState: PlantsState = {
  entities: [] as Plant[],
  isLoading: false,
}

const plantsReducer = (state: PlantsState, action: Action): PlantsState => {
  switch (action.type) {
    case ActionTypes.fetchStart: {
      return { ...state, isLoading: true }
    }
    case ActionTypes.fetchFail: {
      return { ...state, isLoading: false }
    }
    case ActionTypes.fetchSuccess: {
      const { payload } = action
      const newState = { entities: payload as Plant[], isLoading: false }
      return newState
    }
    default:
      return state
  }
}

export const PlantListProvider: React.FC = ({ children }) => {
  const [plants, dispatch] = useReducer<Reducer<PlantsState, Action>>(
    plantsReducer,
    initialState,
  )

  const getPlants = async () => {
    dispatch({ type: ActionTypes.fetchStart })

    try {
      const response = await fetchPlants()
      if (response.data) {
        const action = {
          type: ActionTypes.fetchSuccess,
          payload: response.data,
        }
        dispatch(action)
      }
      console.log(response)
    } catch (error) {
      dispatch({ type: ActionTypes.fetchFail })
      console.error(error)
    }
  }

  useEffect(() => {
    getPlants()
  }, [])

  if (!plants) return null

  const contextValue = {
    isPlantLoading: plants.isLoading,
    plants: plants.entities,
  }

  return (
    <PlantListContext.Provider value={contextValue}>
      {children}
    </PlantListContext.Provider>
  )
}
