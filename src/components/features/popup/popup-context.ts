import { createContext } from "react";

interface PopupContextI {
  openPopup: (component: JSX.Element) => void;
  closePopup: () => void;
}

export const PopupContext = createContext<PopupContextI>({
  openPopup: () => void null,
  closePopup: () => void null,
});