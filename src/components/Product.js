import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { ProductCard } from "./ProductCard";

export const Product = () => {
  const [productData, setProductData] = useState({
    image: "",
    productName: "Producto 1",
    price: 20.99,
  });

  //   const handleDataChange = () => {
  //     // Cambiar los datos de la tarjeta
  //     setProductData({
  //       image: '',
  //       productName: '',
  //       price: 25.99,
  //     });
  //   };s

  return (
    <Container fluid>
      <div>
        <div className="text-center">
          <h1 className="black-title">Productos</h1>
          <p className="gray-paragraph">
            Pídelo para ti o para tus seres queridos
          </p>
        </div>
        <div>
          <ProductCard
            image={productData.image}
            productName={productData.productName}
            price={productData.price}
          />
          {/* <button onClick={handleDataChange}>Cambiar Datos</button> */}
        </div>
      </div>
    </Container>
  );
};
