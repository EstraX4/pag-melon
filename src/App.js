import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Carrito  from './pages/Carrito';
import BuyShop from './pages/BuyShop.jsx';
import Register from './pages/Register';
import { useEffect, useState } from 'react';
import {EVENTS} from './consts.js';

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
      {currentPath == '/register' && <Register />}
    </div>
    );
  }


export default App;
