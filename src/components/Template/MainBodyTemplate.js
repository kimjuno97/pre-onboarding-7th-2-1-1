import React from 'react';
import { useCarStorage } from '../../utils/context/CarStorageProvider';
import Organism from '../Organism';

export default function MainBodyTemplate() {
  const { carStorage, carType } = useCarStorage();
  console.log(carType);
  // 수정필요
  return (
    <div>
      {carStorage?.map((carInfo) => (
        <Organism.CarInfo key={carInfo.id} carInfo={carInfo} />
      ))}
    </div>
  );
}
