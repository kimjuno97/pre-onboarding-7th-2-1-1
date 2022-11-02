import React from 'react';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import Atoms from '../Atoms';
import Organism from '../Organism';
import Template from '../Template';
import DETAIL_LIST_HEADER from '../../CONSTANT_DATA/DETAIL_LIST_HEADER';

export default function Detail() {
  const { detailInfo } = useDetailInfo();

  return (
    <section>
      <Template.DetailHeaderTemplate />
      <Atoms.CarImage
        src={detailInfo.attribute.imageUrl}
        alt='car'
        width='100%'
        height='auto'
      />
      <Organism.DetailTitle
        brand={detailInfo.attribute.brand}
        name={detailInfo.attribute.name}
        amount={detailInfo.amount}
      />
      {DETAIL_LIST_HEADER.map((header, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <Template.DetailList key={idx} header={header} />
      ))}
    </section>
  );
}
