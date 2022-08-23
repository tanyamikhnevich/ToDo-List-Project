import classNames from "classnames";
import styles from "./name-task.module.scss";
import { PayloadI, removeTodo } from "../../../store/toDoSlice";
import React, { useState } from "react";
import { useAppDispatch } from "./hooks";
import { ReactComponent as Points } from "../../../assets/images/three-points.svg";

interface PropsI {
  todo: PayloadI;
}

export const ButtonSelect = ({ todo }: PropsI) => {
  const [select, setSelect] = useState(false);

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
          <button className={styles.buttonEdit}>Edit Task</button>
        </div>
      )}
    </div>
  );
};
