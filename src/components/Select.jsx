import { Select as UiSelect } from "@ied/ui-select";

const Select = (props) => {
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
      />
    </div>
  );
};

export default Select;
