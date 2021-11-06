import React from 'react'
import { SignUpStyled } from './styled'

export default function SignUp() {
    return(
        <SignUpStyled>
            <div className="container">
                <div className="sign-container">
                    <div className="bloco-switch">
                        <label class="switch">
                            <input type="checkbox"/>
                            <span class="slider round"></span>
                        </label>
                    </div>
                    <form name="signForm" className="bloco-inputs">
                        <fieldset>
                            <div className="inputs">
                                <label for="nome">Nome</label>
                                <input name="nome" type="text" placeholder="Digite o nome da instituição"/>
                            </div>
                            <div className="inputs">
                                <label for="endereco">Endereço</label>
                                <input name="endereco" type="text" placeholder="Digite o endereço da instituição"/>
                            </div>
                            <div className="inputs">
                                <label for="cnpj">CNPJ</label>
                                <input name="cnpj" type="type" placeholder="Digite o CNPJ da instituição"/>
                            </div>
                            <div className="inputs">
                                <label for="estado" >Estado</label>
                                <select name="estado">
                                    <option selected value="" >Selecione um Estado</option>
                                    <option>São Paulo</option>
                                </select>
                            </div>
                            <div className="inputs">
                                <label for="email">Email</label>
                                <input name="email" type="email" placeholder="Digite o e-mail da instituição"/>
                            </div>
                            <div className="inputs">
                                <label for="cidade">Cidade</label>
                                <select name="cidade">
                                    <option>Selecione uma Cidade</option>
                                    <option>São Paulo</option>
                                </select>
                            </div>
                            <div className="inputs">
                                <label for="senha" >Senha</label>
                                <input name="senha" type="password" placeholder="Digite a senha desejada"/>
                            </div>
                            <div className="inputs">
                                <label for="senha">Telefone</label>
                                <input name="senha" type="text" placeholder="Digite o telefone da instituição"/>
                            </div>
                        </fieldset>
                    </form>
                    <div className="bloco-button">
                        <input type="button" for="signForm" value="Cadastrar"/>
                    </div>
                </div>    
            </div>
        </SignUpStyled>
    )
}