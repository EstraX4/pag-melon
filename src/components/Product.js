import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import { ProductCard } from "./ProductCard";
import product1 from "../assets/img/product1.png"

export const Product = () => {

  const formattedPrice = (price) => {
    return price.toLocaleString("es-CO", { style: "currency", currency: "COP", minimumFractionDigits: 0 });
  };

  const [productData, setProductData] = useState({
    image: product1,
    productName: "Producto 1",
    price: 20000 ,
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
        <div className="text-center contenedor-tx-p">
          <h1 className="black-title">Productos</h1>
          <p className="gray-paragraph">
            Pídelo para ti o para tus seres queridos
          </p>
        </div>
        <div className='content card'>
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
          {/* <button onClick={handleDataChange}>Cambiar Datos</button> */}
        </div>
      </div>
    </Container>
  );
};
