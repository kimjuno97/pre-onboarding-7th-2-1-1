import React from 'react';
import Atoms from '../Atoms';

export default function AdditionalProducts({
  name,
  amount,
}: {
  name: string;
  amount: number;
}) {
  const amountPrice = `월 ${amount.toLocaleString()} 원`;
  return (
    <Atoms.CustomFlex justifyContent='space-between' padding={10}>
      <Atoms.CustomFont fontSize='1.1rem' lineHeight={21} fontWeight='700'>
        {name}
      </Atoms.CustomFont>
      <Atoms.CustomFont margin='0 10px 0 0 '>{amountPrice}</Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
