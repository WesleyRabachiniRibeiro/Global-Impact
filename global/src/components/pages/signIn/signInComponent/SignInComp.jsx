import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import StoreContext from '../../../Store/Context'
import { SignInCompStyled } from './styled'

function initialState(){
    return{email:'', senha:''}
}

function Login({email, senha}){
    if(email === 'admin' && senha === 'admin'){
        return {token: '1234', name: 'Administrador'}
    }
    return {error: 'Usuário ou senha inválida'}
}

export default function SignInComp() {
    const [values, setValues] = useState(initialState);
    const history = useNavigate()
    const { setToken } = useContext(StoreContext);

    function onChange(event){
        const {value, name} = event.target;
        setValues({
            ...values,
            [name]: value,
        });
    }

    function onSubmit(event){
        event.preventDefault();
        const {token} = Login(values);
        

        if(token){
            setToken(token)
            return history('/dashboard')
        }
        setValues(initialState)
    }

    return (
        <SignInCompStyled>
            <form name="signInForms" className="input__columns" onSubmit={onSubmit}>
                <fieldset className="signIn__field">
                    <div className="inputs">
                        <input name="email" id='email' type="text" placeholder="Digite seu e-mail" onChange={onChange} value={values.email} autoComplete='current-password'/>
                    </div>
                    <div className="inputs">
                        <input name="senha" id='senha' type="password"  placeholder="Digite sua senha" onChange={onChange} value={values.senha}/>
                    </div>
                    <input type="submit" name="btn" className="btn" value="Entrar"/>
                </fieldset>
            </form>
            <Link to="/cadastro" className="btn link-btn">Criar conta</Link>
        </SignInCompStyled>
    )
}
