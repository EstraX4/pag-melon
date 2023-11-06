import React from "react";
import { Button } from "react-bootstrap";
import imageinform from "../assets/img/image-inform.png";
import check from "../assets/img/check.svg";

export const Inform = () => {
  return (
    <div className="content inform-content">
      <div className="benefits-section">
        <div className="text-container">
        <h1 className="title">Lo mejor de la ciudad</h1>
          <p className="subline red-paragraph">Hechos para ti y tu disfrute</p>
          <div className="feature">
            <img src={check} alt="Check" className="check-icon" />
            <div className="feature-text">Altamente duraderos</div>
          </div>
          <div className="feature">
            <img src={check} alt="Check" className="check-icon" />
            <p className="feature-text">
              Creados para darte la mejor satisfacción
            </p>
          </div>
          <div className="feature">
            <img src={check} alt="Check" className="check-icon" />
            <p className="feature-text">El mejor Servicio de transporte</p>
          </div>
          <div className="feature">
            <img src={check} alt="Check" className="check-icon" />
            <div className="feature-text">Productos de calidad</div>
          </div>
          <Button variant="danger" className="read-more-button">
          Leer Más
        </Button>
        </div>
        <img src={imageinform} alt="Image Inform" className="inform-image" />
      </div>
    </div>
  );
};
