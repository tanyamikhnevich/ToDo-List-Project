import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useState } from "react";
import * as Yup from "yup";

import { useAppDispatch, useAppSelector } from "../hooks";
import {
  addTodo,
  addTag as addTagSlice,
  removeTag,
} from "../../../../store/toDoSlice";
import { usePopup } from "components/features/popup";
import { ReactComponent as Minus } from "./../../../../assets/images/minus.svg";

import styles from "./form-add-task.module.scss";

// TODO исправить везде импорты

interface Values {
  name: string;
  description: string;
}

// TODO add disabled state for addButton

const DisplayingErrorMessages = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(20, "Too Long!")
    .required("Required"),
  description: Yup.string().max(50, "Too Long!"),
});

export const AddTaskForm = ({ name, description }: Values) => {
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
    setSubmitting(false);
    closePopup();
  };

  const addTag = () => {
    dispatch(addTagSlice({ tag: tagName }));
    setTagName("");
  };

  return (
    <div className={styles.container}>
      <Formik
        initialValues={{
          name: name || "",
          description: description || "",
        }}
        onSubmit={addTask}
        validationSchema={DisplayingErrorMessages}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <div>
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
              <div className={styles.tagContainer}>
                <input
                  className={styles.tagName}
                  placeholder="Name of tag"
                  onChange={(e) => {
                    setTagName(e.currentTarget.value);
                  }}
                  value={tagName}
                />
                <button
                  className={styles.buttonAdd}
                  onClick={addTag}
                  type="button"
                >
                  Add
                </button>
              </div>
              <div className={styles.buttonTagContainer}>
                {tags.map((tag: string) => (
                  <button
                    onClick={() => dispatch(removeTag(tag))}
                    key={tag}
                    className={styles.buttonTag}
                    type="button"
                  >
                    <span className={styles.minus}>
                      <Minus />
                    </span>
                    {tag}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.saveContainer}>
              <button className={styles.buttonCancel} type="button">
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
