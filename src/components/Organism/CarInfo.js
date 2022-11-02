import React from 'react';
import Molecule from '../Molecule';
import atoms from '../atoms';

export default function CarInfo({ carInfo }) {
  return (
    <atoms.CustomFlex
      justifyContent='space-between'
      alignItems='center'
      padding='20'
    >
      <Molecule.CarDiscription
        discription={carInfo.attribute}
        amount={carInfo.amount}
      />

      <atoms.CarImage
        src={carInfo?.attribute?.imageUrl}
        width='152'
        height='80'
      />
    </atoms.CustomFlex>
  );
}
