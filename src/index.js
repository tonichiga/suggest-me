import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "modern-normalize";
import "./assets/styles/global.scss";
import { HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
