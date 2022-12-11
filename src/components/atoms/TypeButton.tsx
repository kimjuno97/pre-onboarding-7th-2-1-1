import styled from 'styled-components';
import { TypeBtn } from '../../types';

const TypeButton = styled.button<TypeBtn>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 27px;
  padding: 16px 22px;
  border: none;
  border-radius: 62px;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  transition: 1s;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 10px;
    padding: 16px 20px;
  }
`;

export default TypeButton;
