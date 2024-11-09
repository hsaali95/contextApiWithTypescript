import React, { useState } from "react";
import { IChildren, ITodo } from "../types";
import { AppContext } from "../hooks";

const GlobalContext: React.FC<IChildren> = ({ children }) => {
  const [data, setData] = useState<ITodo[]>([]);
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
