import {Filter, NameTask, WrapperNav} from "./index";

import styles from "./tasks.module.scss";
// нажать на туду и открыть модальное окно

export const Tasks = () => {
  return (
    <section className={styles.container}>
      <WrapperNav>
        <Filter />
        <NameTask />
      </WrapperNav>
    </section>
  );
};
