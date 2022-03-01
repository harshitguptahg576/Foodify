import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

ReactDOM.render(
  [<Header key={1}/>,<App key={2}/>,<Footer key={3}/>],
  document.getElementById('root')
);
