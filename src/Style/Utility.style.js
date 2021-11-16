/* eslint-disable import/prefer-default-export */
import styled, { createGlobalStyle } from 'styled-components';

// eslint-disable-next-line no-unused-vars
const breakpoints = {
  xs: '0',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1400px',
};

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    height: 100%;
    scroll-behavior: smooth;
  }
  body {
    background: ${(props) => (props.darkMode ? '#5B9279' : '#5B9279')} !important;
    min-height: 100%;
  }
`;

export const FlexContainer = styled.main`
  display: flex;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  height: ${(props) => (props.height ? props.height : 'auto')};
  width: ${(props) => (props.width ? props.width : 'auto')};
  gap: ${(props) => (props.gap ? props.gap : '0')};
  padding: ${(props) => (props.padding ? props.padding : '0px')};
`;

export const NavArrow = styled.button`
  position: absolute;
  bottom: 20px;
  width: 40px;
  height: 40px;
  border: solid 2px white;
  border-radius: 50%;
  display: grid;
  place-items: center;
  margin: auto;
  background: none;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover{
    background: white;
    transform: translateY(-8px);

    svg{
      stroke: #5B9279;
    }
  }

  &:focus{
    background: #8FC8AD;
    transform: translateY(-8px);
  }
`;
