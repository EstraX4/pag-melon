import React, { useState } from "react";
import { Link } from "../Link.jsx";
import imageLogin from "../assets/img/banner-bg.png";

import appFirebase from "../credenciales.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const auth = getAuth(appFirebase);

export const LoginC = () => {
  const [registrando, setRegistrando] = useState(false);

  const functAutenticacion = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;
    if (registrando) {
      await createUserWithEmailAndPassword(auth, correo, contraseña);
    } else {
      await signInWithEmailAndPassword(auth, correo, contraseña);
    }
  };
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Add logic to handle form submission (e.g., registration)
  //   // Access form data using formData.name, formData.email, etc.
  //   // Call your authentication function here if needed
  // };

  // onAuthStateChanged(auth, (usuarioFirebase) => {
  //   setUsuario(usuarioFirebase || null);
  // });

  return (
    <div className="LoginC">
      <img className="imagen-login" src={imageLogin} alt="register" />
      <div className="Formulario-register">
        <h2>{registrando ? "REGISTRARSE" : "LOGIN"}</h2>
        <form onSubmit={functAutenticacion} className="form-register">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              id="name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              id="email"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              id="password"
              required
            />
          </div>
          <div></div>
          {/* <Link to="/" className="boton-register-link"> */}
            <button className="boton-register">
              {registrando ? "Registrate" : "Inicia Sesion"}
            </button>
            {/* <Link to="/home" className="registroStyle" />
          </Link> */}
          {/* </Link> */}
          <h4 className="registroStyle">
            {registrando ? "Si ya tienes cuenta" : "No tienes cuenta"}
            <button onClick={() => setRegistrando(!registrando)}>
              {registrando ? "inicia sesion" : "Registrate"}
            </button>
          </h4>
        </form>
      </div>
    </div>
  );
};
