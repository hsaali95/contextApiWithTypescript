import React, { useState } from "react";
import { IChildren, ITodo } from "../types";
import { AppContext } from "../hooks";

const GlobalContext: React.FC<IChildren> = ({ children }) => {
  const [data, setData] = useState<ITodo[]>([]);

  const deleteTodo = (id: number) => {
    const copy = [...data];
    setData(copy.filter((value) => value.id !== id));
  };
  return (
    <AppContext.Provider value={{ data, setData, deleteTodo }}>
      {children}
    </AppContext.Provider>
  );
};

export default GlobalContext;
