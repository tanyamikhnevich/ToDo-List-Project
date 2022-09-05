import { PopupContext } from "./popup-context";
import { ReactNode, useMemo, useState } from "react";
import styles from "./popup.module.scss";
import classNames from "classnames";
import { ReactComponent as CloseButton } from "./../../assets/images/crossButton.svg";
import { useAppDispatch } from "../../pages/tasks-page/tasks/hooks";
import { clearInterimTag } from "../../store/toDoSlice";

interface Props {
  children: ReactNode;
}

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

  return (
    <PopupContext.Provider value={contextValue}>
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
            {children}
          </div>
        </div>
    </PopupContext.Provider>
  );
};
