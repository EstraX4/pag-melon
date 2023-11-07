import React from "react";
import { Card, Image, Row, Col, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons"; // Importa el icono de estrella

export const TestimonialCard = ({ name, rating, comment, avatar }) => {
  return (
    <Card className="content-testimonial">
      <Card.Body className="body">
        <Row className="row-body">
          <div className="col1-row">
            <Image src={avatar} alt={name} className="avatar" roundedCircle />
          </div>
          <div className="col2-row">
            <div className="d-flex align-items-center name-star">
              <div className="ml-auto">
                {Array.from({ length: rating }).map((_, index) => (
                  <FontAwesomeIcon
                    icon={faStar}
                    key={index}
                    className="text-danger"
                  />
                ))}
              </div>
              <p className="p-testimonial">{comment}</p>
            </div>
            <h5 className="name-testimonial">{name}</h5>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};
