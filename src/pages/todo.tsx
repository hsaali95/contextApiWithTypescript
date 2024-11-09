import React from "react";
import Button from "../components/button";
import { useAppContext } from "../hooks";

const Todo: React.FC = () => {
  const { setData, data } = useAppContext();

  const addTodo = () => {
    setData((prevData) => [
      ...prevData,
      { id: Date.now(), title: "New Task", description: "acha bandah ha" },
    ]);
  };
  return (
    <div>
      <Button text={"Add"} onClick={addTodo} />
      <ul>
        {data?.map((todo) => (
          <>
            <li key={todo.id}>{todo.id}</li>
            <li key={todo.id}>{todo.title}</li>
            <li key={todo.id}>{todo.description}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
