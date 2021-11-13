import styled from 'styled-components'

export const FooterStyled = styled.div`
    
    .footer__global{
        background-color: #414141;
        height: 90px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .social-media__icons{
        display: flex;
        width: 130px;
        justify-content: space-between;
    }
    .social-media__icons:hover{
        position: relative;
        transform: translateY(1px);
    }
    p{
        font-family: 'Rubik', sans-serif;
        font-size: 20px;
        color: #FFFFFF80;
    }
    svg{
        fill: #DADADA;
        font-size: 35px;
    }
    @media(max-width: 800px) {
        .footer__global{
            flex-direction: column;
        }
        p{
            font-size: 17px;
        }
    }
`