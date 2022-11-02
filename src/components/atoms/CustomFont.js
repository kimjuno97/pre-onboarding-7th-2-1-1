import styled from 'styled-components';

const CustomFont = styled.div`
  font-size: ${({ fontSize }) => `${fontSize}px}`};
  font-weight: ${({ fontWeight }) => `${fontWeight}`};
  line-height: ${({ lineHeight }) => `${lineHeight}px`};
  color: #000000;
`;

export default CustomFont;
