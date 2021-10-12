import Card from "./Card";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { plantList } from "../datas/plantList";
import Button from "./Button";

const Description = ({ setCart }) => {
  const history = useHistory();
  const { id } = useParams();
  const plantData = plantList.find((e) => e.id === id);
  if (!plantData) {
    history.push("/shop");
    return null;
  }

  function addToCart(name, price) {
    setCart((cart) => {
      const currentPlantAdded = cart.find(
        (plant) => plant.name === plantData.name
      );
      if (currentPlantAdded) {
        const cartFilteredCurrentPlant = cart.filter(
          (plant) => plant.name !== plantData.name
        );
        return [
          ...cartFilteredCurrentPlant,
          { name, price, amount: currentPlantAdded.amount + 1 },
        ];
      } else {
        return [...cart, { name, price, amount: 1 }];
      }
    });
  }

  return (
    <div>
      <Card
        key={id}
        id={plantData.id}
        name={plantData.name}
        cover={plantData.cover}
        water={plantData.water}
        light={plantData.light}
        addToCart={addToCart}
        price={plantData.price}
        description={plantData.description}
      />
      <Button label={"Back"} onClick={() => history.push("/shop")} />
    </div>
  );
};

export default Description;
