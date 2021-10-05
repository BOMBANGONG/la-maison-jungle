import React from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";
import CareScale from "./CareScale";
import { useHistory } from "react-router-dom";
import "../styles/Card.css";

const Card = ({
  id,
  name,
  cover,
  water,
  light,
  addToCart,
  price,
  description = "",
}) => {
  const history = useHistory();
  function goToDescription() {
    history.push(`/list/${id}`);
  }
  function handleAddToCart(e) {
    e.stopPropagation();
    addToCart(name, price);
  }

  return (
    <div onClick={goToDescription}>
      <UiCard skeleton ripple hover>
        <img
          className="lmj-plant-item-cover"
          src={cover}
          alt={`${name} cover`}
        />
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
    </div>
  );
};

export default Card;

//
