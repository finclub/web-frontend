import React from 'react';
import ReactDOM from 'react-dom/client';
import './variables.css';
import './index.css';
import './icon.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import config from './appConfig';

const setupAxios = () => {
  axios.defaults.baseURL = config.baseURL;
};
setupAxios();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
