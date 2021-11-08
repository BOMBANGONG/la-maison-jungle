import React, { useContext } from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";
import CareScale from "./CareScale";
import { useHistory } from "react-router-dom";
import "../styles/Card.css";
import { useRouteMatch } from "react-router-dom";
import { string, number, func } from "prop-types";
import { CartContext } from "../context/CartContext";

const Card = (props: { id: any; name: any; cover: any; water: any; light: any; price: any; description?: "" | undefined; className: any; }) => {
  const {
    id,
    name,
    cover,
    water,
    light,
    price,
    description = "",
    className,
  } = props;

  const { updateCart } = useContext(CartContext);

  const { url } = useRouteMatch();
  const history = useHistory();

  function goToDescription() {
    history.push(`${url}/${id}`);
  }
  function handleAddToCart(e: { stopPropagation: () => void; }) {
    e.stopPropagation();
    updateCart(name, price);
  }

  return (
    <UiCard ripple hover onClick={goToDescription} {...{ className }}>
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      <UiCard.Title>{name}</UiCard.Title>
      <UiCard.Subtitle>{price}€</UiCard.Subtitle>
      <UiCard.Text>{description}</UiCard.Text>
      <div className="lmj-caretypes">
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>

      <UiCard.Actions>
        <UiButton primary onClick={handleAddToCart}>
          Add
        </UiButton>
      </UiCard.Actions>
    </UiCard>
  );
};

// eslint-disable-next-line react/no-typos
Card.propTypes = {
  id: string,
  name: string,
  cover: string,
  water: number,
  light: number,
  addToCart: func,
  price: number,
  description: string,
  className: string,
};

export default Card;
