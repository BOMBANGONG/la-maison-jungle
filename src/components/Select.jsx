// import React, { useState } from "react";
import { Select as UiSelect } from "@ied/ui-select";

const Select = (props) => {
  return (
    <div>
      <UiSelect
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
