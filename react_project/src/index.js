import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { RecoilRoot } from 'recoil';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
      <App />
  </RecoilRoot>
);