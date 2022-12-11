import React from 'react';
import Atoms from '../Atoms';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';
import { useCarStorage } from '../../utils/context/CarStorageProvider';

export default function Category() {
  const { carType, selectedType } = useCarStorage();

  return (
    <Atoms.TypeContainer>
      {Object.keys(CAR_SIZE_TYPE).map((type) => {
        const property =
          carType === CAR_SIZE_TYPE[type]
            ? { color: COMMON_COLOR.WHITE, backgroundColor: COMMON_COLOR.BLACK }
            : { color: COMMON_COLOR.BLACK, backgroundColor: COMMON_COLOR.GRAY };
        return (
          <Atoms.TypeButton
            key={type}
            {...property}
            onClick={() => selectedType(CAR_SIZE_TYPE[type])}
          >
            {CAR_SIZE_TYPE[type]}
          </Atoms.TypeButton>
        );
      })}
    </Atoms.TypeContainer>
  );
}
