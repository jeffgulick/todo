import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MyDay from './Pages/MyDay';
import Important from './Pages/Important';
import Tasks from './Pages/Tasks';

const Router = () => {
  return (
    <div className='TaskContain'>
      <Routes>
        <Route path='/' element={<Tasks />} />
        <Route path='important' element={<Important />} />
        <Route path='myDay' element={<MyDay />} />
      </Routes>
    </div>
  );
};

export default Router;
