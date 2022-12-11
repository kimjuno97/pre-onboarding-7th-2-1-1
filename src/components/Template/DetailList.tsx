import React from 'react';

import Atoms from '../Atoms';
import Organism from '../Organism';

interface TypeProps {
  [key: string]: string;
}

export default function DetailList({ header }: { header: TypeProps }) {
  const [type] = Object.keys(header);

  let showList;

  if (header[type] === '차량 정보') {
    showList = <Organism.DetailInfo />;
  } else if (header[type] === '보험') {
    showList = <Organism.DetailInsurance />;
  } else if (header[type] === '추가상품') {
    showList = <Organism.DetailAdditionalProductis />;
  }

  return (
    <div>
      <Atoms.DetailListHeader>{header[type]}</Atoms.DetailListHeader>
      {showList}
    </div>
  );
}
