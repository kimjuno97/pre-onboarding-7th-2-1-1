import styled from 'styled-components';

const CustomFont = styled.div`
  margin: ${({ margin }) => margin};
  color: #000000;
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  text-align: ${({ textAlign }) => textAlign};
`;

export default CustomFont;
