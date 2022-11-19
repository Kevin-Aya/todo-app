import "./TodoSkeleton.css";
import React from "react";

const TodoSkeleton = () => {
  return (
    <div className="skeleton">
      <div className="image"></div>
      <div className="text"></div>
      <div className="close"></div>
    </div>
  );
};

export { TodoSkeleton };
