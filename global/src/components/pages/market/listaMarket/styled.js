import styled from "styled-components";

export const ListaStyled = styled.div`
    width: 92%;
    margin: 0 auto;
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
        justify-content: space-between;
        box-shadow: 1px 2px 1px 1px #dbdbdb;
        background:linear-gradient(to bottom, #ffc73a 5%, #ffc73a 100%);
        background-color:#ffc73a;
        border-radius:42px;
        color:#ffffff;
        font-size:17px;
        padding:17px 40px;
        text-decoration:none;
        margin-top:20px;
        width: 100%;
        
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