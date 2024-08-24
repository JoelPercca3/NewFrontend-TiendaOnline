import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot
import { BrowserRouter as Router } from 'react-router-dom'; // Importa Router
import App from './App';
import './styles/tailwind.css';
import './styles/index.css'; // Importa los estilos globales

// Obtén el contenedor del DOM
const container = document.getElementById('root');
const root = createRoot(container); // Crea la raíz con createRoot

root.render(
  <Router>
    <App />
  </Router>
);
