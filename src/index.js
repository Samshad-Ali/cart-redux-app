import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store from './Redux/Store';
import App from './App';
import './Stylesheet/index.scss'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store} >
      <BrowserRouter>     
    <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

