import styles from "./open-task.module.scss"

export const OpenTask = () => {
  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.name}>Name</h2>
        <p className={styles.description}>Description</p>
      </div>
      <div className={styles.buttonTagContainer}>
        <button className={styles.buttonTag}>tag</button>
        <button className={styles.buttonTag}>tag</button>
      </div>

      <div className={styles.buttonEditContainer}>
        <button className={styles.buttonEdit}>Edit Task</button>
        <button className={styles.buttonEdit}>Delete Task</button>
      </div>
    </div>
  );
};