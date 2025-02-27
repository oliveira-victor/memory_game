import styled, { createGlobalStyle } from "styled-components";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { resolution } from "./resolution";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        body {
            font-family: ${fonts.text};
            font-size: 26px;
            color: #fff;

            @media (max-width: ${resolution.mobile}) {
                font-size: 20px;
            }
        }

        h1, h2, h3, h4 {
            font-family: ${fonts.title};
        }

        .container {
            max-width: 1024px;
            margin: 0 auto;
        }
        
        .board {
            width: 100%;
            padding: 10px;
            text-align: center;
        }

        a {
            color: ${colors.main};
        }
    }
`

export const Wrapper = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    background-color: ${colors.background};
    background-image: url(/bg.svg);
    background-size: cover;
    min-height: 100vh;
`

export const Canvas = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

export default GlobalStyle