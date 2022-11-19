import "./List.css";

import React from "react";

const List = ({ children }) => {
  return (
    <section className="todo-container">
      <ul>{children}</ul>
    </section>
  );
};

export { List };
