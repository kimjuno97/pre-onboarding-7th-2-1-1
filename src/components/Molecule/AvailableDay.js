import React from 'react';
import Atoms from '../Atoms';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import convertDateFormat from '../../utils/getDate';

export default function AvailableDay() {
  const { detailInfo } = useDetailInfo();
  const formattedDate = convertDateFormat(detailInfo.startDate);
  const availableDate = `${formattedDate[0]}월 ${formattedDate[1]}일 (${formattedDate[2]}) 부터`;

  return (
    <Atoms.CustomFlex justifyContent='space-between' padding='10'>
      <Atoms.CustomFont fontSize='17' lineHeight='21' fontWeight='700'>
        이용 가능일
      </Atoms.CustomFont>
      <Atoms.CustomFont margin='0 10px 0 0 '>{availableDate}</Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
