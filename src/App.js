import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Description from "./components/Description";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="App">
        <Router>
          <Banner />
          <div>
            <div className="lmj-layout-inner">
              <Switch>
                <Route path="/list/:id">
                  <Description />
                </Route>
                <Route path="/list">
                  <Cart cart={cart} setCart={setCart} />
                  <ShoppingList cart={cart} setCart={setCart} />
                </Route>
                <Route path="/"></Route>
              </Switch>
            </div>
          </div>
        </Router>
        <Footer />
      </div>
    </div>
  );
}

export default App;
