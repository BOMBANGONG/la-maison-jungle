import React from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";
import CareScale from "./CareScale";
import { useHistory } from "react-router-dom";
import "../styles/Card.css";
import { useRouteMatch } from "react-router-dom";

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
      <UiCard.Text>{description}</UiCard.Text>
      <UiCard.Actions>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
        <UiButton primary onClick={handleAddToCart}>
          Add
        </UiButton>
      </UiCard.Actions>
    </UiCard>
  );
};

export default Card;
