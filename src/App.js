import { Login } from "./components/Login";
import {Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Clients from "./components/Clients";
import AboutUs from "./components/AboutUs";
import Wishlist from "./components/Wishlist";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Dashboard" element = {<Dashboard />} />
        <Route path="/Clients" element = {<Clients />} />
        <Route path="/AboutUs" element = {<AboutUs />} />
        <Route path="/Wishlist" element = {<Wishlist />} />
        <Route path='/products/electronics' element = { <Products heading='ELECTRONICS' url='https://fakestoreapi.com/products/category/electronics'/> } />
        <Route path='/products/jewelry' element = { <Products heading='JEWELRY' url='https://fakestoreapi.com/products/category/jewelery'/> } />
        <Route path='/products/men-clothing' element = { <Products heading='CLOTHING -- Men' url="https://fakestoreapi.com/products/category/men's%20clothing"/> } />
        <Route path='/products/women-clothing' element = { <Products heading="CLOTHING -- Women" url="https://fakestoreapi.com/products/category/women's%20clothing"/> } />
      </Routes>
    </div>
  );
}

export default App;
