import React from 'react';
import ProductItem from './ProductItem';

const Products = ({ products }) => {
  if (!products || products.length === 0) {
    return <div>No products available</div>; // Mensaje alternativo si no hay productos
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
