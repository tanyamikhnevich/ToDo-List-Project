import React, {
  Dispatch,
  ReactNode,
  ReactPortal,
  useEffect,
  useMemo, useState,
} from "react";
import { createPortal } from "react-dom";
import styles from "./portal.module.scss";
import { ReactComponent as CloseButton } from "../../assets/images/crossButton.svg";

const modalRootElement = document.querySelector("#modal");

type Props = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
};

export const Modal = ({ children, open, onClose }: Props) => {
  const [element] = useState(() => document.createElement("div"));

  useEffect(() => {
      if (!modalRootElement) return;
      modalRootElement.appendChild(element);
      return () => {
        modalRootElement.removeChild(element);
      };
  }, []);

  if (open) {
    return createPortal(
      <div className={styles.modalBackground}>
        <div className={styles.modalCard}>{children}</div>
        <button className={styles.close} onClick={onClose}>
          <CloseButton />
        </button>
      </div>,
      element
    );
  }
  return null;
};
