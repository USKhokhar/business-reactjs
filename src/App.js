import { Login } from "./components/Login";
import {Routes, Route} from 'react-router-dom'
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Clients from "./components/Clients";
import AboutUs from "./components/AboutUs";
import Wishlist from "./components/Wishlist";

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
      </Routes>
    </div>
  );
}

export default App;
