import React, { useContext } from "react";

import { Title } from "../../components/Title";
import { Counter } from "./../../components/Counter";
import { NewTodoButton } from "./../../components/NewTodo";
import { Search } from "./../../components/Search";
import { List } from "./../../components/List";
import { Item } from "./../../components/Item";
import { Modal } from "./../../components/Modal";
import { Form } from "../../components/Form";

import { StateContext } from "../../context/stateContext";
import { TodoSkeleton } from "../../components/TodoSkeleton";

export const AppUI = () => {
  const {
    states: { theme, loading, error, searchedTodos, searchValue, statusModal },
    mutations: { onComplete, onDelete },
  } = useContext(StateContext);

  return (
    <>
      <div className={`app-${theme}`}>
        <Title />
        <Search />
        <Counter />
        <List>
          {error && (
            <span className="subtitle">
              Ohhh fuck... Houstoooon 🧑🏽‍🚀, we´ve had a problem. 😥
            </span>
          )}
          {loading &&
            new Array(4).fill(1).map((_a, i) => <TodoSkeleton key={i} />)}
          {!loading && !searchValue && !searchedTodos.length && (
            <span className="subtitle">
              Seriously, have you nothing to <b>DO</b> today?. 🧐
            </span>
          )}
          {searchValue && !searchedTodos.length && (
            <span className="subtitle">
              Uhm, You don't have nothing like "{searchValue}". 👻
            </span>
          )}
          {searchedTodos.map(({ text, completed }) => (
            <Item
              key={text}
              text={text}
              completed={completed}
              onComplete={() => onComplete(text)}
              onDelete={() => onDelete(text)}
            />
          ))}
        </List>

        {statusModal && (
          <Modal>
            <Form />
          </Modal>
        )}
      </div>
      <NewTodoButton />
    </>
  );
};
