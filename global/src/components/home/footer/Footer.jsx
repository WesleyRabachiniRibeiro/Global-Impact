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
                    <a href="https://web.facebook.com/Key-Team-103108065307317?_rdc=1&_rdr"><BsFacebook/></a>
                    <a href="https://twitter.com"><AiFillTwitterCircle/></a>
                    <a href="https://www.instagram.com/keyteam2021/"><BsInstagram/></a>
                </div>   
                <p>Sobre</p>
            </div>
        </FooterStyled>
    )
}
