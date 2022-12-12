import React from 'react';
import { useNavigate } from 'react-router-dom';
import Molecule from '../Molecule';
import Atoms from '../Atoms';
import { useDetailInfo } from '../../utils/context/DetailInfoStorgeProvider';
import newCheckedData from '../../utils/newCheckedDate';
import { TypeCarInfo } from '../../types/index';

export default function CarInfo({ carInfo }: { carInfo: TypeCarInfo }) {
  const navigate = useNavigate();
  const { saveDetailInfo } = useDetailInfo();

  const goToDetail = () => {
    navigate('./detail');
    saveDetailInfo && saveDetailInfo(carInfo);
  };
  const newLabel = newCheckedData(carInfo.createdAt);

  return (
    <Atoms.CustomFlex
      justifyContent='space-between'
      alignItems='center'
      padding={20}
      borderBottom='1px solid black'
      cursor='pointer'
      onClick={goToDetail}
    >
      <Molecule.CarDiscription
        discription={carInfo?.attribute}
        amount={carInfo?.amount}
      />
      <Atoms.RelativeDiv>
        {newLabel && <Atoms.NewLabel>신규</Atoms.NewLabel>}
        <Atoms.CarImage
          src={carInfo?.attribute?.imageUrl}
          width='152px'
          height='80px'
        />
      </Atoms.RelativeDiv>
    </Atoms.CustomFlex>
  );
}
