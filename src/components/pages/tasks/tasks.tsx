import { NameTask, Filter, WrapperNav } from "./index";

import styles from "./tasks.module.scss";
import { useState } from "react";
import { addTodo } from "../../store/toDoSlice";
import { InputField } from "./inputfield";
import {useAppDispatch} from "./name-task/hooks";

export type ArrType = {
  id: number;
  name: string;
  tag: string;
};
export type StoreType = Array<ArrType>;

export const store: StoreType = [
  {
    id: 1,
    name: "Name of task 1",
    tag: "tag 1",
  },
  {
    id: 2,
    name: "Name of task 2",
    tag: "tag 2",
  },
  // {
  //   id: 3,
  //   name: "Name of task 3",
  //   tag: "tag 3",
  // },
  // {
  //   id: 4,
  //   name: "Name of task 4",
  //   tag: "tag 4",
  // },
  // {
  //   id: 5,
  //   name: "Name of task 5",
  //   tag: "tag 5",
  // },
  // {
  //   id: 6,
  //   name: "Name of task 6",
  //   tag: "tag 6",
  // },
];

export const Tasks = () => {
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();
  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <section className={styles.container}>
      <WrapperNav>

        <Filter />
        <InputField value={text} handleSubmit={addTask} handleInput={setText} />
          <NameTask/>
      </WrapperNav>
    </section>
  );
};
