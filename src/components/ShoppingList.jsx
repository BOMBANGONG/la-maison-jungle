import "../styles/ShoppingList.css";
import Card from "./Card";
import Categories from "./Categories";
import { useState, useContext } from "react";
import { array } from "prop-types";
import { PlantListContext } from "../context/PlantListContext";

function ShoppingList() {
  const { plants } = useContext(PlantListContext);
  console.log(plants);

  const [activeCategory, setActiveCategory] = useState("");

  const categories = plants?.reduce(
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
        {plants?.map(({ id, name, cover, water, light, price, category }) =>
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
