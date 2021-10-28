import CareScale from "./CareScale";
import "../styles/PlantItem.css";
import { string } from "prop-types";

function handleClick(plantName) {
  alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`);
}

function PlantItem({ name, water, light }) {
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

handleClick.propTypes = {
  plantName: string,
};

export default PlantItem;
