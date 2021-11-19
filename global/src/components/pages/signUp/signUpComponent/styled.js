import styled from 'styled-components'

export const SignUpStyled = styled.section`
    .container{
        width: 100%;
        display:flex;
        justify-content: center;
    }

    // container onde fica todo sistema de cadastro
    .sign-container{
        display:flex;
        flex-direction: column;
        align-items: center;
        /* border: 1px solid red; */
        width: 600px;
    }

    //container do switch button
    .bloco-switch{
        /* border: 1px solid blue; */
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        margin: 10px 0 10px 0;
    }
    label{
        font-family: 'AbeeZee', sans-serif;
        cursor: default;
    }

    //container dos inptus
    .bloco-inputs fieldset{
        /* width: 100%; */
        height: auto;
        /* border: 1px solid yellow; */
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
  
    //container do button
    .bloco-button{
        margin-top: 40px;
        width:100%;
        text-align: center;
    }

    .bloco-button input{
        border:none;
        padding: 8px 10px;
        width: 270px;
        border-radius: 60px;
        background-color: #FF2773;
        color: #fff;
    }

    .bloco-button input:hover{
        background-color: #CC1F5B;
        transition: 0.2s;
    }

    //css dos inputs
    .inputs{
        width: 40%;
        height: auto;
        /* border: 1px solid gold; */
        display: flex;
        flex-direction: column;
        margin-top: 20px;
        color: #fff;
        font-size: 14px;
    }

    .inputs input, select{
        padding: 10px 8px;
        border-radius: 20px;
        border: none;
        margin-top: 8px;
        color: #333333;
    }

    .inputs select{
        background-color: #fff;
    }

    // CSS DO SWITCH BUTTON
    .switch {
        position: relative;
        display: inline-block;
        width: 70px;
        height: 25px;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 2.5px;
        background-color: white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: red;
    }
    
    input:focus + .slider {
        box-shadow: 0 0 1px #2196F3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(43px);
    }

    /* Rounded sliders */
    .slider.round {
        border-radius: 25px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    @media(max-width:600px){
        .bloco-inputs{
            width: 100%;
        }
    
        .bloco-inputs fieldset{
           flex-direction: column;
           width: 100%;
           align-items: center;
        }

        .inputs, .bloco-button input{
            width: 80%;
        }

        .container{
            height: auto;
            padding-bottom: 20px;
        }

        .sign-container{
            width: 100%;
        }
    }
`