import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../services/productService'; // Asegúrate de tener este servicio

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    getProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="container mx-auto my-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="flex flex-col md:flex-row">
        <img src={product.image} alt={product.name} className="w-full md:w-1/2 mb-4 md:mb-0" />
        <div className="md:w-1/2 md:pl-4">
          <p className="text-lg mb-4">${product.price}</p>
          <p>{product.description}</p>
          {/* Agrega funcionalidad para agregar al carrito */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
