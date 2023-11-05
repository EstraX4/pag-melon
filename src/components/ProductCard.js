import React, { useState } from "react"; // Añade { useState } en la importación

export const ProductCard = ({ image, productName, price }) => {
  return (
    <div className="card">
      <img src={image} alt={productName} />
      <h2>{productName}</h2>
      <p>Precio: ${price}</p>
    </div>
  );
}