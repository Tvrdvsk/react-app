import React from 'react';
import ReactDOM from 'react-dom/client';

import 'swiper/css/navigation';
import 'swiper/css/pagination';

import App from './App';

import 'swiper/css';
import './styles/global.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
