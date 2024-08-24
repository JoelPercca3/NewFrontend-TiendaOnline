import React from 'react';
import ProductItem from '../components/Product/ProductItem'; // Asegúrate de tener este componente

const Home = () => {
  // Aquí puedes agregar lógica para obtener productos destacados, promociones, etc.
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Welcome to MyShop</h1>
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Aquí deberías mapear tus productos destacados */}
          <ProductItem /> {/* Ejemplo de un producto, deberías pasar datos reales */}
        </div>
      </div>
    </div>
  );
};

export default Home;
