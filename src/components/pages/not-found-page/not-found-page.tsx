import {NavLink} from "react-router-dom";
import styles from "./not-found-page.module.scss"

export const NotFoundPage = () => {
    return (
        <div className={styles.background}>Page not found. Go
            <NavLink className={styles.a} to={'/'}> home</NavLink>
        </div>
    )
}