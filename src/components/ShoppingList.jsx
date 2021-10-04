import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import Card from "./Card";

function ShoppingList({ cart, setCart }) {
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
    <>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, name, water, light, price }) => (
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
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;
