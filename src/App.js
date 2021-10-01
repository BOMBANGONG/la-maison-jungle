import Banner from "./components/Banner";
import Cart from "./components/Cart";
import ShoppingList from "./components/ShoppingList";
import Footer from "./components/Footer";
import { useState } from "react";

// import Card from "./components/Card";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="App">
      <Banner />
      <div className="lmj-layout-inner">
        <Cart cart={cart} setCart={setCart} />
        <ShoppingList cart={cart} setCart={setCart} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
