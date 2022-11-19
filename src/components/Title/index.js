import "./Title.css";
import React, { useState } from "react";

const Title = () => {
  const [theme, setTheme] = useState(false);
  return (
    <div className="title-container">
      <h1>Hello Kevin</h1>
      <label className="switch">
        <input
          type="checkbox"
          checked={theme}
          onChange={() => setTheme((p) => !p)}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

export { Title };
