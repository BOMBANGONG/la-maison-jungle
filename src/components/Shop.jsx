import React from "react";
import ShoppingList from "./ShoppingList";
import Description from "./Description";
import Cart from "./Cart";
import { useState, useEffect } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

const Shop = () => {
  // save cart items after refreshing page
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const { path } = useRouteMatch();
  return (
    <div>
      <Cart cart={cart} setCart={updateCart} />
      <Switch>
        <Route path={`${path}/:id`}>
          <Description setCart={cart} />
        </Route>
        <Route path={`${path}`}>
          <ShoppingList cart={cart} setCart={updateCart} />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
