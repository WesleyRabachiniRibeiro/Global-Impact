import styled from "styled-components";

export const SignInCompStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    .signIn__field{
        height: 100%;
    }
    .inputs{
        width: 100%;
    }
    .signIn__field input, .btn{
        border-radius:28px;
        border:1px solid #b8acbc;
        font-family:"AbeeZee";
        font-size:17px;
        padding:10px;
        text-align: center;
        width: 100%;
        margin-bottom: 20px;
    }
 
    .btn{
        border: 0px;
        background-color: #ff2474;
        color: #fff;
    }
    input.btn{
        border: 0px;
    }
    .link-btn.btn{
        text-decoration: none;
        background-color: #FFA630;
    }

    @media(max-width: 700px){
        &{
            width: 210px;
        }
    }
`