import React from 'react'
import { FooterStyled } from './styled'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
    return (
        <FooterStyled>
            <div className="footer__global">
                <p>Design by Key-Team</p>
                <div className="social-media__icons">
                    <BsFacebook/>
                    <AiFillTwitterCircle/>
                    <BsInstagram/>
                </div>   
                <p>Sobre</p>
            </div>
        </FooterStyled>
    )
}
