import React from 'react';
import Atoms from '../Atoms';

export default function DetailTitle({ brand, name, amount }) {
  const amountPrice = `월 ${amount.toLocaleString()} 원`;
  return (
    <Atoms.CustomFlex direction='column' padding='20'>
      <div>
        <Atoms.CustomFont fontSize='20' fontWeight='700' lineHeight='24'>
          {brand}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='24' fontWeight='700' lineHeight='29'>
          {name}
        </Atoms.CustomFont>
      </div>
      <Atoms.CustomFont
        fontSize='17px'
        fontWeight='400'
        lineHeight='21'
        textAlign='end'
      >
        {amountPrice}
      </Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
