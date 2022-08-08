import styles from "./wrapper.module.scss";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Wrapper = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <main>{children}</main>
    </div>
  );
};
