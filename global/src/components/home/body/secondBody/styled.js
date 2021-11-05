import styled from 'styled-components';

export const  SecondStyled = styled.section`
    .container{
        width: 100%;
        height: 637px;
        background-color: #414141;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .bloco{
        width: 30vw;
        height: 200px;
        margin: 50px;
        display: flex;
    }
    .logo{
        display: flex;
        width:60%;
        flex-direction: row-reverse;
        img{
            width: 80px;
            height: 80px;
            margin-right: 28px;
        }
        .ray-img{
            width: 60px;
        }
        .drop-img{
            width: 60px;
        }
    }
    .texto-card{
        display: flex;
        width: 100%;
        flex-direction: column;
        h2{
            font-size: 65px;
            color: #FFA630;
            
        }
        p{
            margin-top: 10px;
            text-align: justify;
            font-size: 17px;
            color: #EBEBEB;
        }
    }
    .sessao-1, .sessao-2{
        display: flex;
        flex-direction: row;
        width: 80vw;
        height: 200px;
        margin-top: 50px;

    }
`