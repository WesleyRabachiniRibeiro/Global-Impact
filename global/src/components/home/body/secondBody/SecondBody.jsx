import React from 'react'
import { SecondStyled } from './styled'
import { GiWeightScale, GiWeightCrush } from 'react-icons/gi'
import {MdNoFood} from 'react-icons/md'
import {FaBed} from 'react-icons/fa'
import {AiOutlineFieldNumber} from 'react-icons/ai'

export default function SecondBody() {
    return (
        <SecondStyled>
            <div className="container">
                <div className="sessao-1">
                    <div className="bloco">
                        <div className="texto-card">
                            <p>De acordo com o Relatório da Fome da ONU, fome é o termo usado para definir os períodos em que as populações passam por uma grave insegurança alimentar - o que significa que ficam dias inteiros sem comer por falta de dinheiro, falta de acesso a alimentos ou outros recursos.</p>
                        </div>
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <GiWeightCrush/>
                        </div>
                        <div className="texto-card">
                            <h2>35%</h2>
                            <p>O Brasil desperdiça cerca de 35% da sua produção anualmente </p>
                        </div>
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <GiWeightScale/>
                        </div>
                        <div className="texto-card">
                            <h2>41,6KG</h2>
                            <p>Em média, cada brasileiro desperdiça 41,6 kg de alimentos por ano</p>
                        </div>   
                    </div>
                </div>

                <div className="sessao-2">
                    <div className="bloco">
                        <div className="logo carIcon">
                            <MdNoFood/>
                        </div>
                        <div className="texto-card">
                            <h2>1 em 9</h2>
                            <p>No Brasil, uma em cada nove pessoas passam fome no país</p>
                        </div> 
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <FaBed/>
                        </div>
                        <div className="texto-card">
                            <h2>811M</h2>
                            <p>Cerca de 811 milhões de pessoas em todo o mundo vão para a cama com fome todas as noites.</p>
                        </div> 
                    </div>
                    <div className="bloco">
                        <div className="last-logo">
                            <AiOutlineFieldNumber/>
                        </div>
                        <div className="texto-card">
                            <h2>10</h2>
                            <p>O Brasil é o 10º país que mais desperdiça mundo</p>
                        </div> 
                    </div>
                </div>
            </div>
        </SecondStyled>
    )
}
