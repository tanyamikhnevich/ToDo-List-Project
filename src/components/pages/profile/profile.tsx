import styles from "./profile.module.scss";
import {NavLink} from "react-router-dom";
import classNames from "classnames";

export const Profile = () => {
    return (
        <section className={styles.container}>
            <div className={styles.buttonContainer}>
                <NavLink className={classNames(styles.button)} to={'/tasks'} >Таски</NavLink>
                <NavLink className={classNames(styles.button, styles.buttonActive)} to={'/profile'} >Профиль</NavLink>
                <NavLink className={classNames(styles.button)} to={'/login'} >Выход</NavLink>
            </div>
            <div>
                Profile
            </div>
        </section>
    )
}