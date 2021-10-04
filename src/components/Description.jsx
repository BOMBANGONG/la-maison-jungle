import Card from "./Card";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { plantList } from "../datas/plantList";

const Description = ({ handleAddToCart }) => {
  const history = useHistory();
  const { id } = useParams();
  const plantData = plantList.find((e) => e.id === id);
  if (!plantData) {
    history.push("/list");
    return null;
  }

  console.log(plantData);
  return (
    <Card
      key={id}
      id={plantData.id}
      name={plantData.name}
      water={plantData.water}
      light={plantData.light}
      addToCart={handleAddToCart}
      price={plantData.price}
      description={plantData.description}
    />
  );
};

export default Description;
