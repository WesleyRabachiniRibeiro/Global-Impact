import React from 'react'
import { MarketStyled } from './styled';
import ListaMarket from './listaMarket/ListaMarket';
import ListaUpdate from './listaUpdate/ListaUpdate';

export default function MarketBoard() {
    return (
        <MarketStyled>
            <ListaMarket/>
            <ListaUpdate/>
        </MarketStyled>
    )
}
