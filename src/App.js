import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./components/Description";
import "./App.css";

function App() {
  const [basket, setBasket] = useState([]);

  return (
    <div className="App">
      <Router>
        <Banner />
        <div className="lmj-layout-inner">
          <Switch>
            <Route path="/list/:id">
              <Cart cart={basket} setCart={setBasket} />
              <Description cart={basket} setCart={setBasket} />
            </Route>
            <Route path="/list">
              <Cart cart={basket} setCart={setBasket} />
              <ShoppingList cart={basket} setCart={setBasket} />
            </Route>
            <Route path="/"></Route>
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
