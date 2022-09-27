import classNames from "classnames";
import React from "react";

import { ToDoTaskI, toggleTodoComplete } from "components/store/toDoSlice";
import { ButtonSelect } from "../button-select/button-select";
import { useAppDispatch } from "../hooks";
import { usePopup } from "components/features/popup";
import {Tag} from "components/shared/tag/tag";

import styles from "./task.module.scss";
import {OpenTask} from "../open-task/open-task";

interface Props {
  todo: ToDoTaskI;
}

export const Task = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  const { openPopup } = usePopup();
  return (
    <div
      onDoubleClick={() =>
        openPopup(
          <OpenTask todo={todo}/>
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
      <div className={styles.nameContainer}>
        <h2
          className={classNames(
            todo.completed ? styles.completed : styles.name
          )}
        >
          {todo.name}
        </h2>
        <p className={styles.description}>{todo.description}</p>
        <div className={styles.buttonContainer}>
          {todo.tags.map((tag: string) => (
              <Tag name={tag} key={tag} />
          ))}
        </div>
      </div>
      <ButtonSelect todo={todo} />
    </div>
  );
};
