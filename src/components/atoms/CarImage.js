import styled from 'styled-components';
import COMMON_COLOR from '../../CONSTANT_DATA/COMMON_COLOR';

const CarImage = styled.img`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: ${COMMON_COLOR.GRAY};
`;

export default CarImage;
