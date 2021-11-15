/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { FlexContainer } from '../../Style/Utility.style';

export const ContactWrap = styled(FlexContainer)`
    perspective: 1000px;
    position: relative;
    height: auto;
    min-height: 100vh;
    padding: 2em;
`;

export const ContactCard = styled(FlexContainer)`
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    width: 100%;
    max-width: 800px;
    border-radius: 8px;
`;

export const CardHead = styled(FlexContainer)`
    font-family: 'Bebas Neue', cursive;
    font-size: 94px;
    line-height: 94px;
    letter-spacing: 3px;
    color: #8FC8AD;
    background: #436e5b;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px; 

    @media (max-width: 1070px) { 
        font-size: calc((50vw - 4.5rem) / 5);
        line-height: calc((50vw - 4.5rem) / 5);
    }
`;

export const CardBody = styled(FlexContainer)`
    background: white;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px; 
`;

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    display: block;
    width: 100%;
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;
`;

export const Comment = styled.textarea`
    font-family: 'Poppins', sans-serif;
    display: block;
    width: 100%;
    height: 175px;
    resize: none;
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;
`;

export const Submit = styled.button`
    font-family: 'Poppins', sans-serif;
    display: block;
    width: 100%;
    padding: 1em;
    background: #8FC8AD;
    border-radius: 8px;
    border: none;
    color: #436e5b;
    cursor: pointer;
`;
