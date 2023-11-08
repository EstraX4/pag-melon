import React from "react";
import { Link } from '../Link.jsx'
import { NavBar } from "../components/NavBar.js";
import { Footer } from '../components/Footer';

export default function BuyShop () {
  return (
    <div>
      <NavBar />
      <Link to='/login'>Login</Link>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/buyshop'>buyshop</Link>
      <Footer />
    </div>
  );
};
