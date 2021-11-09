import Body from './components/home/body/Body';
import Header from './components/home/header/Header';
import Footer from './components/home/footer/Footer';
import DashboardNavbar from './components/pages/dashboard/navbar/DashboardNavbar';
import SignUp from './components/pages/signUp/signUp';
import { DashboardStyled} from './components/pages/dashboard/navbar/styled'
import ProductQtd from './components/pages/dashboard/productQtd/ProductQtd';

function App() {
  return (
    <div className="App">
      {/* <DashboardNavbar/>
      <DashboardStyled>
        <ProductQtd/>
        <SignUp/>
      </DashboardStyled> */}
      <Header/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
