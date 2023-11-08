import React from "react";
import { Link } from "../Link.jsx";
import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import imageLogin from "../assets/img/banner-bg.png";

export const LoginC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log(
      `Iniciando sesión con email: ${email} y contraseña: ${password}`
    );
  };

  return (
    <div className="LoginC">
      <img className="imagen-login" src={imageLogin} alt="login" />
      <div className="Formulario-login">
        <h2>INICIAR SESIÓN</h2>
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="boton-login" onClick={handleLogin}>Iniciar Sesión</button>
      </div>
    </div>
  );
};
