import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">MyShop</div>
        <div>
          <Link to="/" className="text-white mx-2">Home</Link>
          <Link to="/products" className="text-white mx-2">Products</Link>
          <Link to="/cart" className="text-white mx-2">Cart</Link>
          <Link to="/checkout" className="text-white mx-2">Checkout</Link>
          <Link to="/orders" className="text-white mx-2">Orders</Link>
          <Link to="/profile" className="text-white mx-2">Profile</Link>
          <Link to="/login" className="text-white mx-2">Login</Link>
          <Link to="/register" className="text-white mx-2">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
