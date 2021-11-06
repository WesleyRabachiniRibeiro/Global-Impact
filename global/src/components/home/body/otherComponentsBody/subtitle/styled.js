import styled from 'styled-components';

export const SubtitleStyled = styled.div`
    width: 50%;
    font-family: 'Roboto Mono', monospace;
    font-size: 24px;
    font-style: normal;
    font-weight: bold;
    line-height: 38px;
    letter-spacing: 0px;
    text-align: center;
    @media(max-width: 750px){
        &{
            width: auto;
        }
    }
`