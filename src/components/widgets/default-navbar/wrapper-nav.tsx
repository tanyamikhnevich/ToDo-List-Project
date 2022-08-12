import { ReactNode } from "react";
import {
  NavLink,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import classNames from "classnames";

import styles from "./wrapper-nav.module.scss";

interface Props {
  children: ReactNode;
}

export const WrapperNav = ({ children }: Props) => {
  const getQuery = useLocation();

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
          Таски
        </NavLink>
        <NavLink
          className={classNames(
            styles.button,
            getQuery.pathname === "/profile" && styles.buttonActive
          )}
          to={"/profile"}
        >
          Профиль
        </NavLink>
        <NavLink className={classNames(styles.button)} to={"/login"}>
          Выход
        </NavLink>
      </div>
      <main>{children}</main>
    </nav>
  );
};
