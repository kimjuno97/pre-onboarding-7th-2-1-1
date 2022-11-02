import styled from 'styled-components';

const Loading = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: -100px;
  font-size: 17px;
  font-weight: 700;
  line-height: 21px;
  z-index: -1;
`;

export default Loading;
