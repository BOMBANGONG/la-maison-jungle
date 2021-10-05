import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import Card from "./Card";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, setCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);

    if (currentPlantAdded) {
      const cartFilteredCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      setCart([
        ...cartFilteredCurrentPlant,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      setCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />
      <ul className="lmj-plant-list">
        {plantList.map(({ id, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <Card
                id={id}
                name={name}
                water={water}
                light={light}
                price={price}
                cart={cart}
                addToCart={addToCart}
              />
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppingList;
