import styled from "styled-components";
import { fonts } from "../../styles/fonts";

export const GameArea = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    position: relative;
`

export const MainBoard = styled.div`
    background-color: #fff;
    width: 96vw;
    max-width: 600px;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 10px;
    aspect-ratio: 6 / 4;
    transition: all .5s ease;
`

export const Timer = styled.span`
    display: block;
    font-family: ${fonts.title};
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 10px;
`

export const GameOverScreen = styled.div`
    background-color: #fff;
    max-width: 900px;
    width: 96%;
    padding: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    border-radius: 20px;
    color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

    .victory {
        font-size: 40px;
        font-weight: bold;
        display: block;
    }

    .star {
        width: 80px;
        height: auto;
    }

    .result {
        font-size: 36px;
        font-weight: bold;
    }
`