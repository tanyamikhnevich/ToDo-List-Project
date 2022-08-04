import React from 'react';
import {Route, Routes } from "react-router-dom";

import {Profile, Login, Registration, Tasks, AddTask, NotFoundPage} from "components/pages";

import './app.module.scss';


function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Profile/>}/>
            <Route path={'/profile'} element={<Profile/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/registration'} element={<Registration/>}/>
            <Route path={'/tasks'} element={<Tasks/>}/>
            <Route path={'/add/task'} element={<AddTask/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
