import React from 'react';
import CAR_FUEL_TYPE from '../../CONSTANT_DATA/CAR_FUEL_TYPE';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';
import Atoms from '../Atoms';

interface TypeDiscription {
  brand: string;
  name: string;
  segment: string;
  fuelType: string;
  imageUrl: string;
}

export default function CarDiscription({
  discription,
  amount,
}: {
  discription: TypeDiscription;
  amount: number;
}) {
  const { brand, name, segment, fuelType } = discription;
  const priceDiscription = `μ ${amount.toLocaleString()} μ λΆν°`;

  return (
    <Atoms.CustomFlex direction='column' gap={10}>
      <div>
        <Atoms.CustomFont fontSize='0.875rem' fontWeight='700' lineHeight={17}>
          {brand}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='0.875rem' fontWeight='700' lineHeight={17}>
          {name}
        </Atoms.CustomFont>
      </div>
      <div>
        <Atoms.CustomFont fontSize='0.75rem' fontWeight='500' lineHeight={15}>
          {`${CAR_TYPE_SEGMENT[segment]} / ${CAR_FUEL_TYPE[fuelType]}`}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='0.75rem' fontWeight='500' lineHeight={15}>
          {priceDiscription}
        </Atoms.CustomFont>
      </div>
    </Atoms.CustomFlex>
  );
}
