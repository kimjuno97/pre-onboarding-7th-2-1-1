import styled from 'styled-components';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';

const DetailListHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 20px;
  background-color: ${COMMON_COLOR.BLUE};
  color: ${COMMON_COLOR.WHITE};
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
`;

export default DetailListHeader;
