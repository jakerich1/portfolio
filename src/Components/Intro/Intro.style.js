/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FlexContainer } from '../../Style/Utility.style';

export const IntroWrap = styled(FlexContainer)`
    position: relative;
`;

export const IntroImage = styled.img`
    display: block;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    color: #000000;
    text-align: center;
    box-shadow: 0px 0px 0px 6px #5B9279, 0px 0px 0px 8px #FFFFFF;

    @media (max-width: 500px) {
        width: 50vw;
        height: 50vw;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export const NameTitle = styled.h1`
    display: block;
    font-family: 'Bebas Neue', cursive;
    color: white;
    font-size: calc((75vw - 4.5rem) / 7);
    letter-spacing: 3px;
    line-height: calc((75vw - 4.5rem) / 7);

    @media (max-width: 500px) {
        font-size: 40px;
        line-height: 40px;
    }
`;

export const SubHead = styled(NameTitle)`
    font-family: 'Poppins', sans-serif;
    font-size: calc((25vw - 1.5rem) / 7);
    font-weight: 300;
    letter-spacing: 1px;
    line-height: calc((25vw - 1.5rem) / 4);

    @media (max-width: 500px) {
        font-size: 14px;
        line-height: 14px;
    }
`;

export const SocialCont = styled.a`
    display: inline-block;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: white;
    transition: all 0.15s ease-in-out;

    &:hover{
        transform: translateY(-3px);
    }

    &:focus{
        outline: 2px solid #8FC8AD;
    }

    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }

    svg{
        display: block;
        fill: #5B9279;
    }
`;
