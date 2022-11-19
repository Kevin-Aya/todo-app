import "./Counter.css";

import React, { useContext } from "react";
import { StateContext } from "../../context/stateContext";

const Counter = () => {
  const {
    states: { completedTodos, totalTodos },
  } = useContext(StateContext);
  return (
    <div className="counter-container">
      <h3>Your tasks</h3>
      <h3>
        {completedTodos}/{totalTodos}
      </h3>
    </div>
  );
};

export { Counter };
