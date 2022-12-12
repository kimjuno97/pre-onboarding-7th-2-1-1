import React, { createContext, useContext, useState } from 'react';
import { TypeCarInfo } from '../../types/index';

interface TypeDetailInfoContext {
  detailInfo: TypeCarInfo | null;
  saveDetailInfo: ((type: TypeCarInfo) => void) | null;
}

const DetailInfoCOntext = createContext<TypeDetailInfoContext>({
  detailInfo: null,
  saveDetailInfo: null,
});

export const useDetailInfo = () => useContext(DetailInfoCOntext);

export default function DetailInfoProvider({
  children,
}: {
  children: React.ReactNode;
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
