import { useContext, createContext } from "react";
import { authContext } from "../context/authContext";

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("There is no auth provider");
  }
  return context;
};
