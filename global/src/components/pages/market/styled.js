import styled from "styled-components";

export const MarketStyled = styled.section`
    font-family:"AbeeZee";
    display: flex;
    height: auto;
    width:90%;
    flex-direction: column;
    margin:0 auto;
`

export const ButtonSection= styled.div`
    display:flex;
    flex-direction: column;
`

export const ListaStyled = styled.div`
    p{
        font-size: 19px;
    }
    ul{
        display:flex;
        width:100%;
        flex-direction: column;
        list-style:none;
    }
    li{
        display:flex;
        list-style:none;
        justify-content: space-between;
        box-shadow: 1px 2px 1px 1px #dbdbdb;
        background:linear-gradient(to bottom, #ffc73a 5%, #ffc73a 100%);
        background-color:#ffc73a;
        border-radius:42px;
        color:#ffffff;
        font-size:17px;
        padding:17px 70px;
        text-decoration:none;
        margin-top:20px;
        
    }
    li:active {
        position:relative;
        top:1px;
    }
    span{
        font-size: 15px;
    }
    .gap{
        display: flex;
        gap: 7px;
    }
`

export const ListaAtualizacao = styled.div`
    h1{
        font-size: 19px;
    }
    
    ul{
        display:flex;
        flex-direction:column;
        width:100%;
    }
    li{
        display:flex;
        list-style:none;
        justify-content: space-between;
        margin-top:20px;
        padding-bottom:4px;
        font-size: 17px;
    }
    span{
        font-size: 15px;
    }
    .gap{
        display: flex;
        gap: 7px;
    }
    .update__h1{
        height: 30px;
        margin-top: 30px;
        border-bottom: 1px solid #ccc;
    }
    p{
        color: #9F9F9F;
        font-size: 15px;
    }

`
