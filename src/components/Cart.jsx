import { useState } from "react";
import "../styles/Cart.css";
import Button from "./Button";

function Cart({ cart, updateCart }) {
  const monsteraPrice = 8;
  const [isOpen, setIsOpen] = useState(true);

  return isOpen ? (
    <div className="lmj-cart">
      <Button label={"close"} onClick={() => setIsOpen(false)} />
      <h2>Panier</h2>
      <h3>Total : {monsteraPrice * cart}€</h3>
      <Button label={"Empty Cart"} onClick={() => updateCart(0)} />
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <Button
        label={"Open Cart"}
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      />
    </div>
  );
}

export default Cart;
