import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const Footer = styled.section`
    background-color: ${colors.footer};
    font-size: 18px;
    color: #fff;
    padding: 20px 0;
    text-align: center;

    .email {
        font-family: ${fonts.title};
        margin-top: 8px;
    }
`