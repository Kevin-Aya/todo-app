import "./NewTodo.css";

import React, { useContext } from "react";

import { StateContext } from "../../context/stateContext";

const NewTodoButton = () => {
  const {
    mutations: { setStatusModal, setSearchValue },
  } = useContext(StateContext);

  const onClick = () => {
    setSearchValue("");
    setStatusModal((prevState) => !prevState);
  };

  return (
    <section className="new-todo-container">
      <span>What're we doing today?</span>
      <div>
        <button onClick={onClick} />
      </div>
    </section>
  );
};

export { NewTodoButton };
