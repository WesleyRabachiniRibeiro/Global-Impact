import React, {useEffect, useState} from 'react'
import MainBody from '../../home/body/mainBody/MainBody'
import SignUp from './signUpComponent/signUp'


export default function AllSingUp() {
    const [on, toggle] = useState(true)
    const [backgroundColor , setBackground] = useState('rgba(255, 200, 58, 1)')
    const [title , setTitle] = useState('Instituição')

    useEffect(() => {
        setBackground(on ?  '#75c46b' : '#e74e3c')
        setTitle(on ? 'Instituição' : 'Supermercado')
    },[on])
    
    const changeButton = () => {
        toggle(!on)
    }
    return (
        <div>
            <MainBody title={title} backgrounds={backgroundColor} component={<SignUp switchInitial={on} change={changeButton}/>}/>
        </div>
    )
}
