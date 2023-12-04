import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
class ProfitLossCalculator extends React.Component
{
    
    constructor(props)
    {
        super(props);
        this.SellPrice = React.createRef();
        this.CostPrice = React.createRef();
    }
    Calculate = (e) => {
        var cost = this.CostPrice.current.value;
        var sell = this.SellPrice.current.value;

        var difference = sell - cost;
        if(difference<0)
            alert('it is loss of' + difference);
        else 
            alert('it is profit of ' + difference);
        e.preventDefault();
    }
    render()
    {
        return (<div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <div className='card-header text-bg-success'>
                        <h1>Profit Loss Calculator</h1>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={this.Calculate}>
                            <div className='mb-3'>
                                <label htmlFor='costprice' className='form-label'>Cost Price</label>
                                <input type='number' id='costprice' name='costprice' className='form-control' ref={this.CostPrice}  />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='sellprice' className='form-label'>Sell Price</label>
                                <input type='number' id='sellprice' name='sellprice' className='form-control' ref={this.SellPrice} />
                            </div>
                            <button type='submit' className='btn btn-success w-100'>Calculate Profit/loss</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
    }
}
root.render(< ProfitLossCalculator  />);