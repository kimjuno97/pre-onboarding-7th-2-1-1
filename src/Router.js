import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './components/pages/Detail';
import Main from './components/pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
