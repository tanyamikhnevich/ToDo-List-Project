import { Filter, NameTask, Wrapper } from "./index";

import styles from "./tasks.module.scss";
// нажать на туду и открыть модальное окно
// TODO нормально сделать фон
// TODO Filter => Header
// TODO в Wrapper сделать передачу props (className?: string), убрать ненужную вложенность div
// TODO NameTask => Tasks, Tasks => TasksPage, export {TasksPage as Tasks}

export const Tasks = () => {
  return (
    <section className={styles.container}>
      <Wrapper>
        <Filter />
        <NameTask />
      </Wrapper>
    </section>
  );
};