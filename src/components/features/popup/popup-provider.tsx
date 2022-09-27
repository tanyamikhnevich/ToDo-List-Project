import { PopupContext } from "./popup-context";
import React, { ReactNode, useEffect, useMemo, useState } from "react";
import styles from "./popup.module.scss";
import classNames from "classnames";
import { ReactComponent as CloseButton } from "./../../assets/images/crossButton.svg";
import { useAppDispatch } from "../../pages/tasks-page/tasks/hooks";
import { clearInterimTag } from "../../store/toDoSlice";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const modalRootElement = document.querySelector("#modal");

export const PopupProvider = ({ children }: Props) => {
  const [component, setComponent] = useState<JSX.Element | boolean>(false);
  const dispatch = useAppDispatch();

  const openPopup = (component: JSX.Element) => {
    setComponent(component);
  };

  const closePopup = () => {
    setComponent(false);
    dispatch(clearInterimTag());
  };

  const contextValue = useMemo(() => ({ openPopup, closePopup }), [component]);

  const [element] = useState(() => document.createElement("div"));

  useEffect(() => {
    if (!modalRootElement) return;
    modalRootElement.appendChild(element);
    return () => {
      modalRootElement.removeChild(element);
    };
  }, []);

  return (
    <PopupContext.Provider value={contextValue}>
      {component &&
        createPortal(
          <div className={styles.popupC}>
            <div className={classNames(component && styles.container)}>
              {component && (
                <div className={styles.popup}>
                  <button className={styles.close} onClick={closePopup}>
                    <CloseButton />
                  </button>
                  {component}
                </div>
              )}
            </div>
          </div>,
          element
        )}
      {children}
    </PopupContext.Provider>
  );
};
