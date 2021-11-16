import React from 'react'
import MarketBoard from '../market/MarketBoard'
import MenuBar from '../menuBar/MenuBar'
import TableProduct from '../tableProduct/TableProduct'

export default function Dashboard() {
    return (
        <>
        <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<TableProduct supermercado="Supermercado One"/>}/>
        </>
    )
}
