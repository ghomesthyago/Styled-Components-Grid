import styled from 'styled-components';

export const Container = styled.div`

    max-width: 1360px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }

`;

export const Row = styled.div `

    width: 100%;
    height: auto;
    float: left;
    box-sizing: border-box;
    &:before,
    &:after {
        content: " ";
        display: table;
    }
    &:after {
        clear: both;
    }

`;

function getWidthGrid(value) {
    if (!value) return;

    let width = value / 12 * 100;
    return `width: ${width}%;`;
}

export const Column = styled.div `

    float: left;
    padding: .25rem;
    min-height: 1px;
    box-sizing: border-box;
    background-color: #6200ee;
    border: 1px solid #cacaca;
    font-family: Arial, Helvetica, sans-serif;
    border-radius: 3px;
    margin: 5px 0;
    text-align: center;
    color: #FFF;

    @media only screen and (max-width: 768px) {
        ${({ mobile }) => mobile && getWidthGrid(mobile)}
    }
    @media only screen and (min-width: 768px) {
        ${({ tablet }) => tablet && getWidthGrid(tablet)}
    }
    @media only screen and (min-width: 1000px) {
        ${({ desktop }) => desktop && getWidthGrid(desktop)}
    }

`;