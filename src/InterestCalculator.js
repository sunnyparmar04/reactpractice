import React, {Component} from 'react'
class InteresCalculator extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            amount: this.props.amount,
            rate: this.props.rate,
            year: this.props.year,
            interest: 0
        }
    }
    updateAmount = (event) =>{
        this.setState({
            amount:event.target.value
        },()=>{
            console.log(this.state.amount);
            this.calculate();
        }); //Asynchronous  
        
    }
    updateRate = (event) =>{
        this.setState({
            rate:event.target.value
        },() => {
            console.log(this.state.rate);
            this.calculate();
        }); //Asynchronous  
       
    }
    updateYear = (event)=>{
        this.setState({
            year:event.target.value
        },()=>{
            console.log(this.state.year);
            this.calculate();
        }); //Asynchronous  
    }
    calculate = () =>{
        console.log(this.state);    
        this.setState({
            interest: (this.state.amount * this.state.rate * this.state.year) / 100
        })
    }
    render(){
        var output = (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-2">
                        <div className="card">
                            <div className="card-header">
                                <h2>Interest Calculator</h2>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Amount</label>
                                        <input type='number' className='form-control' id='amount' onBlur={(e) =>this.updateAmount(e)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Rate</label>
                                        <input type='number' className='form-control' id='rate' onBlur={(e) => this.updateRate(e)} />
                                    </div>
                                    <div className='mb-3'>
                                        <label htmlFor='' className='form-label'>Year</label>
                                        <input type='number' className='form-control' id='year' onBlur={(e) => this.updateYear(e)} />
                                    </div>
                                    <button onClick={this.calculate} type='button' className='btn btn-primary' >Calculate Interest</button>
                                    <p className='text-center'>
                                        <b>Interest =  {this.state.interest}</b>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        return (output);
    }
}
export default InteresCalculator;
