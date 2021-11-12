import React from 'react'
import { ProductStyled } from './styled'
import {BiTrendingDown, BiTrendingUp} from 'react-icons/bi'

export default function ProductQtd(props) {
    return (
        <ProductStyled>
            <div className="all-titles">
                <h1>Instituição Aleatória</h1>
                <p className="subtitle">Better Days</p>
            </div>
            <div className='product-board'>
                <div className='product-count'>
                    <h2>325.045</h2>
                    <div>
                        <p>{props.firstCount}</p>
                        <div className='positive'>
                            <BiTrendingUp/>
                            <span>+24</span>
                        </div>
                    </div>
                </div>
                <div className='product-count'>
                    <h2>340.000</h2>
                    <div>
                        <p>{props.secondCount}</p>
                        <div className='negative'>
                            <BiTrendingDown/>
                            <span>-24</span>
                        </div>    
                    </div>
                </div>
                <div className='product-count'>
                    <h2>340.000</h2>
                    <div>
                        <p>{props.thirdCount}</p>
                        <div className='negative'>
                            <BiTrendingDown/>
                            <span>-24</span>
                        </div>
                    </div>
                </div>
            </div>
        </ProductStyled>
    )
}
