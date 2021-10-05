import { useState } from "react";
import "../styles/Cart.css";
import Button from "./Button";

function Cart({ cart, setCart }) {
  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + plantType.amount * plantType.price,
    0
  );

  return isOpen ? (
    <div className="lmj-cart">
      <Button label={"close"} onClick={() => setIsOpen(false)} />
      <h2>Cart</h2>
      {cart.map(({ name, price, amount }, index) => (
        <div key={`${name}-${index}`}>
          {name} {price} * {amount}
        </div>
      ))}

      <h3>Total:{total}€</h3>
      <Button label={"Empty Cart"} onClick={() => setCart([])} />
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
