import styled from "styled-components";

export const SignInCompStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 240px;
    width: 320px;
    .input__columns{
    }
    .signIn__field{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    }
    .inputs input {
	border-radius:28px;
	border:1px solid #b8acbc;
    color: #fff;
	font-family:"AbeeZee";
	font-size:17px;
	padding:10px;
    width: 100%;
    text-align: center;
    }
    button{
    background-color: #ff2474;
    border-radius:28px;
	border:1px solid #b8acbc;
	font-family:"AbeeZee";
    color: #fff;
	font-size:17px;
	padding:10px;
    text-align: center;
    }
    .create__account{
    background-color: #ff2474;
    border-radius:28px;
	border:1px solid #b8acbc;
	font-family:"AbeeZee";
    color: #fff;
	font-size:17px;
	padding:10px;
    text-decoration: none;
    text-align: center;
    }
`