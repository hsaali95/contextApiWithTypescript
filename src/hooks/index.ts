import { createContext, useContext } from "react";
import { IState } from "../types";

export const AppContext = createContext<null | IState >(null);
export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used within GlobalContext");
    }
    return context;
  };