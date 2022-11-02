import React from 'react';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import CarStorageProvider from './utils/context/CarStorageProvider';

export default function App() {
  return (
    <CarStorageProvider>
      <GlobalStyle />
      <Router />
    </CarStorageProvider>
  );
}
