import React, {ReactNode, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";

import { ReactComponent as Plus } from "components/assets/images/plus.svg";
import { usePopup } from "components/features/popup";
import { AddTaskForm } from "components/pages/tasks-page/tasks/form-add-task/form-add-task";

import styles from "./wrapper-nav.module.scss";
import { OpenTask } from "../../pages/tasks-page/tasks/open-task/open-task";
import { Modal } from "./../portal/portal";

//TODO сделать кнопку по выбору формы

interface Props {
  children: ReactNode;
  className?: string;
}

const links = [
  {
    title: "Tasks",
    url: "/tasks",
  },
  {
    title: "Profile",
    url: "/profile",
  },
];

export const Wrapper = ({ children, className }: Props) => {
  const getQuery = useLocation();
  const { openPopup } = usePopup();
  const [open, setOpen] = useState(false)

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        {links.map((link, index) => (
          <NavLink
            key={index}
            className={classNames(
              styles.button,
              getQuery.pathname === `${link.url}` && styles.buttonActive
            )}
            to={link.url}
          >
            {link.title}
          </NavLink>
        ))}
        <button
          className={classNames(styles.button, styles.add)}
          // onClick={() =>
          //   openPopup(<AddTaskForm name="" description="" type="create" />)
          // }
          //onClick={() => openPopup(<OpenTask />)}
          onClick={() => setOpen(true)}
        >
          <Modal open={open} onClose={() => setOpen(false)}><AddTaskForm name="" description="" type="create" /></Modal>
          Add Task
          <div className={styles.plus}>
            <Plus />
          </div>
        </button>
      </div>
      <main className={className}>{children}</main>
    </nav>
  );
};
