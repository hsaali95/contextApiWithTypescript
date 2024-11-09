import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IChildren {
  children?: ReactNode;
}
export interface ITodo {
  id: number;
  title: string;
  description: string;
}
export type IState = {
  data: ITodo[];
  setData: Dispatch<SetStateAction<ITodo[]>>;
  deleteTodo: (id: number) => void;
};
