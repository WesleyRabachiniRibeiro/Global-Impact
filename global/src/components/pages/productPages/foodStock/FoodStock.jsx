import React from 'react'
import { FoodStyled } from './styled'
import { BsBook } from 'react-icons/bs'

export default function FoodStock() {
    return (
        <FoodStyled>
            <div className="container">
                <div className="table__food">
                    <table>
                        <caption>Estoque de alimentos</caption>
                        <thead>
                            <tr>
                                <th>Produtos</th>
                                <th>Vencimento</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ovos</td>
                                <td>11 June 2020</td>
                                <td><BsBook/>352</td>
                            </tr>
                            <tr>
                                <td>Ovos</td>
                                <td>11 June 2020</td>
                                <td><BsBook/>352</td>
                            </tr>
                            <tr>
                                <td>Ovos</td>
                                <td>11 June 2020</td>
                                <td><BsBook/>352</td>
                            </tr>
                            <tr>
                                <td>Ovos</td>
                                <td>11 June 2020</td>
                                <td><BsBook/>352</td>
                            </tr>
                            <tr>
                                <td>Ovos</td>
                                <td>11 June 2020</td>
                                <td><BsBook/>352</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </FoodStyled>
    )
}
