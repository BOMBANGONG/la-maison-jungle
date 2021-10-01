import React, { useState } from "react";
import { Select as UiSelect } from "@ied/ui-select";

const Select = () => {
  const [compactValue, setCompactValue] = useState("");
  return (
    <div>
      <UiSelect
        id="compact_1"
        dataTestId="compact_1"
        compact
        label="Select your food"
        options={[
          {
            label: "Pizza",
            value: "2",
          },
          {
            label: "Cookies",
            value: "1",
          },
          {
            label: "Icecream",
            value: "3",
          },
        ]}
        onChange={(e) => setCompactValue(e.target.value)}
        value={compactValue}
        required
        color="primary"
      />
    </div>
  );
};

export default Select;
