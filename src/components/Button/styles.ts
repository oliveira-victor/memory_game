import styled from "styled-components";
import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const Button = styled.button`
    max-width: 400px;
    width: 100%;
    background-color: ${colors.main};
    display: block;
    border: none;
    margin: 20px auto;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 24px;
    font-family: ${fonts.text};
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    transition: all .2s ease;

    &:hover {
        transform: scale(1.07);
    }
`