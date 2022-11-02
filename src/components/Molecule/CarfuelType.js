import React from 'react';
import Atoms from '../Atoms';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import CAR_FUEL_TYPE from '../../CONSTANT_DATA/CAR_FUEL_TYPE';

export default function CarfuelType() {
  const { detailInfo } = useDetailInfo();
  return (
    <Atoms.CustomFlex justifyContent='space-between' padding='10'>
      <Atoms.CustomFont fontSize='17' lineHeight='21' fontWeight='700'>
        연료
      </Atoms.CustomFont>
      <Atoms.CustomFont margin='0 10px 0 0 '>
        {CAR_FUEL_TYPE[detailInfo.attribute.fuelType]}
      </Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
