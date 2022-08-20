import { NameTask, Filter, WrapperNav } from "./index";

import { useState } from "react";
import { addTodo } from "../../store/toDoSlice";
import { InputField } from "./inputfield";
import {useAppDispatch} from "./name-task/hooks";

import styles from "./tasks.module.scss"


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
