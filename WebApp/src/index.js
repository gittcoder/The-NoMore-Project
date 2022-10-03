import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import { BrowserRouter } from 'react-router-dom';
registerLicense('License Key');

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);



