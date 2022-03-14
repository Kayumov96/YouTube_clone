import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import {BrowserRouter as Router} from 'react-router-dom'
import { Flower } from './context/context.jsx'




ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Flower>  
    <Root />
    </Flower>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
