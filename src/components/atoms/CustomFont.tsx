import styled from 'styled-components';
import { TypeFont } from '../../types/index';

const CustomFont = styled.div<TypeFont>`
  margin: ${({ margin }) => margin};
  color: #000000;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  text-align: ${({ textAlign }) => textAlign};
`;

export default CustomFont;
