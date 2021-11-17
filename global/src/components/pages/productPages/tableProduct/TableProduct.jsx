import React from 'react'
import { TableProductStyled, FormProductStyled } from './styled.js'

export default function TableProduct(props) {
    return (
        <>
        <FormProductStyled>
            <TableProductStyled>
                <caption>{props.supermercado}</caption>
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
            </TableProductStyled>
            <input type="button" className="accept" value="Finalizar Pedido"/>
        </FormProductStyled>
        </>
    )
}
