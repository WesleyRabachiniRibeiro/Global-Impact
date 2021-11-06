import React from 'react'
import { SecondStyled } from './styled'
import MoneyIcon from '../../../../assets/images/MoneyIcon.png'
import CarIcon from '../../../../assets/images/CarFeatureIcon.png'
import RayIcon from '../../../../assets/images/RayIcon.png'
import DropIcon from '../../../../assets/images/DropIcon.png'

export default function SecondBody() {
    return (
        <SecondStyled>
            <div className="container">
                <div className="sessao-1">
                    <div className="bloco">
                        <div className="texto-card">
                            <p>For nearly twenty-five years, SolarBox has developed, implemented and financed sustainable projects that recapture and reinvest otherwise lost resources. Utilizing world-class project development expertise, ThinkBox has achieved:</p>
                        </div>
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <img src={MoneyIcon} alt='Money Icon'/>
                        </div>
                        <div className="texto-card">
                            <h2>$150M</h2>
                            <p>Raised for critical infrastructure over more than 5M s.f. of space.</p>
                        </div>
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <img src={MoneyIcon} alt='Money Icon'/>
                        </div>
                        <div className="texto-card">
                            <h2>$150M</h2>
                            <p>Saved to our Project Partners in utility and repair expenses.</p>
                        </div>   
                    </div>
                </div>

                <div className="sessao-2">
                    <div className="bloco">
                        <div className="logo carIcon">
                            <img src={CarIcon} alt='Car Icon'/>
                        </div>
                        <div className="texto-card">
                            <h2>12,000+</h2>
                            <p>Equivalent of car removed from the road.</p>
                        </div> 
                    </div>
                    <div className="bloco">
                        <div className="logo">
                            <img className="ray-img" src={RayIcon} alt='Ray Icon'/>
                        </div>
                        <div className="texto-card">
                            <h2>24.9M</h2>
                            <p>Of saved kilowatt hours & 9.3M therms of energy since 2009.</p>
                        </div> 
                    </div>
                    <div className="bloco">
                        <div className="last-logo">
                            <img className="drop-img" src={DropIcon} alt='Drop Icon'/>
                        </div>
                        <div className="texto-card">
                            <h2>3.5B</h2>
                            <p>Gallons of water saved since 2009.</p>
                        </div> 
                    </div>
                </div>
            </div>
        </SecondStyled>
    )
}
