import React, { createContext, useContext, useState } from 'react';

const DetailInfoCOntext = createContext({
  detailInfo: {},
  saveDetailInfo: () => {},
});

export const useDetailInfo = () => useContext(DetailInfoCOntext);

export default function DetailInfoProvider({ children }) {
  const [detailInfo, setDetailInfo] = useState(null);

  const saveDetailInfo = (info) => {
    setDetailInfo(info);
  };

  return (
    <DetailInfoCOntext.Provider value={{ detailInfo, saveDetailInfo }}>
      {children}
    </DetailInfoCOntext.Provider>
  );
}
