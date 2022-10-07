import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Calculator from './main/Calculator';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //os elementos precisam ser envolvidos para funcionar usei <React.StrictMoide> -> serve para verificar erros
  <React.StrictMode>
   
    <h1>Calculadora</h1>

    <Calculator />
    
  </React.StrictMode>
);

