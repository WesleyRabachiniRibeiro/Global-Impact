import React from 'react'
import MainBody from './mainBody/MainBody'
import ArrowComponent from './otherComponentsBody/arrow/ArrowComponent'
import SubtitleComponent from './otherComponentsBody/subtitle/SubtitleComponent'
import SecondBody from './secondBody/SecondBody'
import ThirdBody from './thirdBody/ThirdBody'


export default function Body() {
    const background='rgba(255, 200, 58, 1)'
    return (
        <div>
            <MainBody title={"Better Days"} backgrounds={background} component={<SubtitleComponent/>}/>
            <ArrowComponent/>
            <SecondBody/>
            <ThirdBody/>
        </div>
    )
}
