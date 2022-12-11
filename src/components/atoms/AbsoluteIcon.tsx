import styled from 'styled-components';
import { TypeAbsolute } from '../../types/index';

const AbsoluteIcon = styled.img<TypeAbsolute>`
  position: absolute;
  height: 1.4375rem;
  top: ${({ top }) => `${top}px`};
  bottom: ${({ bottom }) => `${bottom}px`};
  right: ${({ right }) => `${right}px`};
  left: ${({ left }) => `${left}%`};
  cursor: pointer;
`;

export default AbsoluteIcon;
