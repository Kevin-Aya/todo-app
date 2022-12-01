import "./Loading.css";

import React, { useContext } from "react";
import { NewUser } from "../../components/NewUser";
import { StateProvider } from "../../context/stateContext";
import { UserContext } from "../../context/userContext";
import { AppUI } from "../App/AppUI";

const LoadingPage = () => {
  const { userData, loading } = useContext(UserContext);

  if (window.innerWidth > 480) {
    return (
      <section className="other-devices">
        <h1>Please use the app in your phone</h1>
      </section>
    );
  }

  if (loading) {
    return (
      <section className="loading-container">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <>
      {userData?.name ? (
        <StateProvider>
          <AppUI />
        </StateProvider>
      ) : (
        <NewUser />
      )}
    </>
  );
};

export default LoadingPage;
