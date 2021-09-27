import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Content from './Content';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    { /* <Content/> */ }
  </React.StrictMode>,
  document.getElementById('root')
);
