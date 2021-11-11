import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/home/header/Header';
import Body from './components/home/body/Body';
import Footer from './components/home/footer/Footer';
import DashboardNavbar from './components/pages/dashboard/navbar/DashboardNavbar';
import SignUp from './components/pages/signUp/signUp';
import { DashboardStyled} from './components/pages/dashboard/navbar/styled'
import ProductQtd from './components/pages/dashboard/productQtd/ProductQtd';
import MarketBoard from './components/pages/market/MarketBoard';

function App() {
  return (
    <div className="App">
      <DashboardNavbar/>
      <DashboardStyled>
        <ProductQtd/>
        {/* <SignUp/> */}
        <MarketBoard/>
      </DashboardStyled>
      {/* <Header/>
      <Body/>
      <Footer/> */}
    </div>
  );
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
