import React, { useState } from "react";
import { Link } from "../Link.jsx";
import imageLogin from "../assets/img/banner-bg.png";
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import appFirebase from "../credenciales.js";

const auth = getAuth(appFirebase);

export const FormRegister = () => {
  const [usuario, setUsuario] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., registration)
    // Access form data using formData.name, formData.email, etc.
    // Call your authentication function here if needed
  };

  onAuthStateChanged(auth, (usuarioFirebase) => {
    setUsuario(usuarioFirebase || null);
  });

  return (
    <div className="LoginC">
      <img className="imagen-login" src={imageLogin} alt="register" />
      <div className="Formulario-register">
        <h2>REGISTRARSE</h2>
        <form onSubmit={handleSubmit} className="form-register">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Correo Electrónico"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmar Contraseña"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
          </div>
          <button className="boton-register" onClick={handleSubmit}>
            Registrarse
          </button>
          {/* <Link to="/login" className="registroStyle">
            ¿Ya tienes una cuenta? ¡INGRESA AQUÍ!
          </Link> */}
        </form>
      </div>
    </div>
  );
};
