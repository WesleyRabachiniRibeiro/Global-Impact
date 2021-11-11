import React from 'react'
import { BsBook } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'
import { ListaStyled } from '../styled'

export default function ListaMarket() {
    return (
        <ListaStyled>
        <p>Supermercado</p>
            <nav>
                <ul>
                    <li>Supermercado One<div className='gap'><BsBook/><span>190,174</span></div></li>
                    <li>Supermercado Two<div className='gap'><BsBook/><span>190,174</span></div></li>
                    <li>Supermercado Three<div className='gap'><BsBook/><span>190,174</span></div></li>
                    <li>Supermercado Four<div className='gap'><BsBook/><span>190,174</span></div></li>
                </ul>
            </nav>
        </ListaStyled>
    )
}

