import React from 'react';
import Molecule from '../Molecule';

export default function DetailInfo() {
  return (
    <>
      <Molecule.CarModel />
      <Molecule.CarfuelType />
      <Molecule.AvailableDay />
    </>
  );
}
