import React from 'react';
import Atoms from '../Atoms';

export default function AdditionalProducts({ name, amount }) {
  const amountPrice = `월 ${amount.toLocaleString()} 원`;
  return (
    <Atoms.CustomFlex justifyContent='space-between' padding='10'>
      <Atoms.CustomFont fontSize='17' lineHeight='21' fontWeight='700'>
        {name}
      </Atoms.CustomFont>
      <Atoms.CustomFont margin='0 10px 0 0 '>{amountPrice}</Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
