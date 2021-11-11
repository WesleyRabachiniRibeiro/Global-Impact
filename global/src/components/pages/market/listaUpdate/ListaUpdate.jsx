import React from 'react'
import { ListaAtualizacao } from '../styled'
import { BsBook } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

export default function ListaUpdate(props) {
    return (
        <ListaAtualizacao>
        <h1 className="update__h1">{props.marketUpdate}</h1>
            <nav>
                <ul>
                    <li>{props.marketReceived}<div className='gap'><BsBook/><span>190,174</span><AiOutlineEye/><span>213,456</span></div></li>
                    <p>18 october 2020</p>
                </ul>
            </nav>
        </ListaAtualizacao>
    )
}
