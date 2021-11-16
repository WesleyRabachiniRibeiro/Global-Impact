import React, { Component } from "react"
import { HeaderStyled, BurgerStyled } from './styled'
import Heart from '../../../assets/Img/Heart.png'
import { slide as Menu } from 'react-burger-menu'
import SolidBar from '../../../assets/Img/SolidBar.svg'
import Close from '../../../assets/Img/Close.svg'
import { Link } from "react-router-dom"
import { BsPersonCircle, BsFileEarmarkText, BsPersonPlusFill } from "react-icons/bs"

class Burger extends Component {
    render() {
        return (
            <Menu isOpen={false} customBurgerIcon={<img src={SolidBar} alt="bars"/>} customCrossIcon={<img src={Close} alt="close"/>} noOverlay width={'300px'} disableOverlayClick>
                <li className="logo-menu">
                    <img src={Heart} alt="Logo" className='logo'/>
                </li>
                <li className='option-menu'>
                    <BsFileEarmarkText className='icon'/>
                    <Link to='/'>Sobre</Link>
                </li>
                <li className='option-menu'>
                    <BsPersonCircle className='icon'/>
                    <Link to='/login'>Login</Link>
                </li>
                <li className='option-menu'>
                    <BsPersonPlusFill className='icon'/>
                    <Link to='/cadastro'>Cadastro</Link>
                </li>
            </Menu>
        );
    }
}

export default function Header() {
    return (
        <HeaderStyled>
            <div className="header-container">
                <div className="header-page">
                    <div className="burger-menu-pointer">
                        <BurgerStyled>
                            <Burger/>
                        </BurgerStyled>
                    </div>
                    <Link to="/"><img src={Heart} alt="Logo" className="logo" /></Link>
                    <p>Better Days</p>
                </div>
            </div>
        </HeaderStyled>
    )
}
