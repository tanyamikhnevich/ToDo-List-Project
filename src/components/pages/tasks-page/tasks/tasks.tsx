import React from "react";
import { Task } from "./task/task";

import styles from "./tasks.module.scss";
import {ToDoTaskI} from "../../../store/toDoSlice";

interface Props {
  filteredTodos: ToDoTaskI[];
}

export const Tasks = ({filteredTodos}:Props) => {
  return (
    <div className={styles.container}>
      {filteredTodos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
