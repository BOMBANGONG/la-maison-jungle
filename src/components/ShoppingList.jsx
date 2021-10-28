import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import Card from "./Card";
import Categories from "./Categories";
import { useState } from "react";
import { array } from "prop-types";

function ShoppingList() {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <div className="lmj-plant-container">
        {plantList.map(({ id, name, cover, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <Card
              className="lmj-plant-card"
              key={id}
              id={id}
              name={name}
              cover={cover}
              water={water}
              light={light}
              price={price}
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
