import React from 'react'
import MenuBar from '../menuBar/MenuBar'
import TableProduct from './tableProduct/TableProduct'
import FoodStock from './foodStock/FoodStock'
export default function ProductPage() {
    return (
        <>
            {/* Intituição' */}
            <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<TableProduct/>}/>
            {/* Supermarket */}
            <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<FoodStock/>}/>
        </>
    )
}
