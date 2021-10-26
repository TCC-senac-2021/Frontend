import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/Header';
import Avatar from './components/Avatar/Avatar'
import Content from './components/Content/Content';

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Avatar/>
   {/*  <Content/> */}
  </React.StrictMode>,
  document.getElementById('root')
);
