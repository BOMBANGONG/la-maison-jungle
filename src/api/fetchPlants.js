import axios from "axios";

export const fetchPlants = async () => {
  const baseURL = "http://localhost:8080/plantlist";
  try {
    const { data } = await axios.get(baseURL);
    return data;
  } catch (error) {
    return error;
  }
};
