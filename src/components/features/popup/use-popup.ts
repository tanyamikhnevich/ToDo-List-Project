import {useContext} from "react";
import {PopupContext} from "./popup-context";


export const usePopup = () => useContext(PopupContext);