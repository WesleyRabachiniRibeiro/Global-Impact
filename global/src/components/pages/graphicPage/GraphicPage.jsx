import React from 'react'
import Graphic from '../graphicPage/graphic/Graphic'
import MenuBar from '../menuBar/MenuBar'

export default function GraphicPage() {
    return (
        <>
        <MenuBar firstCount="Produtos recebidos" secondCount="Produtos doados" thirdCount="Produtos vencidos" component={<Graphic/>}/>
        </>
    )
}
