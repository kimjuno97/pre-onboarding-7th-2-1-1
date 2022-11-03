import React from 'react';
import Page1 from './Helmet/Helmet';

import Router from './Router';
import GlobalStyle from './styles/GlobalStyle';
import CarStorageProvider from './utils/context/CarStorageProvider';
import DetailInfoProvider from './utils/context/DetailInfoStorgeProvider';

export default function App() {
  return (
    <CarStorageProvider>
      <DetailInfoProvider>
        <GlobalStyle />
        <Page1 />
        <Router />
      </DetailInfoProvider>
    </CarStorageProvider>
  );
}
