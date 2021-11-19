import React from 'react'
import { SectionStyled, FoodStyled, InfoStyled } from './styled.js'
import FoodForAll from "../../../../assets/Img/FoodForAll.jpg"

export default function ThirdBody() {
    return (
        <SectionStyled>
            <div className="container">
                <FoodStyled>
                    <div className="food">
                        <h1>FOOD</h1>
                        <h2>FOR ALL!</h2>
                        <div className="food__img">
                            <img alt="Comida para Todos" src={FoodForAll}/>
                        </div>
                    </div>
                </FoodStyled>
                <InfoStyled>
                    <div className="title__info">
                        <p>Sabemos que a questão da
                        fome mundial tem se tornado uma das pautas mais recorrentes e tristes na
                        sociedade, porém com a ajuda de mercados e instituições, faremos a nossa
                        parte para combater a fome e reduzir o desperdício de alimentos. Mas como?</p>
                    </div>
                    <div className="info__pai">
                        <div className="info__filha">
                            <h1>Mercados</h1>
                            <p>O objetivo dos mercados nesta campanha será enviar uma planilha em nosso site, com os produtos que estão perto das datas de vencimento, com isso, instituições e assistentes sociais poderão recolher este alimento para ajudar os mais necessitados.</p>
                        </div>
                        <div className="info__filha">
                        <h1>Instituições</h1>
                            <p>O objetivo das instituições nesta campanha será de recolher os alimentos perto da data de vencimento, disponibilizados pelos supermercados, a partir disso, junto ao pedido traremos o endereço disponibilizado para retirada.</p>
                        </div>
                    </div>
                    <div className="info__pai">
                    </div>
                    <div className="title__info">
                        <p>Deste modo, você nos ajudará a combater a fome mundial! Simples, não é mesmo? Venha conosco fazer parte dessa luta, todo suporte é essencial.</p>
                    </div>
                </InfoStyled>
            </div>
        </SectionStyled>
    )
}
