import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/home/header/Header';
import Body from './components/home/body/Body';
import Footer from './components/home/footer/Footer';
import AllSingUp from './components/pages/signUp/AllSingUp';

function App() {
    return (
        <div className="App">
            <Header/>
            <AllSingUp/>
        </div>
    );
}

export default App;
