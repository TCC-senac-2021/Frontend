import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Content/> 
  </React.StrictMode>,
  document.getElementById('root')
);
