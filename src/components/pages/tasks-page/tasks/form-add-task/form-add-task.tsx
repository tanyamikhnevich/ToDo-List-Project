import * as React from "react";
import { useState } from "react";
import { Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addTodo,
  changeTodo,
  clearInterimTag,
} from "components/store/toDoSlice";
import { usePopup } from "components/features/popup";
import { FormAddTag } from "../form-add-tag/form-add-tag";

import styles from "./form-add-task.module.scss";


interface Values {
  name: string;
  description: string;
}

type Props = Values & {
  type: "edit" | "create";
  id?: string;
};

const DisplayingErrorMessages = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string().max(50, "Too Long!"),
});

export const AddTaskForm = ({ name, description, type, id }: Props) => {
  const { closePopup } = usePopup();
  const [tagName, setTagName] = useState("");

  const tags = useAppSelector((state) => state.todos.interimTodo.tags);
  const dispatch = useAppDispatch();

  const addTask = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(
      addTodo({
        name: values.name,
        description: values.description,
        tags,
      })
    );
    dispatch(clearInterimTag());
    setSubmitting(false);
    closePopup();
  };

  const changeTask = (
    values: Values,
    { setSubmitting }: FormikHelpers<Values>
  ) => {
    dispatch(
      changeTodo({
        id,
        name: values.name,
        description: values.description,
        tags,
      })
    );
    dispatch(clearInterimTag());
    setSubmitting(false);
    closePopup();
  };

  const initialValues = {
    name: name || "",
    description: description || "",
  };


  return (
    <div className={styles.background}>
      <Formik
        initialValues={initialValues}
        onSubmit={type === "create" ? addTask : changeTask}
        validationSchema={DisplayingErrorMessages}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div className = {styles.container}>
              <Field
                className={styles.taskName}
                id="name"
                name="name"
                placeholder="Name of task"
              />
              {touched.name && errors.name && <div>{errors.name}</div>}
              <Field
                className={styles.description}
                id="description"
                name="description"
                placeholder="Description"
              />
              {touched.description && errors.description && (
                <div>{errors.description}</div>
              )}
              <FormAddTag
                setTagName={setTagName}
                tagName={tagName}
                tags={tags}
              />
            </div>
            <div className={styles.saveContainer}>
              <button
                className={styles.buttonCancel}
                onClick={() => {
                  closePopup();
                  dispatch(clearInterimTag());
                }}
                type="button"
              >
                Cancel
              </button>
              <button className={styles.buttonSave} type="submit">
                Save
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
