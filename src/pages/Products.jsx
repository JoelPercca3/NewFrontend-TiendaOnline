import React, { useEffect, useState } from 'react';
import ProductItem from '../components/Product/ProductItem'; // Asegúrate de tener este componente
import { fetchProducts } from '../services/productService'; // Asegúrate de tener este servicio

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Products</h1>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
