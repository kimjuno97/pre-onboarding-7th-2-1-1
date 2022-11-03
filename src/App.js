import React from 'react';
import HeaderTilte from './Helmet/HeaderTilte';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import CarStorageProvider from './utils/context/CarStorageProvider';
import DetailInfoProvider from './utils/context/DetailInfoStorgeProvider';

export default function App() {
  return (
    <CarStorageProvider>
      <DetailInfoProvider>
        <GlobalStyle />
        <HeaderTilte />
        <Router />
      </DetailInfoProvider>
    </CarStorageProvider>
  );
}
