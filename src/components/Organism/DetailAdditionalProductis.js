import React from 'react';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import Molecule from '../Molecule';

export default function DetailAdditionalProductis() {
  const { detailInfo } = useDetailInfo();
  const { additionalProducts } = detailInfo;

  return additionalProducts?.map(({ name, amount }) => (
    <Molecule.AdditionalProducts key={amount} name={name} amount={amount} />
  ));
}
