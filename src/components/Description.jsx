import { useParams, useHistory } from "react-router-dom";
import { plantList } from "../datas/plantList";
import Button from "./Button";
import "../styles/Description.css";
import { func } from "prop-types";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Description = () => {
  const { updateCart } = useContext(CartContext);

  const history = useHistory();
  const { id } = useParams();
  const plantData = plantList.find((e) => e.id === id);
  if (!plantData) {
    history.push("/shop");
    return null;
  }

  const { cover, name, price, description } = plantData;

  return (
    <div>
      <div className="container">
        <div className="img-src">
          <img src={cover} alt={`${name} cover`} />
        </div>

        <div className="text-src">
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{price}€</p>
          <Button
            primary
            label={"Add"}
            onClick={() => updateCart(name, price)}
          />
          <Button label={"Back"} onClick={() => history.push("/shop")} />
        </div>
      </div>
    </div>
  );
};

Description.propTypes = {
  setCart: func,
};

export default Description;
