import React, { useEffect } from "react";
import { useState, createContext } from "react";
import { fetchPlants } from "../api/fetchPlants";

export const PlantListContext = createContext();

export const PlantListProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);

  const getPlants = async () => {
    const response = await fetchPlants().catch(console.error);
    setPlants(response);
  };

  useEffect(() => {
    getPlants();
  }, []);

  if (!plants) return null;

  return (
    <PlantListContext.Provider value={{ plants }}>
      {children}
    </PlantListContext.Provider>
  );
};
