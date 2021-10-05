// import React, { useState } from "react";
import { Select as UiSelect } from "@ied/ui-select";

const Select = (props) => {
  return (
    <div>
      <UiSelect
        style={{
          width: "160px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        label={props.label}
        options={props.options}
        onChange={props.onChange}
        value={props.value}
        color="primary"
      />
    </div>
  );
};

export default Select;
