import React from "react";
import ShoppingList from "./ShoppingList";
import Description from "./Description";
import Cart from "./Cart";
import { useState } from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";

const Shop = () => {
  const [cart, setCart] = useState([]);
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <div>
      <Cart cart={cart} setCart={setCart} />
      <Switch>
        <Route path={`${path}/:id`}>
          <Description cart={cart} setCart={setCart} />
        </Route>
        <Route path={`${path}`}>
          <ShoppingList cart={cart} setCart={setCart} />
        </Route>
      </Switch>
    </div>
  );
};

export default Shop;
