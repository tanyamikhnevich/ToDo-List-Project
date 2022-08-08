import styles from "./filter.module.scss"

export const Filter = () => {
    return (
        <div className={styles.section}>
            <input placeholder={'Serach'} className={styles.input}/>
            <button className={styles.buttonSort}>Sort</button>
            <button className={styles.buttonFilter}>Filter</button>
        </div>
    )
}