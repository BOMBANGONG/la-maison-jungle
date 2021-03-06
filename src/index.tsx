import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/Banner.css";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

//Button component
import "@ied/ui-core/dist/ui-core.min.css";
import "@ied/ui-button/dist/ui-button.min.css";
import "@ied/ui-progress/dist/ui-progress.min.css";

//Card component
import "@ied/ui-card/dist/ui-card.min.css";
import "@ied/ui-skeleton/dist/ui-skeleton.min.css";
import "@ied/ui-surface/dist/ui-surface.min.css";

//Select component
import "@ied/ui-select/dist/ui-select.min.css";
import "@ied/ui-list/dist/ui-list.min.css";
import "@ied/ui-chip/dist/ui-chip.min.css";
import "@ied/ui-icon/dist/ui-icon.min.css";
import "@ied/ui-textfield/dist/ui-textfield.min.css";
import "@ied/ui-tooltip/dist/ui-tooltip.min.css";
import "@ied/ui-ellipsis/dist/ui-ellipsis.min.css";
import "@ied/ui-avatar/dist/ui-avatar.min.css";
import "@ied/ui-menu/dist/ui-menu.min.css";

//Textfield component
import "@ied/ui-icon-button/dist/ui-icon-button.min.css";

//Progress bar component
import "@ied/ui-progress/dist/ui-progress.css";

ReactDOM.render(
  <ThemeProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);
