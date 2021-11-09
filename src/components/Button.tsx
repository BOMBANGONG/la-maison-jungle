import React from "react";
import UiButton from "@ied/ui-button";


type Props = React.ComponentProps<typeof UiButton>

const Button: React.FC<Props> = (props) => {
  return (
    <div>
      <UiButton {...props}></UiButton>
    </div>
  );
};

export default Button;
