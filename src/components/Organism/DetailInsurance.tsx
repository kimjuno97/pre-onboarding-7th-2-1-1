import React from 'react';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import Molecule from '../Molecule';

export default function DetailInsurance() {
  const { detailInfo } = useDetailInfo();

  return (
    <div>
      {detailInfo?.insurance.map(({ name, description }, idx) => (
        <Molecule.Insurance key={idx} name={name} description={description} />
      ))}
    </div>
  );
}
