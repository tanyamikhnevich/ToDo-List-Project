import styles from "./name-task.module.scss"
import points from "./../../../assets/images/three-points.svg"

interface StorePropsI {
    name: string;
    tag:string
}

export const NameTask = (props:StorePropsI) => {
    return (
      <div className={styles.container}>
        <div className={styles.checkboxContainer}>
          <input className={styles.checkbox} type={"radio"} />
        </div>
          <div className={styles.taskNameContainer}>
            <h2 className={styles.name}>{props.name}</h2>
            <div className={styles.buttonContainer}>
              <button className={styles.buttonTag}>{props.tag}</button>
              <button className={styles.buttonTag}>{props.tag}</button>
              <button className={styles.buttonTag}>{props.tag}</button>
            </div>
          </div>
        <div className={styles.next}>
          <img src={points} alt={"..."} />
        </div>
      </div>
    );
}