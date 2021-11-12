import React from 'react'
import DashboardNavbar from './navbar/DashboardNavbar'
import { DashboardStyled } from './navbar/styled'
import ProductQtd from './productQtd/ProductQtd'

export default function MenuBar(props) {
    const Component = props.component
    return (
        <>
            <DashboardNavbar/>
            <DashboardStyled>
                <ProductQtd firstCount={props.firstCount} secondCount={props.secondCount} thirdCount={props.thirdCount}/>
                {Component}
            </DashboardStyled> 
        </>
    )
}
