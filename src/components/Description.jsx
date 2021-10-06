import Card from "./Card";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { plantList } from "../datas/plantList";
import Button from "./Button";

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
    <div className="description">
      <Card
        key={id}
        id={plantData.id}
        name={plantData.name}
        cover={plantData.cover}
        water={plantData.water}
        light={plantData.light}
        addToCart={handleAddToCart}
        price={plantData.price}
        description={plantData.description}
      />
      <Button label={"Back"} onClick={() => history.push("/list")} />
    </div>
  );
};

export default Description;
