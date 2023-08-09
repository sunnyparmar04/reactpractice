import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
var page = (
    <div className='container'>
       <div className='row'>
            <div className='col-4'>
            <h1>React JS Node JS topics</h1>
        <hr />
        <ul className='list-group'>
            <li className='list-group-item'>HTML</li>
            <li className='list-group-item'>CSS</li>
            <li className='list-group-item'>JAVASCRIPT</li>
            <li className='list-group-item'>Bootstrap</li>
            <li className='list-group-item'>React JS</li>
            <li className='list-group-item'>Node JS</li>
            <li className='list-group-item'>Express JS</li>
            <li className='list-group-item'>Mysql</li>
            <li className='list-group-item'>MongoDB</li>
        </ul>
            </div>
       </div>
    </div>
)
root.render(page);
