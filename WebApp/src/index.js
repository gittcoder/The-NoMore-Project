import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducer from './utils/Reducer';


const store = createStore(Reducer);
registerLicense('License Key');

ReactDOM.render(
  
        <Provider store ={store}>
    <App />
    </Provider>
        
        
    ,
  

  document.getElementById('root')
);



