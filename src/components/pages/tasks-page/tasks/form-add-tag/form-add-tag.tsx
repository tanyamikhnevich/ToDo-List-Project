import styles from "./form-add-tag.module.scss";
import { Tag } from "components/shared/tag/tag";
import {addTag as addTagSlice, removeTag} from "components/store/toDoSlice";
import * as React from "react";
import { useAppDispatch } from "../hooks";
import {Dispatch, useEffect, useRef} from "react";

interface Props {
  setTagName: Dispatch<string>;
  tagName: string;
  tags: string[];
}

export const FormAddTag = ({ setTagName, tagName, tags }: Props) => {
  const dispatch = useAppDispatch();
  const addTag = () => {
    dispatch(addTagSlice({ tag: tagName }));
    setTagName("");
  };

  //useRef + addEventListener


  // const searchInput = useRef(null)
  // const enterFunction = (event) => {
  //   if (event.code === "Enter" || event.code === "NumpadEnter") {
  //     event.preventDefault();}

    // useEffect(() => {
    //   if (!searchInput || !searchButton) return;
    //   searchInput.current.addEventListener("keydown",enterFunction(event));
    // }, []);


  useEffect(() => {
    const searchInput = document.getElementById("inputYo");
    const searchButton = document.getElementById("buttonTag");
    if (!searchInput || !searchButton) return;
    searchInput.addEventListener("keydown", function (event) {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        searchButton.click();
      }
    });
  }, []);


  return (
    <div className={styles.container}>
      <div className={styles.tags}>
        <input
          id={"inputYo"}
          // ref={searchInput}
          className={styles.tag}
          placeholder="Name of tag"
          onChange={(e) => {
            setTagName(e.currentTarget.value);
          }}
          value={tagName}
        />
        <button
          id={"buttonTag"}
          // ref={"buttonTag"}
          className={styles.add}
          onClick={addTag}
          type="button"
          disabled={tagName === ""}
        >
          Add
        </button>
      </div>
      <div>
        {tags.map((tag: string) => (
          <Tag
            name={tag}
            minus={true}
            onClick={() => dispatch(removeTag(tag))}
            key={tag}
          />
        ))}
      </div>
    </div>
  );
};
