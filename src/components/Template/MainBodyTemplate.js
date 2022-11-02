import React from 'react';
import { useCarStorage } from '../../utils/context/CarStorageProvider';
import Atoms from '../Atoms';
import Organism from '../Organism';

export default function MainBodyTemplate() {
  const { carStorage, checkedLoading } = useCarStorage();

  if (checkedLoading) {
    return <Atoms.Loading>불러오는 중</Atoms.Loading>;
  }
  if (carStorage.length === 0) {
    return <Atoms.Loading>차량이 없습니다.</Atoms.Loading>;
  }
  return (
    <div>
      {carStorage?.map((carInfo) => (
        <Organism.CarInfo key={carInfo.id} carInfo={carInfo} />
      ))}
    </div>
  );
}
