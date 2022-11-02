import React, { useState } from 'react';
import atoms from '../atoms';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';
import CAR_SIZE_TYPE from '../../CONSTANT_DATA/CAR_SIZE_TYPE';

export default function Category() {
  const [selected, setSelected] = useState(0);

  return (
    <atoms.TypeContainer>
      {Object.keys(CAR_SIZE_TYPE).map((type, idx) => {
        const property =
          selected === idx
            ? { color: COMMON_COLOR.WHITE, backgroundColor: COMMON_COLOR.BLACK }
            : { color: COMMON_COLOR.BLACK, backgroundColor: COMMON_COLOR.GRAY };
        return (
          <atoms.TypeButton
            key={type}
            {...property}
            onClick={() => setSelected(idx)}
          >
            {CAR_SIZE_TYPE[type]}
          </atoms.TypeButton>
        );
      })}
    </atoms.TypeContainer>
  );
}
