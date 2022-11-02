import React from 'react';
import Atoms from '../Atoms';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import CAR_TYPE_SEGMENT from '../../CONSTANT_DATA/CAR_TYPE_SEGMENT';

export default function CarModel() {
  const { detailInfo } = useDetailInfo();

  return (
    <Atoms.CustomFlex justifyContent='space-between' padding='10'>
      <Atoms.CustomFont fontSize='17' lineHeight='21' fontWeight='700'>
        차종
      </Atoms.CustomFont>
      <Atoms.CustomFont margin='0 10px 0 0 '>
        {CAR_TYPE_SEGMENT[detailInfo.attribute.segment]}
      </Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
