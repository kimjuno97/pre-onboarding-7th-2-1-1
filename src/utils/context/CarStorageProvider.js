import React, { createContext, useContext, useEffect, useState } from 'react';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';
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

  const selectedType = (type) => {
    setCarType(type);
  };

  useEffect(() => {
    CarService.getCarList().then(({ data }) => setCarStorage(data.payload));
  }, []);

  return (
    <CarStorageContext.Provider value={{ carStorage, carType, selectedType }}>
      {children}
    </CarStorageContext.Provider>
  );
}
