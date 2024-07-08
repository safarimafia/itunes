import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './App.css'; 

//root element
const root = ReactDOM.createRoot(document.getElementById('root'));

//App component
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
