import React from 'react'
import { MainBodyStyled } from './styled';
import { FiFacebook } from 'react-icons/fi';
import {AiOutlineInstagram} from 'react-icons/ai';
import {FiTwitter} from 'react-icons/fi';

export default function MainBody(props) {
    const Component = props.component;
    const backgroundCL = { 
        backgroundColor: `${props.backgrounds}`,
    }
    let title = {
        fontSize: '64px',
        width: '535px'
    };

    if (props.title.toUpperCase() === "BETTER DAYS"){
        title = {
            fontSize: '100px',
        }
    };


    return (
        <MainBodyStyled style={backgroundCL}>
            <div className="title">
                <h1 style={title}>{props.title}</h1>
            </div>
            {Component}
            <div className="content">
                <div>
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
