import React from 'react';
import ReactDOM from 'react-dom';
// import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';
;


const $root = document.getElementById('root');

// ReactDOM.render(<PrimeraApp saludo="Hola! Soy Nanomixer 😎" />, $root);
// ReactDOM.render(<CounterApp value="No entiendo porque esto no falla, se pide número obligatorio" />, $root);
ReactDOM.render(<CounterApp value={2022} />, $root);