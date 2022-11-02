import React from 'react';
import { useNavigate } from 'react-router-dom';
import Molecule from '../Molecule';
import Atoms from '../Atoms';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';

export default function CarInfo({ carInfo }) {
  const navigate = useNavigate();
  const { saveDetailInfo } = useDetailInfo();

  const goToDetail = () => {
    navigate('./detail');
    saveDetailInfo(carInfo);
  };

  return (
    <Atoms.CustomFlex
      justifyContent='space-between'
      alignItems='center'
      padding='20'
      borderBottom='1px solid black'
      cursor='pointer'
      onClick={goToDetail}
    >
      <Molecule.CarDiscription
        discription={carInfo.attribute}
        amount={carInfo.amount}
      />
      <Atoms.CarImage
        src={carInfo?.attribute?.imageUrl}
        width='152px'
        height='80px'
      />
    </Atoms.CustomFlex>
  );
}
