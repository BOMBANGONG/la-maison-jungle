import React, { useState } from "react";
import UiTextfield from "@ied/ui-textfield";

const Textfield = () => {
  const [value, setValue, setInputValue, inputValue] = useState("");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue?.includes("@")) {
      alert(
        "Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥"
      );
    }
  }
  return (
    <div>
      <UiTextfield
        dataTestId="outlined_2"
        outlined
        id="outlined_2"
        value={value}
        onChange={((e) => setValue(e.target.value), handleInput)}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default Textfield;
