import styled from "styled-components";

export const FoodStyled = styled.section`
    h1{
        font-size: 19px;
    }
    .title-button{
        margin: 0 auto;
        max-width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: end;
        border-bottom: 1px solid #ccc;
    }
    .file-input{
        display: none;
    }

    .label-file{
        font-family: 'ABeeZee', sans-serif;
        background-color: #1473E6;
        color: #ffffff;
        padding: 8px 20px;
        border-radius: 50px;
        width: 150px;
        text-align: center;
    }
    .label-file:hover{
        background-color: #1451E6;
    }
    .label-file::before{
        content: '+';
        margin-right: 10px;
    }

    .label-file, h1{
        margin-bottom: 8px;
    }
    @media(max-width: 600px){
        .title-button{
            flex-direction: column-reverse;
            align-items: center;
        }
        .label-file{
            margin-top: 30px;
        }
    }
`