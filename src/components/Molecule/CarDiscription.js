import React from 'react';
import CAR_FUEL_TYPE from '../../CONSTANT_DATA/CAR_FUEL_TYPE';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';
import Atoms from '../Atoms';

export default function CarDiscription({ discription, amount }) {
  const { brand, name, segment, fuelType } = discription;
  const priceDiscription = `월 ${amount.toLocaleString()} 원 부터`;

  return (
    <Atoms.CustomFlex direction='column' gap='10'>
      <div>
        <Atoms.CustomFont fontSize='0.875rem' fontWeight='700' lineHeight='17'>
          {brand}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='0.875rem' fontWeight='700' lineHeight='17'>
          {name}
        </Atoms.CustomFont>
      </div>
      <div>
        <Atoms.CustomFont fontSize='0.75rem' fontWeight='500' lineHeight='15'>
          {`${CAR_TYPE_SEGMENT[segment]} / ${CAR_FUEL_TYPE[fuelType]}`}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='0.75rem' fontWeight='500' lineHeight='15'>
          {priceDiscription}
        </Atoms.CustomFont>
      </div>
    </Atoms.CustomFlex>
  );
}
