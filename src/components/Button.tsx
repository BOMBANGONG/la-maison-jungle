import React from "react";
import UiButton, { ButtonProps } from "@ied/ui-button";
import { FabProps } from "@rmwc/fab";


const Button = (props: JSX.IntrinsicAttributes & ButtonProps & FabProps & React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode; }) => {
  return (
    <div>
      <UiButton {...props}></UiButton>
    </div>
  );
};

export default Button;
