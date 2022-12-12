import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}
    html {
      font-size: 16px;
    }
      * {
      box-sizing: border-box;
      font-family: 'Do Hyeon', sans-serif;
    }
    a {
      text-decoration: none;
    }
`;

export default GlobalStyle;
