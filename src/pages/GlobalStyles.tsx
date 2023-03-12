import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
//https://yoon990.tistory.com/54
const GlobalStyles = createGlobalStyle`
${normalize}

    a{
        text-decoration: none;
    }

`;
export default GlobalStyles;
