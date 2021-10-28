import React from "react";
import ShoppingList from "./ShoppingList";
import Description from "./Description";
import Cart from "./Cart";
// import { useState, useEffect } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { CartProvider } from "../context/CartContext";

// const getInitCart = () => {
//   try {
//     const cart = localStorage.getItem("cart");
//     return cart ? JSON.parse(cart) : [];
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

const Shop = () => {
  // save cart items after refreshing page
  // const [cart, updateCart] = useState(getInitCart);
  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  const { path } = useRouteMatch();
  return (
    <CartProvider>
      <Cart />
      <Switch>
        <Route path={`${path}/:id`}>
          <Description />
        </Route>
        <Route path={`${path}`}>
          <ShoppingList />
        </Route>
      </Switch>
    </CartProvider>
  );
};

export default Shop;
