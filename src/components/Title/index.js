import "./Title.css";
import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

const Title = () => {
  const {
    userData: { name },
  } = useContext(UserContext);
  // const [theme, setTheme] = useState(false);
  return (
    <div className="title-container">
      <h1>Hello {name}</h1>
      {/* <label className="switch">
        <input
          type="checkbox"
          checked={theme}
          onChange={() => setTheme((p) => !p)}
        />
        <span className="slider round" />
      </label> */}
    </div>
  );
};

export { Title };
