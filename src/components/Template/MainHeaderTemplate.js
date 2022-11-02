import React from 'react';
import Organism from '../Organism';
import atoms from '../atoms';

export default function MainHeaderTemplate() {
  return (
    <div>
      <atoms.HeaderTitle>전체차량</atoms.HeaderTitle>
      <Organism.Category />
    </div>
  );
}
