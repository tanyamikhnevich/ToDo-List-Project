import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import styles from "./form-add-task.module.scss";

interface Values {
  taskName: string;
  description: string;
  tagName: string;
}

export const AddTaskForm = () => {
  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          taskName: "",
          description: "",
          tagName: "",
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={styles.form}>
          <label htmlFor="taskName" />
          <Field
            className={styles.taskName}
            id="taskName"
            name="taskName"
            placeholder="Name of task"
          />

          <label htmlFor="description" />
          <Field
            className={styles.description}
            id="description"
            name="description"
            placeholder="Description"
          />
          <div className={styles.tagContainer}>
            <label htmlFor="tagName" />
            <Field
              className={styles.tagName}
              id="tagName"
              name="tagName"
              placeholder="Name of tag"
            />

            <button className={styles.buttonAdd} type="submit">Add</button>
          </div>
          <div className={styles.saveContainer}>
          <button className={styles.buttonCancel} type="submit">Cancel</button>
          <button className={styles.buttonSave} type="submit">Save</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
