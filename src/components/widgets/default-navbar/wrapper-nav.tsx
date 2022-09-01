import React, { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { ReactComponent as Plus } from "./../../assets/images/plus.svg";
import { usePopup } from "../../features/popup";
import { AddTaskForm } from "../../pages/tasks/name-task/form-add-task/form-add-task";

import styles from "./wrapper-nav.module.scss";
import {OpenTask} from "../../pages/tasks/name-task/open-task/open-task";

interface Props {
  children: ReactNode;
}

export const WrapperNav = ({ children }: Props) => {
  const getQuery = useLocation();
  const { openPopup } = usePopup();

  return (
    <nav className={styles.nav}>
      <div className={styles.buttonContainer}>
        <NavLink
          className={classNames(
            styles.button,
            getQuery.pathname === "/tasks" && styles.buttonActive
          )}
          to={"/tasks"}
        >
          Tasks
        </NavLink>
        <NavLink
          className={classNames(
            styles.button,
            getQuery.pathname === "/profile" && styles.buttonActive
          )}
          to={"/profile"}
        >
          Profile
        </NavLink>

        <button
          className={classNames(styles.button, styles.buttonAdd)}
          onClick={() => openPopup(<AddTaskForm name={''} description={''}/>)}
          //onClick={() => openPopup(<OpenTask />)}
        >
          Add Task
        </button>
        <div className={styles.plus}>
          <Plus />
        </div>
      </div>
      <main className={styles.childrenSection}>{children}</main>
    </nav>
  );
};
