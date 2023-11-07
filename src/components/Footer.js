import React from "react";
import logoF from "../assets/img/logo-footer.svg";

export const Footer = () => {
  return (
    <footer className="footer">
        
      <div className="container-footer">
      <div className="footer-separator"></div>
        <div className="row-footer1">
          <div className="logo-footer">
            <div className="footer-content-left">
              <img src={logoF} alt="Logo" className="footer-logo" />
              <p>
                Tu satisfacción, nuestro compromiso: Bienvenidos a la tienda del
                placer.
              </p>
            </div>
          </div>
        </div>
        <div className="row-footer2">
          <div className="col-footer">
            <div className="footer-column">
              <h4>Descubre</h4>
              <ul className="lista-column">
                <li>Nueva temporada</li>
                <li>Más buscado</li>
                <li>Más vendido</li>
              </ul>
            </div>
          </div>
          <div className="col-footer">
            <div className="footer-column">
              <h4>About</h4>
              <ul className="lista-column">
                <li>Ayuda</li>
                <li>Domicilio</li>
                <li>Afílate</li>
              </ul>
            </div>
          </div>
          <div className="col-footer">
            <div className="footer-column">
              <h4>Info</h4>
              <ul className="lista-column">
                <li>Contactanos</li>
                <li>Privacidad</li>
                <li>Términos y Condiciones</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="contenedor-copyright">
          <p>©Dulce Tentación, Todos los derechos reservados.</p>
          <p>Diseñado con ❤️ por UNIAJC</p>
        </div>
      </div>
    </footer>
  );
};
