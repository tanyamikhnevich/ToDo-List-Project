import React, { Fragment } from "react";
import classNames from "classnames";

import { toggleTodoComplete } from "../../../store/toDoSlice";
import { useAppDispatch, useAppSelector } from "./hooks";
import { ButtonSelect } from "./button-select/button-select";

import styles from "./name-task.module.scss";
import { AddTaskForm } from "./form-add-task/form-add-task";
import { usePopup } from "../../../features/popup";

export const NameTask: React.FC = () => {
  const todos = useAppSelector((state) => state.todos.todos);
  const dispatch = useAppDispatch();
  const { openPopup } = usePopup();

  // useEffect(() => {console.log(todos)}, [todos]);

  return (
    <div>
      {todos.map((todo) => (
        <Fragment key={todo.id}>
          <div
            onDoubleClick={() =>
              openPopup(
                <AddTaskForm name={todo.name} description={todo.description} />
              )
            }
            className={styles.container}
          >
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
                {todo.name}
              </h2>
              <p className={styles.description}>{todo.description}</p>
              <div className={styles.buttonContainer}>
                {todo.tags.map((tag: string) => (
                  <button key={tag} className={styles.buttonTag}>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <ButtonSelect todo={todo} />
          </div>
        </Fragment>
      ))}
    </div>
  );
};
