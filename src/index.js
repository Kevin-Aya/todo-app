import React from "react";
import ReactDOM from "react-dom/client";

import "./global.css";

import App from "./pages/App";

const root = ReactDOM.createRoot(document.getElementById("container"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
