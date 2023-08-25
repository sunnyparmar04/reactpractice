import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
class MyTable extends React.Component
{
    constructor(props)
    {
        super(props);
        this.no = props.no;
        this.thali_price  = 100;
        this.ras_price  = 25;
        this.papad_price  = 10;
        this.chas_price  = 12;
        this.state = {
            thali:0,
            ras:0,
            papad:0,
            chas:0,
            total:0,
        }
    }
    UpdateTable =(label) => {
        console.log(label);
        if(label === 'thali')
        {
            this.setState({
                thali : this.state.thali + 1
            },function(){
                this.UpdateTotal();
            });
        }
        else if(label === 'ras')
        {
            this.setState({
                ras : this.state.ras + 1
            },function(){
                this.UpdateTotal();
            });
        }
        else if(label === 'papad')
        {
            this.setState({
                papad : this.state.papad + 1
            },function(){
                this.UpdateTotal();
            });
        }
        else if(label === 'chas')
        {
            this.setState({
                chas : this.state.chas + 1
            },function(){
                this.UpdateTotal();
            });
        }
        else if(label==="reset")
        {
            var response = window.confirm("Are you sure you want to reset table?");
            if (response === true)
            {
                this.setState({
                    thali:0,
                    ras:0,
                    papad:0,
                    chas:0,
                    total:0
            });
        }
        }
    }
    UpdateTotal = () => {
        console.log(this.state);
        this.setState({
            total: (this.state.thali * this.thali_price) + (this.state.ras * this.ras_price) + (this.state.papad * this.papad_price) + (this.state.chas * this.chas_price)
        })
    }
    render()
    {
        return (<div className='col-lg-3 mb-2'>
        <div className='card'>
            <div className='card-header'>
            <h3> Table No {this.no}</h3>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col'>
                    <button onClick={() => this.UpdateTable('thali')} className='btn btn-primary w-100'>Thali {this.state.thali}</button>
                    </div>
                    <div className='col'>
                    <button onClick={() => this.UpdateTable('ras')} className='btn btn-warning w-100'>Ras {this.state.ras}</button>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col'>
                    <button onClick={() => this.UpdateTable('papad')} className='btn btn-success w-100'>Papad {this.state.papad}</button>
                    </div>
                    <div className='col'>
                    <button onClick={() => this.UpdateTable('chas')} className='btn btn-info w-100'>Chas {this.state.chas}</button>
                    </div>
                </div>  
            </div>
            <div className='card-footer'>
                <div className='row'>
                    <div className='col-6'>
                        <button onClick={() => this.UpdateTable('reset')} className='btn btn-danger'>reset table</button>
                    </div>
                    <div className='col-6'>
                        <p className='text-end h4'>Rs . {this.state.total}</p>
                    </div>
                </div>
            </div>
        </div>

    </div>)
    }
}
function Resturant()
{
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Resturant</h1>
                </div>
            </div>
            <div className='row'>
                <MyTable no='1'  />
                <MyTable no='2'  />
                <MyTable no='3'  />
                <MyTable no='4'  />
                <MyTable no='5'  />
                <MyTable no='6' />
                <MyTable no='7'  />
                <MyTable no='8'  />
            </div>
        </div>
    )
}
root.render(<Resturant />);