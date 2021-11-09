import { useState, useEffect, useContext } from "react";
import "../styles/Cart.css";
import Button from "./Button";
import { CartContext } from "../context/CartContext";
import React from "react";



const Cart = () => {
  const { cart, emptyCart } = useContext(CartContext);

  const [isOpen, setIsOpen] = useState(false);

  const total = cart.reduce(
    (acc, plantType) => acc + (plantType.amount??0) * (plantType.price??0),
    0
  );

  // cart remains open when is not empty
  useEffect(() => {
    if (total && !isOpen) {
      setIsOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total]);

  return isOpen ? (
    <div className="lmj-cart">
      <Button label={"close"} onClick={() => setIsOpen(false)} />
      <h2>Cart</h2>
      {cart.map(({ name, price, amount }: any, index: any) => (
        <div key={`${name}-${index}`}>
          {name} {price} * {amount}
        </div>
      ))}

      <h3>Total:{total}€</h3>
      <Button label={"Empty Cart"} onClick={() => emptyCart()} />
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <Button label={"Open Cart"} onClick={() => setIsOpen(true)} />
    </div>
  );
}

export default Cart;
