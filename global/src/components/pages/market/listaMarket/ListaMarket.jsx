import React from 'react'
import { BsBook } from 'react-icons/bs'
import { ListaStyled } from './styled'

export default function ListaMarket(props) {
    return (
        <ListaStyled>
        <p>Supermercados</p>
            <nav>
                <ul>
                    <li>{props.supermarketNameOne}<div className='gap'><BsBook/><span>190,174</span></div></li>
                </ul>
            </nav>
        </ListaStyled>
    )
}

