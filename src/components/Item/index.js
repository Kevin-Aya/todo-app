import "./Item.css";

import React from "react";

const Item = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li>
      <label className="switch_lamp">
        <input type="checkbox" checked={completed} onChange={onComplete} />
        <span className="lamp_image" />
      </label>
      <span
        className="text"
        style={{
          textDecoration: completed && "line-through",
          fontStyle: completed && "italic",
        }}>
        {text}
      </span>
      <input
        style={{ display: completed && "inline-block" }}
        type="button"
        disabled={!completed}
        onClick={onDelete}
      />
    </li>
  );
};

export { Item };
