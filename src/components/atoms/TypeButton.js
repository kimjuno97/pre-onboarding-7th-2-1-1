import styled from 'styled-components';

const TypeButton = styled.button`
  width: 62px;
  height: 27px;
  padding: 5px 18px;
  border: none;
  border-radius: 62px;
  color: ${({ color }) => color};
  background: ${({ backgroundColor }) => backgroundColor};
  font-size: 14px;
  font-weight: 700;
  line-height: 17px;
  cursor: pointer;
`;

export default TypeButton;
