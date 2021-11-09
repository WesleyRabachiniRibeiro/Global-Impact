import React from 'react'
import { MainBodyStyled } from './styled'
import { FiFacebook } from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'
import ArrowComponent from '../otherComponentsBody/arrow/ArrowComponent'
import SubtitleComponent from '../otherComponentsBody/subtitle/SubtitleComponent';

export default function MainBody() {
    return (
        <MainBodyStyled>
            <div className="title">
                <h1>Better Days</h1>
                <SubtitleComponent/>
            </div>
            <div className="content">
                <div>
                    <ArrowComponent/>
                    <p className="team-name">By Key-Team</p>
                    <div className="social-media">
                        <FiFacebook/>
                        <FiTwitter/>
                        <AiOutlineInstagram/>
                    </div>
                </div>
            </div>
        </MainBodyStyled>
    )
}
