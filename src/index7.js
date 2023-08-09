import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function DisplayCurrentDateTime()
{
    var now = new Date();
    var output = (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Current Time </h1>
                    <p>{now.toLocaleTimeString()}</p>
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-12'>
                    <h1>Current date </h1>
                    <p>{now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear()}</p>
                </div>
            </div>
            
        </div>
    )
    root.render(output);
}
setInterval(DisplayCurrentDateTime,1000);
