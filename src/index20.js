import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));

class ListAndKeys extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: props.heading,
            states: props.states,
        }
    }
         DeleteState = (item) => {
         console.log(item);
         var temp = this.state.states.filter((state) => {
            if (state !== item)
                return state;
        });
        this.setState({
            states: temp
        });
    }
    render() {
        return (<div className='container'>
            <div className='row'>
                <div className='col-lg-4 '>
                    <div className='card'>
                        <div className='card-header text-bg-primary'>
                            <h3>{this.state.heading}</h3>
                        </div>
                        <div className='card-body'>
                            <ul className='list-group'>
                                {this.state.states.map((item) => {
                                    return <li key={item} className='list-group-item'>{item}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-lg-8'>
                    <div className='row'>
                        {this.state.states.map((item) => {
                            return <div key={item} className='col-6 mb-2'>
                                <div className='card text-bg-warning p-3'>
                                    <div className='card-body'>
                                        <h1>{item}</h1>
                                        <button type='button' onClick={() => this.DeleteState(item)} className='btn btn-danger'>Delete</button>

                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>

            </div>
        </div>);
    }
}
var states = ['Gujarat', 'Tamil nadu', 'Karnatak', 'Andhra pradesh', 'Maharastra', 'punjab'];
root.render(<ListAndKeys heading='Indian states' states={states} />);