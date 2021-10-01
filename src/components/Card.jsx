import React from "react";
import UiButton from "@ied/ui-button";
import UiCard from "@ied/ui-card";

const Card = () => {
  return (
    <div skeleton ripple hover>
      <UiCard.Media src="http://t3.gstatic.com/images?q=tbn:ANd9GcT40xnh3l_cEal2CUsv3Jl-zBGIQUSSLm3aecH7Px24cR24dBuBKJ9IrYJMk5CP-LWkMgpCbk3Pu4GzUN5UfLs" />
      <UiCard.Subtitle>Subtitle</UiCard.Subtitle>
      <UiCard.Actions>
        <UiButton primary>Add</UiButton>
      </UiCard.Actions>
    </div>
  );
};

export default Card;
