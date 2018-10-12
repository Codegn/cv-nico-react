import React from "react";
import { render } from "react-dom";
import App from "./components/App.js";
import Card from "@material-ui/core/Card";

render(
  <div>
    <Card raised="true">
      <App />
    </Card>
  </div>,
  document.getElementById("root")
);
