import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { USER_DATA_V1 } from "../utils/enums";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const {
    item: userData,
    saveItem: saveUserData,
    loading,
    error,
  } = useLocalStorage(USER_DATA_V1, {}, 200);

  const state = { userData, saveUserData, loading, error };

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };
