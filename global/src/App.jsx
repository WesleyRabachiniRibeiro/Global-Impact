import Body from './components/home/body/Body';
import Header from './components/home/header/Header';
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
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
