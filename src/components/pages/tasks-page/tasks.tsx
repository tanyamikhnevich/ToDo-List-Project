import { Header, Tasks, Wrapper } from "./index";

import styles from "./tasks.module.scss";

export const TasksPage = () => {
  return (
      <Wrapper className = {styles.container} >
        <Header />
        <Tasks />
      </Wrapper>
  );
};

export {TasksPage as Tasks};