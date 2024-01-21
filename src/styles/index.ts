import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        .container {
            width: 1024px;
            margin: 0 auto;
        }
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${colors.background};
    min-height: 100vh;
`

export default GlobalStyle