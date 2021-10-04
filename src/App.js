import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Card from "./components/Card";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div>
      <div className="App">
        <Router>
          <Banner />
          <div className="lmj-layout-inner">
            <div>
              <Switch>
                <Route path="/list">
                  <Cart cart={cart} setCart={setCart} />
                  <ShoppingList cart={cart} setCart={setCart} />
                </Route>
                <Route path="/list/:id">
                  <Users />
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

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
