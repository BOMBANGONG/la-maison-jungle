import React from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";
import CareScale from "./CareScale";

const Card = ({ id, name, water, light, addToCart, price }) => {
  return (
    <div>
      <UiCard skeleton ripple hover>
        <UiCard.Media src="http://t3.gstatic.com/images?q=tbn:ANd9GcT40xnh3l_cEal2CUsv3Jl-zBGIQUSSLm3aecH7Px24cR24dBuBKJ9IrYJMk5CP-LWkMgpCbk3Pu4GzUN5UfLs" />
        <UiCard.Subtitle>{(id, name)}</UiCard.Subtitle>
        <UiCard.Actions>
          <CareScale careType="water" scaleValue={water} />
          <CareScale careType="light" scaleValue={light} />
          <UiButton primary onClick={() => addToCart(name, price)}>
            Add
          </UiButton>
        </UiCard.Actions>
      </UiCard>
    </div>
  );
};

export default Card;
