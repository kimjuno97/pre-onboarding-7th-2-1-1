import React from 'react';
import { useNavigate } from 'react-router-dom';
import Atoms from '../Atoms';
import backArrow from '../../image/backArrow.svg';

export default function DetailHeaderTemplate() {
  const navigate = useNavigate();
  return (
    <Atoms.CustomFlex
      justifyContent='center'
      alignItems='center'
      borderBottom='1px solid #000000'
    >
      <Atoms.AbsoluteIcon
        src={backArrow}
        alt='뒤로가기'
        left={10}
        onClick={() => navigate('/')}
      />
      <Atoms.HeaderTitle>차량상세</Atoms.HeaderTitle>
    </Atoms.CustomFlex>
  );
}
