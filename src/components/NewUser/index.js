import "./NewUser.css";

import React, { useContext, useState } from "react";
import { UserContext } from "../../context/userContext";

const NewUser = () => {
  const { saveUserData } = useContext(UserContext);

  const [name, setName] = useState("");

  const handleName = ({ target: { value } }) => setName(value);

  const saveName = () => {
    const userData = { name };
    saveUserData(userData);
  };

  return (
    <section className="newuser-container">
      <section className="messages">
        <article>
          <h3 className="message">¡Toc toc!</h3>
          <h3 className="message">Who are you?</h3>
        </article>
        <article className="right">
          <h4 className="message">
            Hi, I'm <span className="name">{name || "... 🤔"}</span>
          </h4>
        </article>
      </section>
      <section>
        <input
          className="w-name"
          type="text"
          placeholder="What's your nameeeee?"
          value={name}
          onChange={handleName}
        />
        <input
          className="b-name"
          type="button"
          value="Yup, it's my name"
          onClick={saveName}
          disabled={!name}
        />
      </section>
    </section>
  );
};

export { NewUser };
