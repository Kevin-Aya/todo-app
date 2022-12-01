import React, { useContext } from "react";

import { StateContext } from "../../context/stateContext";

import { TodoSkeleton } from "../../components/TodoSkeleton";

import { Title } from "../../components/Title";
import { Counter } from "./../../components/Counter";
import { NewTodoButton } from "./../../components/NewTodo";
import { Search } from "./../../components/Search";
import { List } from "./../../components/List";
import { Item } from "./../../components/Item";
import { Modal } from "./../../components/Modal";
import { Form } from "../../components/Form";

import { Container } from "../../components/Container";

export const AppUI = () => {
  const {
    states: { loading, error, searchedTodos, searchValue, statusModal },
    mutations: { onComplete, onDelete },
  } = useContext(StateContext);

  return (
    <>
      <Container>
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
      </Container>
      <NewTodoButton />
    </>
  );
};
