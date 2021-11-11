import React from 'react'
import { ListaAtualizacao } from '../styled'
import { BsBook } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

export default function ListaUpdate() {
    return (
        <ListaAtualizacao>
        <h1 className="update__h1">Ultimas Atualizações</h1>
            <nav>
                <ul>
                    <li>Recebidos Supermercado One<div className='gap'><BsBook/><span>190,174</span><AiOutlineEye/><span>213,456</span></div></li>
                    <p>18 october 2020</p>
                    <li>Recebidos Quitanda Two<div className='gap'><BsBook/><span>190,174</span><AiOutlineEye/><span>213,456</span></div></li>
                    <p>11 June 2020</p>
                    <li>Recebidos Feira da rua Three<div className='gap'><BsBook/><span>190,174</span><AiOutlineEye/><span>213,456</span></div></li>
                    <p>22 august 2020</p>
                    <li>Recebidos Carre Four<div className='gap'><BsBook/><span>190,174</span><AiOutlineEye/><span>213,456</span></div></li>
                    <p>14 septbember 2020</p>
                </ul>
            </nav>
        </ListaAtualizacao>
    )
}
