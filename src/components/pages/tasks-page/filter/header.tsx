import styles from "./filter.module.scss"

export const Header = () => {
    return (
        <div className={styles.section}>
            <input placeholder={'Serach'} className={styles.input}/>
            <button className={styles.buttonFilter}>Open Filter</button>
            <button className={styles.buttonSort}>Open Sort</button>
        </div>
    )
}