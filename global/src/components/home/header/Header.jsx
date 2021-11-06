import React from "react"
import { HeaderStyled } from './styled'
import Heart from '../../../assets/Img/Heart.png'



export default function Header() {
    return (
        <HeaderStyled>
            <div className="header-container">
                <div className="header-page">
                    <p>Better Days</p>
                    <img src={Heart} alt="Logo" />
                </div>
            </div>
        </HeaderStyled>
    )
}
