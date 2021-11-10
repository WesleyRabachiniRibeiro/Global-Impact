import React, {useEffect, useState} from 'react'
import SignUp from '../../pages/signUp/signUp'
import MainBody from './mainBody/MainBody'
import ArrowComponent from './otherComponentsBody/arrow/ArrowComponent'
import SubtitleComponent from './otherComponentsBody/subtitle/SubtitleComponent'
import SecondBody from './secondBody/SecondBody'
import ThirdBody from './thirdBody/ThirdBody'


export default function Body() {
    const [on, toggle] = useState(false)
    const [backgroundColor, setBackground] = useState('#22aabd')
    useEffect(() => {
        setBackground(on ?  '#75c46b' : '#e74e3c')
    },[on])  
    const changeButton = () => {
        toggle(!on)
        console.log(on)
    }
    return (
        <div>
            <MainBody title="Instituição" backgrounds={backgroundColor} component={<SignUp onChange={changeButton} change={on}/>}/>
            <SecondBody/>
            <ThirdBody/>
        </div>
    )
}
