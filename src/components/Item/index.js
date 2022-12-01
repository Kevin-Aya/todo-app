import "./Item.css";

import React from "react";

const Item = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li>
      <label className="switch_lamp" onClick={onComplete}>
        <input type="checkbox" checked={completed} />
        <span className="lamp_image" />
      </label>
      <span
        className="text"
        style={{
          textDecoration: completed && "line-through",
          fontStyle: completed && "italic",
        }}
        onClick={onComplete}>
        {text}
      </span>
      <input
        style={{ display: completed && "inline-block" }}
        className="close"
        type="button"
        disabled={!completed}
        onClick={onDelete}
      />
    </li>
  );
};

export { Item };
