/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FlexContainer } from '../../Style/Utility.style';

export const IntroWrap = styled(FlexContainer)`
    position: relative;
`;

export const IntroImage = styled.img`
    display: block;
    width: 30vw;
    height: 30vw;
    border-radius: 50%;
    color: #cecece;
    text-align: center;
    box-shadow: 0px 0px 0px 6px #212529, 0px 0px 0px 8px #cecece;

    @media (max-width: 500px) {
        width: 50vw;
        height: 50vw;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

export const NameTitle = styled(motion.h1)`
    display: block;
    font-family: 'Bebas Neue', sans-serif;
    color: #cecece;
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

export const SocialCont = styled(motion.a)`
    display: inline-block;
    display: grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: #cecece;
    transition: all 0.15s ease-in-out;

    &:hover{
        transform: translateY(-3px);
    }

    &:focus{
        outline: 2px solid #4870a1;
    }

    @media (max-width: 500px) {
        width: 30px;
        height: 30px;
    }

    svg{
        display: block;
        fill: none;
    }
`;
