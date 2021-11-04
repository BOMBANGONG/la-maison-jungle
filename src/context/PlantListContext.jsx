import React from "react";
import { useState, useEffect, createContext } from "react";
import { fetchPlants } from "../api/fetchPlants";

export const PlantListContext = createContext();

export const PlantListProvider = ({ children }) => {
  const [plants, setPlants] = useState([]);

  console.log("from context => ", plants);

  const getPlants = async () => {
    const response = await fetchPlants();
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
