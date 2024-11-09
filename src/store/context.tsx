import React, { createContext, useContext, useState } from "react";
import { IChildren, IState, ITodo } from "../types";

export const AppContext = createContext<null | IState>(null);
const GlobalContext: React.FC<IChildren> = ({ children }) => {
  const [data, setData] = useState<ITodo[]>([]);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;

export const useAppContext = () => {
  return useContext(AppContext);
};
