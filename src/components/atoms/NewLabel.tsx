import styled from 'styled-components';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';

const NewLabel = styled.div`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  padding: 5px 15px;
  border-radius: 40px;
  background: ${COMMON_COLOR.BLUE};
  color: ${COMMON_COLOR.WHITE};
`;

export default NewLabel;
