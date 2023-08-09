import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function GreetingMessage(time)
{
    var message;
    if (time.hour < 13)
        message = <h1>Good Morning</h1>
    else if(time.hour <18)
        message = <h1>Good afternoon</h1>
    else 
        message = <h1>Good evening</h1>
    var TextColor = 'text-primary'
    var output = (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                <h1 className={TextColor}>
                    {message}
                </h1>
                </div>
            </div>
        </div>
    );
    return output;
}
var time = 
{
    hour: 19
};
root.render(GreetingMessage(time));
