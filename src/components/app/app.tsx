import React from "react";
import { Route, Routes } from "react-router-dom";

import {
  Profile,
  Login,
  Registration,
  Tasks,
  NotFoundPage,
} from "components/pages";

import "./styles/index.scss";
import styles from "./app.module.scss";

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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
