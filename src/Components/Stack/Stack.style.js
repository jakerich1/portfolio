/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FlexContainer } from '../../Style/Utility.style';

export const StackWrap = styled(FlexContainer)`
    perspective: 1000px;
    position: relative;
    height: auto;
    min-height: 100vh;
    background: #8FC8AD;
    padding: 2em;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 150px);
    grid-gap: 0.5em;
    transition: all 1s ease-in-out;
    transform: ${(props) => (props.inView ? 'rotateX(0deg)' : 'rotateX(93deg)')};

    @media (max-width: 850px) {
        grid-template-columns: repeat(3, 125px);
    }

    @media (max-width: 550px) {
        grid-template-columns: repeat(3, 100px);
    }

    @media (max-width: 360px) {
        grid-template-columns: repeat(3, 75px);
    }
`;

export const Title = styled.h1`
    font-family: 'Bebas Neue', cursive;
    font-size: calc((75vw - 5.5rem) / 7);
    letter-spacing: 3px;
    line-height: calc((75vw - 5.5rem) / 7);
    font-weight: 500;
    color: #436e5b;
`;
