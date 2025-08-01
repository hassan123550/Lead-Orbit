// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './index.css';
// import App from './App.jsx';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Router>
//     <App />
//     </Router>
//   </StrictMode>
// )





// src/index.js (or src/main.jsx)
import React from 'react';
import ReactDOM from 'react-dom/client'; // Notice .client here
import App from './App';
import './index.css'; // Or your main CSS file

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);