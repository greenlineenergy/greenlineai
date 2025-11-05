import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/App';
import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<div className="w-full h-screen bg-dark-background" />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);