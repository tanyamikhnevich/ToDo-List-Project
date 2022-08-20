import { ReactComponent as Points } from "./../../../assets/images/three-points.svg";

import { removeTodo, toggleTodoComplete } from "../../../store/toDoSlice";
import React, { Fragment } from "react";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "./hooks";

import styles from "./name-task.module.scss";

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
              <p className={styles.description}>
                Description of task Хочу рассказать вам про свой переезд. Нашла
                в интернете компанию в Эстонии, которая тысяч за 10–15
                «оформляют» вид на жительство...
              </p>
              <div className={styles.buttonContainer}>
                <button className={styles.buttonTag}>tag</button>
                <button className={styles.buttonTag}>tag</button>
                <button className={styles.buttonTag}>tag</button>
              </div>
            </div>
            <button
              className={styles.next}
            >
              <Points />
            </button>
          </div>
          <button onClick={() => dispatch(removeTodo(todo.id))}>DELETE</button>
        </Fragment>
      ))}
    </div>
  );
};
