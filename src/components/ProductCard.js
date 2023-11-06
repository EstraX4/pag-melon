import React, { useState } from "react"; // Añade { useState } en la importación

export const ProductCard = ({ image, productName, price }) => {
  return (
    <div className="product-card">
      <img className="card-default" src={image} alt={productName} />
      <h2>{productName}</h2>
      <p>{price}</p>
    </div>
  );
}