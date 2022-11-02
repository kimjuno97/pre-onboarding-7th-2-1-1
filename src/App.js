import React from 'react';
import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import CarStorageProvider from './utils/context/CarStorageProvider';
import DetailInfoProvider from './utils/context/DetailInfoStorgeProvider';

export default function App() {
  return (
    <CarStorageProvider>
      <DetailInfoProvider>
        <GlobalStyle />
        <Router />
      </DetailInfoProvider>
    </CarStorageProvider>
  );
}
