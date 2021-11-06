import styled from 'styled-components';

export const  SecondStyled = styled.section`
    .container{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 80px 0px;
        height: max-content;
        height: auto;
        background-color: #414141;
    }
    .sessao-1, .sessao-2{
        margin: 25px 0;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }

    .bloco{
        width: 380px;
        display: flex;
    }
    .logo{
        width: 150px;
        text-align: left;
        img{
            width: 80px;
            height: 80px;
        }
    } 
    .last-logo{
        text-align: center;
        width: 80px;
        margin-right: 20px;
    }
    .texto-card{
        h2{
            font-size: 65px;
            color: #FFA630;
        }
        p{
            font-size: 17px;
            color: #EBEBEB;
        }
    }
    @media(max-width: 1200px){
        .bloco{
            margin: 25px 0;
        }
    }
    @media(max-width: 750px){
        .logo.carIcon{
            width: 100px;
        }
        .bloco{
            width: 300px;
        }
        .sessao-1{
            margin-bottom: 0;
        }
        .sessao-2{
            margin-top: 0;
        }
    }
    @media(max-width: 480px){
        .sessao-1, .sessao-2{
            margin: 0 10px;
        }
        .texto-card{
            h2{
                font-size: 35px;
                color: #FFA630;
            }
            p{
                font-size: 15px;
                color: #EBEBEB;
            }
        }
        .logo{
            width: 150px;
            height: 80px;
        }
        .last-logo{
            width: 60px;
            height: 60px;
            margin: 10px;
        }
    }
`