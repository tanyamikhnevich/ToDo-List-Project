import styles from "./tag.module.scss";
import { ReactComponent as Minus } from "../../assets/images/minus.svg";
import * as React from "react";
import classNames from "classnames";

interface Props {
  name: string;
  minus?: boolean;
  onClick?: () => void;
}

export const Tag = ({ name, minus = false, onClick }: Props) => {
  return (
    <button
      className={classNames( styles.tag, minus && styles.tagWithMinus)}
      onClick={onClick}
    >
      {minus && (
        <span className={styles.minus}>
          <Minus />
        </span>
      )}
      {name}
    </button>
  );
};
