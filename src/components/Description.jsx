// import Card from "./Card";
import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { plantList } from "../datas/plantList";
import Button from "./Button";
import "../styles/Description.css";

const Description = ({ setCart }) => {
  const history = useHistory();
  const { id } = useParams();
  const plantData = plantList.find((e) => e.id === id);
  if (!plantData) {
    history.push("/shop");
    return null;
  }

  const cover = plantData.cover;
  const name = plantData.name;
  const price = plantData.price;
  const description = plantData.description;

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
      {/* <Card
        key={id}
        id={plantData.id}
        name={plantData.name}
        cover={plantData.cover}
        water={plantData.water}
        light={plantData.light}
        addToCart={addToCart}
        price={plantData.price}
        description={plantData.description}
      /> */}
      <div className="container">
        <div className="img-src">
          <img src={cover} alt={`${name} cover`} />
        </div>

        <div className="text-src">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}€</p>
          <Button primary label={"Add"} onClick={() => addToCart()} />
        </div>
      </div>

      <Button label={"Back"} onClick={() => history.push("/shop")} />
    </div>
  );
};

export default Description;
