import React, { useState } from "react";
import classNames from "classnames";

import {addTags, removeTodo, ToDoTaskI} from "components/store/toDoSlice";
import { useAppDispatch } from "../hooks";
import { ReactComponent as Points } from "components/assets/images/three-points.svg";
import { AddTaskForm } from "../form-add-task/form-add-task";
import { usePopup } from "components/features/popup";

import styles from "./button-select.module.scss";

interface PropsI {
  todo: ToDoTaskI;
}

export const ButtonSelect = ({ todo }: PropsI) => {
  const [select, setSelect] = useState(false);
  const { openPopup } = usePopup();

  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => setSelect((select) => !select)}
        className={styles.next}
      >
        <Points />
      </button>
      {select && (
        <div className={classNames(styles.pointsContainer)}>
          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className={styles.buttonEdit}
          >
            Delete Task
          </button>
          <button
            onClick={() => {
              openPopup(
                <AddTaskForm name={todo.name} description={todo.description} type='edit' id={todo.id}/>
              );
              dispatch(addTags(todo.tags));
              setSelect((select) => !select);
            }}
            className={styles.buttonEdit}
          >
            Edit Task
          </button>
        </div>
      )}
    </div>
  );
};
