import points from "./../../../assets/images/three-points.svg";

import styles from "./name-task.module.scss";
import { removeTodo, toggleTodoComplete } from "../../../store/toDoSlice";
import React, { Fragment } from "react";
import classNames from "classnames";
import {useAppDispatch, useAppSelector} from "./hooks";

// interface Props {
//   id: number;
//   text: string;
//   completed: any;
// }

export const NameTask: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  return (
    <div>
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <div className={styles.container}>
            <div className={styles.checkboxContainer}>
              <input
                className={styles.checkbox}
                type={"radio"}
                checked={todo.completed}
                onClick={() => {
                  dispatch(toggleTodoComplete(todo.id));
                }}
              />
            </div>
            <div className={styles.taskNameContainer}>
              <h2
                className={classNames(
                  todo.completed ? styles.nameDo : styles.name
                )}
              >
                {todo.text}
              </h2>
              <div className={styles.buttonContainer}>
                <button className={styles.buttonTag}>tag</button>
                <button className={styles.buttonTag}>tag</button>
                <button className={styles.buttonTag}>tag</button>
              </div>
            </div>
            <div className={styles.next}>
              <img src={points} alt={"..."} />
            </div>
          </div>
          <button onClick={() => dispatch(removeTodo(todo.id))}>
            DELETE
          </button>
        </Fragment>
      ))}
    </div>
  );
};
