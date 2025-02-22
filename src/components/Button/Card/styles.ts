import styled from "styled-components";
import cardBack from '../../../assets/images/card-back.webp'

export const Card = styled.div`
    background-color:#1a3e6d;
    background-image: url(${cardBack});
    border-radius: 10px;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.4);

    & img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        border-radius: 10px;
    }
`
