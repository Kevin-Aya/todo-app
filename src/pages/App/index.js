import "./App.css";

import React from "react";
import Div100vh from "react-div-100vh";

import { UserProvider } from "../../context/userContext";

import LoadingPage from "../LoadingPage";

const App = () => {
  return (
    <Div100vh>
      <UserProvider>
        <LoadingPage />
      </UserProvider>
    </Div100vh>
  );
};

export default App;
