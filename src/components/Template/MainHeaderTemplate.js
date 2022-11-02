import React from 'react';
import Organism from '../Organism';
import Atoms from '../Atoms';

export default function MainHeaderTemplate() {
  return (
    <header>
      <Atoms.HeaderTitle>전체차량</Atoms.HeaderTitle>
      <Organism.Category />
    </header>
  );
}
