import { Header, Tasks, Wrapper } from "./index";

import styles from "./tasks.module.scss";
import {useAppSelector} from "./tasks/hooks";
import {useState} from "react";

export const TasksPage = () => {
    const todos = useAppSelector((state) => state.todos.todos);

    const [value, setValue] = useState('');

    const filteredTodos = todos.filter(title => {
        return title.name.toLowerCase().includes(value.toLowerCase())
    })

  return (
      <Wrapper className = {styles.container} >
        <Header setValue={setValue}/>
        <Tasks filteredTodos={filteredTodos}/>
      </Wrapper>
  );
};

export {TasksPage as Tasks};