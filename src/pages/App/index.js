import "./App.css";

import React from "react";

import { AppUI } from "./AppUI";

import { StateProvider } from "../../context/stateContext";

const App = () => {
  return (
    <StateProvider>
      <AppUI />
    </StateProvider>
  );
};

export default App;
