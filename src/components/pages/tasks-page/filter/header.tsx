import styles from "./filter.module.scss"
import {Dispatch} from "react";

interface Props {
    setValue: Dispatch<string>
}

export const Header = ({setValue} :Props) => {
    return (
        <div className={styles.section}>
            <input placeholder={'Serach'} className={styles.input}
            onChange={(event) => setValue(event.target.value)}/>
            <button className={styles.buttonFilter}>Open Filter</button>
            <button className={styles.buttonSort}>Open Sort</button>
        </div>
    )
}