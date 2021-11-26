/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  IconBrandGithub, IconBrowser,
} from '@tabler/icons';

export const ProjectWrap = styled.div`
    display: grid;
    justify-items: center;
    gap: 5em;
    height: auto;
    padding: 5em 3em 1em 3em;

    @media (max-width: 1200px) {
        grid-template-columns: auto auto;
        grid-template-rows: auto;
        gap: 2em;
    }

    @media (max-width: 750px) {
        grid-template-columns: auto;
        gap: 4em;
        padding: 5em 1em 1em 1em;
    }
`;

export const Project = styled.div`
    display: flex;
    padding: 1em;
    width: 100%;
    max-width: 1365px;
    background: white;
    gap: 1em;

    @media (max-width: 1200px) {
        flex-direction: column;
        max-width: 450px;
    }

    @media (max-width: 500px) {
        padding: 0.5em;
    }
`;

export const Card = styled.div`
    min-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    
    @media (max-width: 1200px) {
        min-width: 0px;
        overflow: hidden;
    }
`;

export const CardImage = styled.img`
    display: block;
    max-width: 400px;
    width: 100%;
    height: 167px;
    object-fit: cover;
    cursor: pointer;

    @media (max-width: 1200px) {
        overflow: hidden;
    }
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 1em 1em 1em;
    width: 100%;
    flex: 1;

    @media (max-width: 500px) {
        font-size: 12px;
        padding: 0;
    }
`;

export const CardTitle = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #3b3b3b;
    font-family: 'Poppins', sans-serif;
    font-size: 42px;
    line-height: 42px;
    font-weight: 300;
    text-align: center;
    margin-bottom: 16px;
`;

export const ReposLink = styled.a`
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5em;
    color: #0070f3;
    width: max-content;
    margin-bottom: 4px;
`;

export const IconWrap = styled.div`
    background: #0070f3;
    transform: rotate(45deg);
    border-radius: 3px;
    padding: 2px;
`;

export const IconGit = styled(IconBrandGithub)`
    display: block;
    transform: rotate(-45deg);
`;

export const IconBrowse = styled(IconBrowser)`
    display: block;
    transform: rotate(-45deg);
`;
