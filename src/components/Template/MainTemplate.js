import React from 'react';
import Organism from '../Organism';
import atoms from '../atoms';
import { useCarStorage } from '../../utils/context/CarStorageProvider';

export default function MainTemplate() {
  const carLsit = useCarStorage();
  console.log('이거 맞음?', carLsit);
  return (
    <div>
      <atoms.HeaderTitle>전체차량</atoms.HeaderTitle>
      <Organism.Category />
    </div>
  );
}
