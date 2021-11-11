import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import SignIn from './components/pages/signIn/SignIn';
import SignUp from './components/pages/signUp/SignUp';


export const RouteCerta = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/cadastro" element={<SignUp/>}/>
            <Route path="/login" element={<SignIn/>}/>
        </Routes>
    )
}
