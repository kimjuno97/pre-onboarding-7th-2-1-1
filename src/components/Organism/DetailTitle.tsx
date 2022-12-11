import React from 'react';
import Atoms from '../Atoms';

export default function DetailTitle({ brand, name, amount }) {
  const amountPrice = amount && `월 ${amount.toLocaleString()} 원`;

  return (
    <Atoms.CustomFlex direction='column' padding={20}>
      <div>
        <Atoms.CustomFont fontSize='1.25rem' fontWeight='700' lineHeight={24}>
          {brand}
        </Atoms.CustomFont>
        <Atoms.CustomFont fontSize='1.5rem' fontWeight='700' lineHeight={29}>
          {name}
        </Atoms.CustomFont>
      </div>
      <Atoms.CustomFont
        fontSize='1.1rem'
        fontWeight='400'
        lineHeight={21}
        textAlign='end'
      >
        {amountPrice}
      </Atoms.CustomFont>
    </Atoms.CustomFlex>
  );
}
