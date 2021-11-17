import styled from "styled-components";

export const FormProductStyled = styled.form`
    text-align: center;
    .accept{
        width: 250px;
        margin-top: 10px;
        padding: 8px 20px;
        border-radius: 50px;
        border: none;
        background-color: #1473E6;
        color: white;
        outline: none;
    }
    .accept:hover{
        background-color: #1451E6;
    }
`
export const TableProductStyled = styled.table`
    width: 100%;
    text-align: center;
    border-collapse: separate;
    border-spacing: 30px;
    td{
        vertical-align: middle;
        font-size: 14px;
        width: 20%;
    }
    caption{
        font-size: 20px;
        font-weight: bold;
    }
    input{
        padding: 5px 10px;
        border: 1px solid black;
        border-radius: 15px;
    }
    input[type=checkbox]{
        height: 15px;
        width: 15px;
        border: 1px solid black;
    }
    input[type=checkbox]:checked {
        color: #1473E6;
    }
    @media(max-width: 600px){
        &{
            width: 50%;
            border-spacing: 10px;
        }
    }
`