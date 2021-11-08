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
      <PlantListProvider>
        <Switch>
          <Route path={`${path}/:id`}>
            <Description />
          </Route>
          <Route path={`${path}`}>
            <ShoppingList />
          </Route>
        </Switch>
      </PlantListProvider>
    </CartProvider>
  );
};

export default Shop;
