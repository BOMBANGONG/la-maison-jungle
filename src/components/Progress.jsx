import React from "react";
import UiProgress from "@ied/ui-progress";

const Progress = () => {
  const circleStyle = {
    size: 50,
  };

  return (
    <div style={circleStyle}>
      <UiProgress color="yellow-500" spinner />
    </div>
  );
};

export default Progress;
