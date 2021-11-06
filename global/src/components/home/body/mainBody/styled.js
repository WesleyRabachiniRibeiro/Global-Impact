import styled from 'styled-components';

export const  MainBodyStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background-color: rgba(255, 200, 58, 1);
    height: 100vh;

    .title{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }
    .title h1{
        width: 30%;
        font-family: 'Eczar', serif;
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
        line-height: 120px;
        letter-spacing: 2.5px;
        text-align: center;
    }
    .team-name{
        font-size: 12px;
        transform: rotate(-90deg);
        position: absolute;
        top: 85%;
        left: 0;
        text-transform: uppercase;
    }
    .social-media{
        font-size: 25px;
        margin-right: 10px;
        position: absolute;
        top: 90%;
        right: 60px;
        bottom: 0;
    }
    @media(min-height: 1080px){
        .team-name{
            top: 90%;
        }
    }
    @media(max-width: 1200px){
        .title h1{
            width: auto;
        }
    }
    @media(max-width: 520px){
        .social-media, .team-name{
            display: none;
        }
        .title h1{
            font-size: 50px;
        }
        .title p{
            font-size: 18px;
        }
    }
`
