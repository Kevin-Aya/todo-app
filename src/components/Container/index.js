import React, { useContext } from "react";
import { StateContext } from "../../context/stateContext";

const Container = ({ children }) => {
  const {
    states: { theme },
  } = useContext(StateContext);

  return <div className={`app-${theme}`}>{children}</div>;
};

export { Container };
