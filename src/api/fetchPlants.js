import axios from 'axios'

export const fetchPlants = async () => {
  const baseURL = 'http://localhost:8080/plantlist'
  return axios.get(baseURL)
}
