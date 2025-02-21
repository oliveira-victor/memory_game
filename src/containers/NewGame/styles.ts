import styled from "styled-components";

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
`
