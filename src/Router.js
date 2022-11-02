import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' />
        <Route path='/detail' />
      </Routes>
    </BrowserRouter>
  );
}
