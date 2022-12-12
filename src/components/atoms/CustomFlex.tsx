import styled from 'styled-components';
import { TypeFlex } from '../../types';

const CustomFlex = styled.div<TypeFlex>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => `${gap}px`};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: ${({ padding }) => `${padding}px`};
  border-bottom: ${({ borderBottom }) => borderBottom};
  cursor: ${({ cursor }) => cursor};
`;

export default CustomFlex;
