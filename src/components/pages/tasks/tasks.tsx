import { NameTask } from "./name-task/name-task";
import { Filter } from "./filter/filter";
import styles from "./tasks.module.scss";
import { NavLink, useSearchParams } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";

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
  {
    id: 3,
    name: "Name of task 3",
    tag: "tag 3",
  },
  {
    id: 4,
    name: "Name of task 4",
    tag: "tag 4",
  },
  {
    id: 5,
    name: "Name of task 5",
    tag: "tag 5",
  },
  {
    id: 6,
    name: "Name of task 6",
    tag: "tag 6",
  },
];

export const Tasks = () => {
  const [visible, setVisible] = useState(false);


  const [searchParams] = useSearchParams();
  const tagQuery =
    searchParams.get(
      "/tasks"
      // || "profile" || "login"
    ) || "";

  const tasks = tagQuery === "tasks";
  console.log(tasks);
  console.log(tagQuery);
  // const profile = tagQuery==="profile";
  // const login = tagQuery==="login";

  const toggleVisibleTask = () => {
    setVisible(true)
  }

  const toggleVisibleProfile = () => {
    setVisible(false)
  }

  return (
    <section className={styles.container}>
      <div className={styles.buttonContainer}>
        <NavLink
          className={classNames(styles.button, styles.buttonActive)}
          to={"/tasks"}
          onClick={toggleVisibleTask}
        >
          Таски
        </NavLink>
        <NavLink className={classNames(styles.button)} to={"/tasks"}
        onClick={toggleVisibleProfile}>
          Профиль
        </NavLink>
        <NavLink className={classNames(styles.button)} to={"/login"}>
          Выход
        </NavLink>
      </div>
      {visible?
      <div>
        <Filter />
        {store.map((name) => (
          <NameTask key={name.id} {...name} />
        ))}
      </div>
      :
      <div>Profile</div>
      }
    </section>
  );
};
