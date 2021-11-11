import React from 'react'
import { Link } from 'react-router-dom'
import { SignInCompStyled } from './styled'

export default function SignInComp() {
    return (
        <SignInCompStyled>
            <form name="signInForms" className="input__columns">
                <fieldset className="signIn__field">
                    <div className="inputs">
                        <input name="email" type="text" placeholder="Digite seu e-mail" />
                    </div>
                    <div className="inputs">
                        <input name="senha" type="text"  placeholder="Digite sua senha" />
                    </div>
                    <input type="submit" name="btn" className="btn" value="Entrar"/>
                </fieldset>
            </form>
            <Link to="/cadastro" className="btn link-btn">Criar conta</Link>
        </SignInCompStyled>
    )
}
