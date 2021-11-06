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
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus consequuntur voluptatem nihil, provident, expedita quidem, quaerat inventore perspiciatis id quo consectetur amet aperiam laboriosam earum? Fugit soluta quidem ea!</p>
                    </div>
                    <div className="info__pai">
                        <div className="info__filha">
                            <h1>DESGIN</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab earum doloribus voluptatem ipsam excepturi odit blanditiis exercitationem, perspiciatis officia soluta aliquam dolores error, quae vitae quod placeat nam corrupti?</p>
                        </div>
                        <div className="info__filha">
                        <h1>DESGIN</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab earum doloribus voluptatem ipsam excepturi odit blanditiis exercitationem, perspiciatis officia soluta aliquam dolores error, quae vitae quod placeat nam corrupti?</p>
                        </div>
                    </div>
                    <div className="info__pai">
                        <div className="info__filha">
                            <h1>DESGIN</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab earum doloribus voluptatem ipsam excepturi odit blanditiis exercitationem, perspiciatis officia soluta aliquam dolores error, quae vitae quod placeat nam corrupti?</p>
                        </div>
                        <div className="info__filha">
                        <h1>DESGIN</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate ab earum doloribus voluptatem ipsam excepturi odit blanditiis exercitationem, perspiciatis officia soluta aliquam dolores error, quae vitae quod placeat nam corrupti?</p>
                        </div>
                    </div>
                    <div className="title__info">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis doloribus consequuntur voluptatem nihil, provident, expedita quidem, quaerat inventore perspiciatis id quo consectetur amet aperiam laboriosam earum? Fugit soluta quidem ea!</p>
                    </div>

                </InfoStyled>
            </div>
        </SectionStyled>
    )
}
