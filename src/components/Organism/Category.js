import React from 'react';
import atoms from '../atoms';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';
import { useCarStorage } from '../../utils/context/CarStorageProvider';

export default function Category() {
  const { carType, selectedType } = useCarStorage();
  return (
    <atoms.TypeContainer>
      {Object.keys(CAR_SIZE_TYPE).map((type) => {
        const property =
          carType === CAR_SIZE_TYPE[type]
            ? { color: COMMON_COLOR.WHITE, backgroundColor: COMMON_COLOR.BLACK }
            : { color: COMMON_COLOR.BLACK, backgroundColor: COMMON_COLOR.GRAY };
        return (
          <atoms.TypeButton
            key={type}
            {...property}
            onClick={() => selectedType(CAR_SIZE_TYPE[type])}
          >
            {CAR_SIZE_TYPE[type]}
          </atoms.TypeButton>
        );
      })}
    </atoms.TypeContainer>
  );
}
