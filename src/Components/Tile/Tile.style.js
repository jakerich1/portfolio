/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Tilt from 'react-parallax-tilt';

export const TileCont = styled(Tilt)`
    display: grid;
    place-items: center;
    width: 100%;
    height: 150px;
    border-radius: 4px;
    background: #f2f2f2; 
    background-image: ${(props) => (props.src ? `url(${props.src})` : '')};
    background-position: center;
    background-size: ${(props) => (props.size ? props.size : 'cover')};
    background-repeat: no-repeat;

    @media (max-width: 850px) {
        height: 125px;
    }

    @media (max-width: 550px) {
        height: 100px;
    }

    @media (max-width: 360px) {
        height: 75px;
    }

    &::before {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
        display: grid;
        place-items: center;
        text-align: center;
        font-weight: 500;
        font-size: 21px;
        border-radius: 4px;
        background-color: #FFFFFF;

        @media (max-width: 550px) {
            font-size: 14px;
        }

        @media (max-width: 360px) {
            font-size: 12px;
        }
    }

    

    &:hover{
        &::before {
            content: ${(props) => (props.size ? `"${props.alt}"` : '""')};;
            background-color: #cecece;
        }
    }
`;
