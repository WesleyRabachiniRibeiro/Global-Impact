import React, { useState } from 'react'
import { ListaAtualizacao } from './styled'
import { BsBook } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

export default function ListaUpdate(props) {
    const [open, setOpen] = useState(false);
    const marketReceived = props.marketReceived

    return (
        <ListaAtualizacao>
            <div className="title-button">
                <h1 className="update__h1">{props.marketUpdate}</h1>
            </div>
            <ul>
                <div className="note-divisor">
                    <li className="note-att">
                        <div className='status-note' onClick={ () => setOpen(!open)}>
                            {marketReceived}
                            <div className="icon-note">
                                <BsBook />
                                <span className="mr-1">190,174</span>
                                <AiOutlineEye />
                                <span>213,456</span>
                            </div>
                        </div>
                        <p>18 october 2020</p>
                        {open && <div className="mt-1">
                            <button className="btn">Ver detalhes</button>
                            <button className="btn">Cancelar Pedido</button>
                        </div>}
                    </li>
                    <li className="note-att">
                        <div className='status-note' onClick={ () => setOpen(!open)}>
                            {marketReceived}
                            <div className="icon-note">
                                <BsBook />
                                <span className="mr-1">190,174</span>
                                <AiOutlineEye />
                                <span>213,456</span>
                            </div>
                        </div>
                        <p>18 october 2020</p>
                        {open && <div className="d-flex mt-1">
                            <button className="btn">Ver detalhes</button>
                            <button className="btn">Cancelar Pedido</button>
                        </div>}
                    </li>
                </div>
            </ul>
        </ListaAtualizacao>
    )
}
