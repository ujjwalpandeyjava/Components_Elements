import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

document.title = "Examples environment: " + process.env.REACT_APP_ENV || "UD";
console.log("Running in environment: " + process.env.REACT_APP_ENV);

ReactDOM
	.createRoot(document.getElementById('root'))
	.render(<App />);