import React from 'react';
import ReactDOM from 'react-dom';
import './css/body.css';
import './css/app.css';
import './css/header.css';

import App from './App.jsx';

//Rendering the application on index.html using ReactDOM 
ReactDOM.render(
    <App />,
    document.getElementById('app')
);