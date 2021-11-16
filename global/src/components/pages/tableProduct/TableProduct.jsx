import React from 'react'
import { ProductStyled } from '../menuBar/productQtd/styled'

export default function TableProduct(props) {
    return (
        <ProductStyled>
            <h1>{props.supermercado}</h1>
            <table>
                <thead>
                    <tr>
                        <th>Produtos</th>
                        <th>Vencimento</th>
                        <th>Selecionar</th>
                        <th>Quantidade</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Ovos</td>
                        <td>11 Junho 2020</td>
                        <td><input type="checkbox" name="check"/></td>
                        <td><input type="number" name="quantidade"/></td>
                    </tr>
                </tbody>
            </table>
        </ProductStyled>
    )
}
