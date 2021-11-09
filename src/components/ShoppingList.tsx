import "../styles/ShoppingList.css";
import Card from "./Card";
import Categories from "./Categories";
import Progress from "./Progress";
import { useState, useContext } from "react";
import { array } from "prop-types";
import { PlantListContext } from "../context/PlantListContext";
import React from "react";

const ShoppingList = () => {
  const { plants } = useContext(PlantListContext);
  console.log(plants);

  const [activeCategory, setActiveCategory] = useState("");

  const categories = plants?.reduce(
    (acc: string | any[], plant: { category: any; }) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  if (!plants?.length) {
    return (
      <div style={{ marginLeft: "auto", marginRight: "auto", width: "6rem" }}>
        <Progress />
      </div>
    );
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="lmj-plant-container">
        {plants?.map((props: { id: string; name: string; cover: string; water: number; light: number; price: number; category: any }) =>
          !activeCategory || activeCategory === props.category ? (
            <Card
              className="lmj-plant-card"
              key={props.id}
              id={props.id}
              name={props.name}
              cover={props.cover}
              water={props.water}
              light={props.light}
              price={props.price}
            />
          ) : null
        )}
      </div>
    </div>
  );
}

ShoppingList.propTypes = {
  cart: array,
  setCart: array,
};

export default ShoppingList;
