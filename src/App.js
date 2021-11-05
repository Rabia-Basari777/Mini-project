import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { AllProducts } from "./Components/AllProducts";
import { MenPage } from './Components/MenPage';
import { WomenPage } from './Components/WomenPage';
import { JewelleryPage } from './Components/JewelleryPage';
import { FaqPage } from './Components/FaqPage';
import { ContactPage } from './Components/ContactPage';
import { UnisexPage } from './Components/UnisexPage';
import { Footer } from './Components/Footer';
import { ProductPage } from './Components/ProductPage';
import { CartPage } from './Components/CartPage';

function App() {
  return (
    <div style={{position: "relative"}}>
      {/* <Home /> */}
      <Navbar />
      <br />
      
      <Switch>
        <Route path="/" exact><Home/></Route>
        <Route path="/allproducts" exact><AllProducts /></Route>
        <Route path="/products/:id"><ProductPage /></Route>
        <Route path="/men"><MenPage /></Route>
        <Route path="/women"><WomenPage /></Route>
        <Route path="/unisex"><UnisexPage /></Route>
        <Route path="/jewellery"><JewelleryPage /></Route>
        <Route path="/faq"><FaqPage /></Route>
        <Route path="/contact"><ContactPage /></Route>
        <Route path="/cart"><CartPage /></Route>
      </Switch>
      <br />
      <Footer style={{position: "fixed", bottom: "0px", top: "100vh"}} />
    </div>
  );
}

export default App;
