import React from "react";
import ShoppingList from "./ShoppingList";
import Description from "./Description";
import Cart from "./Cart";
import { Route, useRouteMatch, Switch } from "react-router-dom";
import { CartProvider } from "../context/CartContext";
import { PlantListProvider } from "../context/PlantListContext";

const Shop = () => {
  const { path } = useRouteMatch();
  return (
    <CartProvider>
      <Cart />
      <Switch>
        <Route path={`${path}/:id`}>
          <Description />
        </Route>
        <PlantListProvider>
          <Route path={`${path}`}>
            <ShoppingList />
          </Route>
        </PlantListProvider>
      </Switch>
    </CartProvider>
  );
};

export default Shop;
