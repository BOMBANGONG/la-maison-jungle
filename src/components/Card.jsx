import React from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";
import CareScale from "./CareScale";
import { useHistory } from "react-router-dom";
import "../styles/Card.css";
import { useRouteMatch } from "react-router-dom";
import { string, number, func } from "prop-types";

const Card = (props) => {
  const {
    id,
    name,
    cover,
    water,
    light,
    addToCart,
    price,
    description = "",
    className,
  } = props;
  const { url } = useRouteMatch();
  const history = useHistory();
  function goToDescription() {
    history.push(`${url}/${id}`);
  }
  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(name, price);
  }

  return (
    <UiCard skeleton ripple hover onClick={goToDescription} {...{ className }}>
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
