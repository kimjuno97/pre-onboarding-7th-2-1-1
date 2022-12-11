import React, { createContext, useContext, useState } from 'react';
import { TypeCarInfo } from '../../types/index';

interface TypeDetailInfoCOntext {
  detailInfo: TypeCarInfo | null;
  saveDetailInfo: (type: TypeCarInfo) => void;
}

const DetailInfoCOntext = createContext<TypeDetailInfoCOntext | null>(null);

export const useDetailInfo = () => useContext(DetailInfoCOntext);

export default function DetailInfoProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [detailInfo, setDetailInfo] = useState<TypeCarInfo | null>(null);

  const saveDetailInfo = (info: TypeCarInfo) => {
    setDetailInfo(info);
  };

  return (
    <DetailInfoCOntext.Provider value={{ detailInfo, saveDetailInfo }}>
      {children}
    </DetailInfoCOntext.Provider>
  );
}
