import styled from "styled-components";

export const ListaAtualizacao = styled.div`
    width: 92%;
    margin: 0 auto;

    p{
        color: #9F9F9F;
        font-size: 15px;
    }

    ul{
        display:flex;
        flex-direction:column;
        width:100%;
        align-items: center;
    }
    li{
        display:flex;
        list-style:none;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top:20px;
        padding-bottom:4px;
        font-size: 17px;
    }
    span{
        font-size: 15px;
    }
    .title-button{
        min-width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: end;
        border-bottom: 1px solid #ccc;
    }
    .note-divisor{
        width: 95%;
    } 
    .mr-2{
        margin-right: 20px;
    }
    .update__h1{
        height: 30px;
        margin-top: 30px;
    }
    .note-att{
        display: flex;
        flex-direction: column;
    }
    .status-note{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .icon-note{
        display: flex;
        align-items: center;
        flex-wrap: wrap;
    }
    .mr-1{
        margin-right: 10px;
    }
    .mt-1{
        margin-top: 10px;
    }
    .d-flex{
        display: flex;
        flex-wrap: wrap;
    }
    .btn{
        width: 150px;
        padding: 10px;
        border-radius: 20px;
        border: none;
        color: #ffffff;
    }
    .btn:first-child{
        margin-right: 10px;
        background-color: #A027FF;
    }
    .btn:last-child{
        background-color: #FF2773;
    }
    .btn:first-child:hover{
        background-color: #6F21DB;
        transition: 0.5s;
    }
    .btn:last-child:hover{
        background-color: #ED2B7F;
        transition: 0.5s;
    }
    @media(max-width:362px){
        .btn{
        width: 100%;
        }
        .btn:last-child{
            margin-top: 10px;
        }
    }
`