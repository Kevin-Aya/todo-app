import "./Form.css";

import React, { useContext, useState } from "react";
import { StateContext } from "../../context/stateContext";

const Form = () => {
  const {
    mutations: { addTodo, setStatusModal },
  } = useContext(StateContext);

  const [newTodo, setNewTodo] = useState("");
  const [disabledButton, setDisabled] = useState(true);

  const onSubmit = (event) => {
    event.preventDefault();
    setNewTodo("");
    setDisabled(true);

    addTodo(newTodo);
  };

  const onChange = ({ target: { value } }) => {
    setDisabled(!value);

    setNewTodo(value);
  };

  const closeModal = () => setStatusModal((prevState) => !prevState);

  return (
    <section className="section-new-todo">
      <button type="button" onClick={closeModal}>
        Close
      </button>
      <form onSubmit={onSubmit}>
        <textarea
          value={newTodo}
          onChange={onChange}
          placeholder="What're you gonna do? 😶"
          autoFocus
        />
        <input type="submit" value="Add" disabled={disabledButton} />
      </form>
    </section>
  );
};

export { Form };
