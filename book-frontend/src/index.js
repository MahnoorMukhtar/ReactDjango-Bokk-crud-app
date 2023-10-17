import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = document.getElementById('root');

// Use createRoot to render your app
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);

