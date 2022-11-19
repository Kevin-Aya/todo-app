import { createContext, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";
import { useTheme } from "../hooks/useTheme";
import { TODOS_V1 } from "../utils/enums";

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage(TODOS_V1, []);

  const [searchValue, setSearchValue] = useState("");

  //Counter
  const completedTodos = todos.filter(({ completed }) => !!completed).length;
  const totalTodos = todos.length;

  //Search
  let searchedTodos = todos;
  if (searchValue.length >= 1) {
    searchedTodos = todos.filter(({ text }) =>
      text.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }

  //List
  const onComplete = (textIndex) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(({ text }) => text === textIndex);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const onDelete = (textIndex) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(({ text }) => text === textIndex);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  //Modal
  const [statusModal, setStatusModal] = useState(false);

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false,
    });

    saveTodos(newTodos);
  };

  // App theme
  const [theme, setTheme] = useTheme();

  const value = {
    states: {
      loading,
      error,
      searchValue,
      completedTodos, //TODO: to review 'cause the code isn't necessary
      totalTodos,
      searchedTodos,
      statusModal,
      theme,
    },
    mutations: {
      setSearchValue,
      setStatusModal,
      onComplete,
      onDelete,
      addTodo,
      setTheme,
    },
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export { StateContext, StateProvider };
