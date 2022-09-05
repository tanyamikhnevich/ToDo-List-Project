import React, {ReactNode} from "react";
import styles from "./styles-wrapper.module.scss"

interface Props {
  children: ReactNode;
}
export const StylesWrapper = ({ children }: Props) => {
  return <section className={styles.container}>
    {children}
  </section>;
};
