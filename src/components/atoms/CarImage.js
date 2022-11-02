import styled from 'styled-components';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';

const CarImage = styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${COMMON_COLOR.GRAY};
`;

export default CarImage;
