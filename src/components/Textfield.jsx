import React, { useState } from "react";
import UiTextfield from "@ied/ui-textfield";

const Textfield = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <UiTextfield
        dataTestId="outlined_2"
        outlined
        id="outlined_2"
        value={value}
        label="Default"
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Textfield;
