import React from "react";
import Button from "../components/button";
import { useAppContext } from "../hooks";

const Todo: React.FC = () => {
  const { setData, data, deleteTodo } = useAppContext();
  console.log("data", data);
  const addTodo = () => {
    setData((prevData) => [
      ...prevData,
      { id: Date.now(), title: "New Task", description: "acha bandah ha" },
    ]);
  };
  const deleteItems = (id: number) => {
    deleteTodo(id);
  };
  return (
    <div>
      <Button text={"Add"} onClick={addTodo} />
      <ul>
        {data?.map((todo, i) => (
          <div key={i}>
            <li>{todo.id}</li>
            <li>{todo.title}</li>
            <li>{todo.description}</li>
            <Button text="delete" onClick={() => deleteItems(todo.id)} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
