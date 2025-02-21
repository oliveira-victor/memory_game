import styled from "styled-components";

export const Card = styled.div`
    background-color:#1a3e6d;
    border: 2px solid #333;
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;

    & img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        display: none;
    }
`
