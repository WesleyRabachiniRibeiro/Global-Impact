import React from 'react'
import {ArrowStyled} from './styled'
export default function ArrowComponent() {
    return (
    <ArrowStyled>
        <div className="view-more">
            <p>Veja mais</p>
            <p className='arrow'>&#129043;</p>
        </div>
    </ArrowStyled>
    )
}
