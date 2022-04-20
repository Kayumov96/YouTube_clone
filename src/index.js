import React from 'react';
import ReactDOMClient from 'react-dom/client';
import './index.css';
import Root from './root';

 const root =ReactDOMClient.createRoot( document.getElementById('root'));

root.render(
  <Root />
 );
