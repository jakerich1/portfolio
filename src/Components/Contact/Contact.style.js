/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  IconCheck,
} from '@tabler/icons';
import { FlexContainer } from '../../Style/Utility.style';

export const ContactWrap = styled(FlexContainer)`
    perspective: 1000px;
    position: relative;
    height: auto;
    min-height: 100vh;
    padding: 2em;

    @media (max-width: 648px) { 
        padding: 1em;
    }
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

    @media (max-width: 648px) { 
        font-size: 50px;
        line-height: 50px;
    }

    @media (max-width: 390px) { 
        font-size: 36px;
        line-height: 36px;
    }
`;

export const CardBody = styled(FlexContainer)`
    background: white;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px; 

    @media (max-width: 648px) { 
        padding: 1em;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
`;

export const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    display: block;
    width: 100%;
    padding: 8px 16px;
    background: #f0f0f0;
    border: none;
    border-radius: 8px;

    &:focus{
        outline: 2px solid #8FC8AD;
    }

    @media (max-width: 648px) { 
        font-size: 12px;
        padding: 8px 8px;
    }
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

    &:focus{
        outline: 2px solid #8FC8AD;
    }

    @media (max-width: 648px) { 
        font-size: 12px;
        padding: 8px 8px;
        height: 100px;
    }
`;

export const Success = styled.div`
    display: flex;
    width: max-content;
    margin: auto;
    padding: 0.5em 1em;
    justify-content: center;
    align-items: center;
    gap: 1em;
    background: none;
    color: #5b9279;
    border-radius: 8px;
    border: 2px solid #5b9279;
`;

export const Icon = styled(IconCheck)`
    background: #5b9279;
    border-radius: 50%;
    padding: 4px;
`;

export const Submit = styled.button`
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #8FC8AD;
    border-radius: 8px;
    border: none;
    color: #436e5b;
    cursor: pointer;
    transition: all 0.15s ease-in-out;

    &:hover{
        filter: brightness(0.9);
    }

    &:focus{
        outline: 2px solid #436e5b;
    }

    @media (max-width: 648px) { 
        font-size: 12px;
        padding: 8px 8px;
        width: 200px;
        height: 40px;
        margin: auto;
    }

    @media (max-width: 310px) { 
        width: 100%;
        height: 30px;
    }
`;
