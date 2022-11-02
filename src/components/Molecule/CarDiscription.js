import React from 'react';
import CAR_FUEL_TYPE from '../../CONSTANT_DATA/CAR_FUEL_TYPE';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';
import atoms from '../atoms';

export default function CarDiscription({ discription, amount }) {
  const { brand, name, segment, fuelType } = discription;
  const priceDiscription = `월 ${amount.toLocaleString()} 원 부터`;

  return (
    <atoms.CustomFlex direction='column' gap='10'>
      <div>
        <atoms.CustomFont fontSize='14px' fontWeight='700' lineHeight='17'>
          {brand}
        </atoms.CustomFont>
        <atoms.CustomFont fontSize='14px' fontWeight='700' lineHeight='17'>
          {name}
        </atoms.CustomFont>
      </div>
      <div>
        <atoms.CustomFont fontSize='12px' fontWeight='500' lineHeight='15'>
          {`${CAR_TYPE_SEGMENT[segment]} / ${CAR_FUEL_TYPE[fuelType]}`}
        </atoms.CustomFont>
        <atoms.CustomFont fontSize='12px' fontWeight='500' lineHeight='15'>
          {priceDiscription}
        </atoms.CustomFont>
      </div>
    </atoms.CustomFlex>
  );
}
