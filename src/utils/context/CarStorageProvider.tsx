import React, { createContext, useContext, useEffect, useState } from 'react';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';
import { TypeCarInfos } from '../../types';
import CarService from '../CarService';

interface TypeCarStorageContext {
  carStorage: TypeCarInfos | [];
  carType: string;
  selectedType: ((type: string) => void) | null;
  checkedLoading: boolean | null;
}

const CarStorageContext = createContext<TypeCarStorageContext | null>(null);

export const useCarStorage = () => useContext(CarStorageContext);

export default function CarStorageProvider({
  children,
}: {
  children: JSX.Element;
}) {
  const [carStorage, setCarStorage] = useState<TypeCarInfos>([]);
  const [carType, setCarType] = useState<string>(CAR_SIZE_TYPE.ALL);

  const checkedLoading = carStorage.length === 0;
  const filterCarStorage = carStorage.filter(
    (type) => carType === CAR_TYPE_SEGMENT[type.attribute.segment]
  );

  const selectedType = (type: string) => {
    setCarType(type);
  };

  useEffect(() => {
    CarService.getCarList().then(({ data }) => setCarStorage(data.payload));
  }, []);

  return (
    <CarStorageContext.Provider
      value={{
        carStorage:
          carType === CAR_SIZE_TYPE.ALL ? carStorage : filterCarStorage,
        carType,
        selectedType,
        checkedLoading,
      }}
    >
      {children}
    </CarStorageContext.Provider>
  );
}
