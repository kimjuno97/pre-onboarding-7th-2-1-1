import React, { createContext, useContext, useEffect, useState } from 'react';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';
import CarService from '../CarService';

const CarStorageContext = createContext({
  carStorage: [],
  carType: '',
  selectedType: () => {}
});

export const useCarStorage = () => useContext(CarStorageContext);

export default function CarStorageProvider({ children }) {
  const [carStorage, setCarStorage] = useState([]);
  const [carType, setCarType] = useState(CAR_SIZE_TYPE.ALL);

  const filterCarStorage = carStorage.filter(
    (type) => carType === CAR_TYPE_SEGMENT[type.attribute.segment]
  );

  const selectedType = (type) => {
    setCarType(type);
  };

  useEffect(() => {
    CarService.getCarList().then(({ data }) => setCarStorage(data.payload));
  }, []);

  return (
    <CarStorageContext.Provider
      value={{
        carStorage: carType === '전체' ? carStorage : filterCarStorage,
        carType,
        selectedType
      }}
    >
      {children}
    </CarStorageContext.Provider>
  );
}
