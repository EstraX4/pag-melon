import React from "react";
import { TestimonialCard } from "../components/TestimonialCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import testimonial1 from "../assets/img/testimonial1.png"

export const Testimonial = () => {
  return (
    <div className="content-testimonial-xl">
      <div className="text-center">
        <h1 className="black-title">Testimonios</h1>
        <p className="gray-paragraph">
          Algunas citas de nuestros clientes satisfechos
        </p>
      </div>
      <div className="content card">
      <TestimonialCard
        name="Monica"
        rating={4}
        comment="¡Excelente producto y servicio!"
        avatar={testimonial1}
      />
      <TestimonialCard
        name="Monica"
        rating={4}
        comment="¡Excelente producto y servicio!"
        avatar={testimonial1}
      />
      <TestimonialCard
        name="Monica"
        rating={4}
        comment="¡Excelente producto y servicio!"
        avatar={testimonial1}
      />
      </div>
    </div>
  );
};
