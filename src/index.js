import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
class InterestCalculator extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {}; //empty state object
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    calculateResult = () => {
        console.log(this.state);
        this.setState({
            result: (this.state.amount * this.state.rate * this.state.year) / 100
        });
        
    }
    render()
    {
        return (<div className='container'>
            <div className='row'>
                <div className='col-6 offset-3'>
                    <div className='card shadow'>
                        <div className='card-header text-bg-primary'>
                            <h2>Interest Calculator</h2>
                        </div>
                        <div className='card-body'>
                            <form>
                                <div className='mb-3'>
                                    <label  className='form-label' htmlFor='amount'>Amount</label>
                                    <input id= 'amount' className='form-control' 
                                    onChange={this.onInputChange}  name='amount'  required />
                                </div> 
                                <div className='mb-3'>
                                    <label  className='form-label' htmlFor='rate'>Rate</label>
                                    <input id= 'rate' className='form-control' name='rate'  onChange={this.onInputChange} required />
                                </div>
                                <div className='mb-3'>
                                    <label  className='form-label' htmlFor='year'>Year</label>
                                    <input id= 'year' className='form-control' name='year'  required onChange={this.onInputChange} />
                                </div>
                                <div>
                                    <button type='button' className='btn btn-primary' onClick={this.calculateResult}>Calculate Interest</button>
                                </div>
                                <div>
                                    {this.state.result}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>)
    }
}
root.render(< InterestCalculator />);