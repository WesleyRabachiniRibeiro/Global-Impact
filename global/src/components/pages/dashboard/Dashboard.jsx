import React from 'react'
import MarketBoard from '../market/MarketBoard'
import MenuBar from '../menuBar/MenuBar'
import TableProduct from '../tableProduct/TableProduct'
import FoodStock from '../foodStock/FoodStock'

export default function Dashboard() {
    return (
        <>
        <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<FoodStock/>}/>
        </>
    )
}
