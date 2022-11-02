import React from 'react';
import Molecule from '../Molecule';
import Atoms from '../Atoms';

export default function DetailList({ header }) {
  const [type] = Object.keys(header);
  const showList =
    header[type] === '차량 정보' ? (
      <>
        <Molecule.CarModel />
        <Molecule.CarfuelType />
        <Molecule.AvailableDay />
      </>
    ) : (
      ''
    );

  return (
    <div>
      <Atoms.DetailListHeader>{header[type]}</Atoms.DetailListHeader>
      {showList}
    </div>
  );
}
