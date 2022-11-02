import React, { createContext, useContext, useEffect, useState } from 'react';
import CarService from '../CarService';

const CarStorageContext = createContext({
  carStorage: []
});

export const useCarStorage = () => useContext(CarStorageContext);

export default function CarStorageProvider({ children }) {
  const [carStorage, setCarStorage] = useState([]);

  useEffect(() => {
    CarService.getCarList().then(({ data }) => setCarStorage(data.payload));
  }, []);

  return (
    <CarStorageContext.Provider value={carStorage}>
      {children}
    </CarStorageContext.Provider>
  );
}
