import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));

function ListAndKeys(props)
{
    var heading = props.heading;
    var states = props.states;
    return (<div className='container'>
        <div className='row'>
            <div className='col-lg-4'>
                <div className='card'>
                    <div className='card-header text-bg-primary'>
                        <h3>{heading}</h3>
                    </div>
                    <div className='card-body'>
                        <ul className='list-group'>
                           {states.map((state) => {
                                return <li className='list-group-item' key={state}>{state}</li>
                           })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='row'>
                {states.map((state) => {
                    return <div key={state} className='col-6 mb-2'>
                        <div className='card text-bg-warning p-3'>
                           <div className='card-body'>
                           <h1>{state}</h1>
                           </div>
                        </div> 
                    </div>  
               })} 
                </div>
            </div>               
            
        </div>
    </div>)
}
var states = ['Gujarat','Tamil nadu','Karnatak','Andhra pradesh','Maharastra','punjab'];
root.render(<ListAndKeys heading='Indian states' states={states} />);