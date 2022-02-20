import { render } from "react-dom";
import React from "react";
import App from "./Containers/App";
import { BrowserRouter } from "react-router-dom";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
