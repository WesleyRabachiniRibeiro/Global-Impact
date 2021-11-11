import React from 'react'
import MainBody from '../../home/body/mainBody/MainBody'
import Header from '../../home/header/Header'
import SignInComp from './signInComponent/SignInComp'

export default function SignIn() {
    const backgroundColor = 'rgba(255, 200, 58, 1)'
    return (
        <div>
            <Header/>
            <MainBody title="BETTER DAYS" backgrounds={backgroundColor} component={<SignInComp/>}/>
        </div>
    )
}
