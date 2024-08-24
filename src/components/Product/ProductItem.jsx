import React from 'react';

const ProductItem = ({ product }) => {
  if (!product) {
    return <div>No product data</div>; // Muestra un mensaje o componente alternativo si product es undefined
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <span>{product.price}</span>
    </div>
  );
};

export default ProductItem;
