import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { ProductCard } from "./components/ProductCard";
import { Product } from './components/Product';
import { Inform } from "./components/Inform";
import { Testimonial } from './components/Testimonial';
import { Popular } from "./components/Popular"
import { Footer } from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Carrito  from './pages/Carrito';
import BuyShop from './pages/BuyShop.jsx';
import { useEffect, useState } from 'react';
import {EVENTS} from './consts.js'



function App() {
const [currentPath, setCurrentPath] = useState(window.location.pathname)

useEffect(() => {
const onLocationChange = () => {
  setCurrentPath(window.location.pathname)
}

window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
window.addEventListener(EVENTS.POPSTATE, onLocationChange)

return () => {
  window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
  window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
}
}, [])

    return (
      <div className="App">
      {currentPath == '/' && <Home />}
      {currentPath == '/login' && <Login />}
      {currentPath == '/carrito' && <Carrito />}
      {currentPath == '/buyshop' && <BuyShop />}
    </div>
    );
  }


export default App;
