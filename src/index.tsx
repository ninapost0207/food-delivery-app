import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/styles/index.scss';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ModalState } from './context/ModalContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(  
  <BrowserRouter>
    <ModalState>
      <App /> 
    </ModalState>
  </BrowserRouter>
  
     
);

