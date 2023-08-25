import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InterestCalculator from './InterestCalculator'
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InterestCalculator amount='1000000' rate='15' year='1' />);