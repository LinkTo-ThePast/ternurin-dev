import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MainDesign } from './components/MainDesign/MainDesign.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainDesign />
  </React.StrictMode>
);

