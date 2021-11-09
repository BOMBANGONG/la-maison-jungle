import { Select as UiSelect } from "@ied/ui-select";
import React from "react";



const Select = (props: { label: any; options: any; onChange: any; value: any; }) => {
  const { label, options, onChange, value } = props;
  return (
    <div>
      <UiSelect
        style={{
          width: "160px",
        }}
        label={label}
        options={options}
        onChange={onChange}
        value={value}
        color="primary"
        dataTestId={""}      />
    </div>
  );
};

export default Select;
