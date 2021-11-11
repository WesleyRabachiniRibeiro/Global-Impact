import styled from 'styled-components';

export const  MainBodyStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
    background-color: rgba(255, 200, 58, 1);
    min-height: 100vh;

    .title{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
    }

    .title h1{
        width: 380px;
        font-family: 'Eczar', serif;
        font-size: 100px;
        font-style: normal;
        font-weight: 700;
        line-height: 120px;
        letter-spacing: 2.5px;
        text-align: center;
        text-transform: uppercase;
        margin: 0 auto;
    }

    .team-name{
        font-size: 12px;
        transform: rotate(-90deg);
        position: absolute;
        bottom: 100px;
        left: 110px;
        text-transform: uppercase;
    }

    .social-media{
        font-size: 25px;
        margin-right: 10px;
        position: absolute;
        right: 140px;
        bottom: 50px;
    }

    @media(min-height: 1080px){
        .title h1{
            margin-top: 80px!important;
        }
    }

    @media(max-width: 900px){
        .title h1{
            font-size: 40px!important;
        }
    }
    @media(max-width: 700px){
        .title h1{
            margin-top: 80px;
            width: auto!important;
            font-size: 30px!important;
        }
    }
    @media(max-width: 520px){
        .social-media, .team-name{
            display: none;
        }
        .title h1{
            margin-top: 80px;
            width: auto!important;
            font-size: 30px!important;
        }
        .title p{
            font-size: 18px!important;
        }
    }
`
