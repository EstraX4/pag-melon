import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import product1 from "../assets/img/product1.png";

export const Popular = () => {
  const formattedPrice = (price) => {
    return price.toLocaleString("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    });
  };

  const [productData, setProductData] = useState({
    image: product1,
    productName: "Producto 1",
    price: 20000,
  });

  return (
    <Container fluid>
      <div>
        <div className="text-center contenedor-tx-p">
          <h1 className="black-title">Popular</h1>
          <p className="gray-paragraph">Nuestro producto más vendido</p>
        </div>
        <div className="content card">
          <ProductCard
            image={productData.image}
            productName={productData.productName}
            price={formattedPrice(productData.price)}
          />
          <ProductCard
            image={productData.image}
            productName={productData.productName}
            price={formattedPrice(productData.price)}
          />
          <ProductCard
            image={productData.image}
            productName={productData.productName}
            price={formattedPrice(productData.price)}
          />
          <ProductCard
            image={productData.image}
            productName={productData.productName}
            price={formattedPrice(productData.price)}
          />
        </div>
      </div>
    </Container>
  );
};
