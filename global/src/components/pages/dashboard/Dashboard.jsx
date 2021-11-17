import React from 'react'
import ListaUpdate from '../market/listaUpdate/ListaUpdate'
import MarketBoard from '../market/MarketBoard'
import MenuBar from '../menuBar/MenuBar'

export default function Dashboard() {
    return (
        <>
            {/* Instiuição */}
            <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<MarketBoard/>}/>
            {/* Supermarket */}
            <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencendo" component={<ListaUpdate marketUpdate='Últimas Doações' marketReceived='Supermercado One' isMarket="supermarket"/>}/>
        </>
    )
}
