import React, {useContext} from "react";
import {Route, Navigate} from 'react-router-dom'
import StoreContext from "../../Store/Context";


const RoutesPrivate = ({component: Component, ...rest}) => {
    const {token} = useContext(StoreContext)
    return(
        <Route {...rest} render={() => token ? <Component {...rest}/> : <Navigate to="/login"/>}/>
    )
}

export default RoutesPrivate