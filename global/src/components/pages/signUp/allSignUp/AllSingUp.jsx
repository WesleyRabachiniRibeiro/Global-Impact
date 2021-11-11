import React, {useEffect, useState} from 'react'
import MainBody from '../../../home/body/mainBody/MainBody'
import SignUpComponent from '../signUpComponent/SignUpComponent'


export default function AllSingUp() {
    const [on, toggle] = useState(true)
    const [backgroundColor , setBackground] = useState('rgba(255, 200, 58, 1)')
    const [title , setTitle] = useState('Instituição')

    useEffect(() => {
        setBackground(on ?  '#56B090' : '#CC444B')
        setTitle(on ? 'Instituição' : 'Supermercado')
    },[on])
    
    const changeButton = () => {
        toggle(!on)
    }
    return (
        <div>
            <MainBody title={title} backgrounds={backgroundColor} component={<SignUpComponent switchInitial={on} change={changeButton}/>}/>
        </div>
    )
}
