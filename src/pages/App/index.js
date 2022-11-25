import "./App.css";

import React from "react";
import Div100vh from "react-div-100vh";

import { AppUI } from "./AppUI";

import { StateProvider } from "../../context/stateContext";

const App = () => {
  return (
    <StateProvider>
      <Div100vh>
        <AppUI />
      </Div100vh>
    </StateProvider>
  );
};

export default App;
