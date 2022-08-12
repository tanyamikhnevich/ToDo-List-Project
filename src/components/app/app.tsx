import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Profile,
  Login,
  Registration,
  Tasks,
  AddTask,
  NotFoundPage,
} from "components/pages";

// Все стили в styles на весь проект
import "./styles/index.scss";

import styles from "./app.module.scss";
// import { Wrapper } from "../widgets/default-navbar/wrapper-nav";

function App() {
  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/add/task" element={<AddTask />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
