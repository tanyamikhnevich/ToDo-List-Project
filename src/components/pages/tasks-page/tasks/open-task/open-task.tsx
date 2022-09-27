import styles from "./open-task.module.scss";
import { Tag } from "../../../../shared/tag/tag";
import { addTags, removeTodo, ToDoTaskI } from "../../../../store/toDoSlice";
import { useAppDispatch } from "../hooks";
import { AddTaskForm } from "../form-add-task/form-add-task";
import React from "react";
import { usePopup } from "../../../../features/popup";

interface Props {
  todo: ToDoTaskI;
}

export const OpenTask = ({ todo }: Props) => {
  const dispatch = useAppDispatch();
  const { openPopup } = usePopup();
  const { closePopup } = usePopup();

  return (
    <div className={styles.container}>
      <div className={styles.dataContainer}>
        <h2 className={styles.name}>{todo.name}</h2>
        <p className={styles.description}>{todo.description}</p>
        <div className={styles.buttonTagContainer}>
          {todo.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
      </div>

      <div className={styles.buttonEditContainer}>
        <button
          className={styles.buttonEdit}
          onClick={() => {
            openPopup(
              <AddTaskForm
                name={todo.name}
                description={todo.description}
                type="edit"
                id={todo.id}
              />
            );
            dispatch(addTags(todo.tags));
          }}
        >
          Edit Task
        </button>
        <button
          className={styles.buttonEdit}
          onClick={() => {
            dispatch(removeTodo(todo.id));
            closePopup();
          }}
        >
          Delete Task
        </button>
      </div>
    </div>
  );
};
