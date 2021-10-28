import React, { useState, useEffect, createContext } from "react";

export const CartContext = createContext();

const getInitCart = () => {
  try {
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getInitCart);

  function updateCart(name, price) {
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

  function emptyCart() {
    setCart([]);
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, updateCart, emptyCart }}>
      {children}
    </CartContext.Provider>
  );
};
