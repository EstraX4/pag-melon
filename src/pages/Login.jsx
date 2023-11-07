import React from "react";
import { Link } from '../Link.jsx'

export default function Login () {
  return (
    <div>
      <Link to='/login'>Login</Link>
      <Link to='/'>Home</Link>
      <Link to='/carrito'>Carrito</Link>
      <Link to='/buyshop'>buyshop</Link>
    </div>
  );
};
