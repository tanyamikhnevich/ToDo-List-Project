import React from "react";
import { useAppSelector } from "./hooks";
import { Task } from "./task/task";

import styles from "./tasks.module.scss";

export const Tasks = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
