import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import Atoms from '../Atoms';
import Organism from '../Organism';
import Template from '../Template';
import DETAIL_LIST_HEADER from '../../CONSTANT_DATA/DETAIL_LIST_HEADER';

export default function Detail() {
  const navigate = useNavigate();
  const { detailInfo } = useDetailInfo();

  useEffect(() => {
    if (!detailInfo) {
      navigate('/');
    }
  }, [navigate]);

  return (
    <section>
      <Template.DetailHeaderTemplate />
      <Atoms.CarImage
        src={detailInfo?.attribute?.imageUrl}
        alt='car'
        width='100%'
        height='auto'
      />
      {detailInfo && (
        <Organism.DetailTitle
          brand={detailInfo.attribute.brand}
          name={detailInfo.attribute.name}
          amount={detailInfo.amount}
        />
      )}
      {detailInfo &&
        DETAIL_LIST_HEADER.map((header, idx) => (
          <Template.DetailList key={idx} header={header} />
        ))}
    </section>
  );
}
