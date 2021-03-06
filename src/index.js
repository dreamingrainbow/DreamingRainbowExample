import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'jquery/dist/jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.css';
import './App.css'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
