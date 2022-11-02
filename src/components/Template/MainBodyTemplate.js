import React from 'react';
import { useCarStorage } from '../../utils/context/CarStorageProvider';
import Organism from '../Organism';

export default function MainBodyTemplate() {
  const { carStorage } = useCarStorage();

  return (
    <div>
      {carStorage?.map((carInfo) => (
        <Organism.CarInfo key={carInfo.id} carInfo={carInfo} />
      ))}
    </div>
  );
}
