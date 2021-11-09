import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import React from "react";

interface Plants {
  name: string;
  water: number;
  light: number;
}

const handleClick = (plantName: any) => {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ name, water, light }: Plants) {
  return (
    <li className="lmj-plant-item" onClick={() => handleClick}>
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;
