import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//class components

class Contact extends React.Component {
    constructor(props) {

        super(props);
        this.state = {
            name: 'parmar sunny',
            email: 'parmarsunny2222@gmail.com',
            mobile: '9909763447'
        };
    }
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-heder"><h1>resume</h1></div>
                        <div className="card-body">
                            <b>name:</b> {this.state.name}<br />
                            <b>email no:</b> {this.state.email}<br />
                            <b>mobile no:</b> {this.state.mobile}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }

}
var root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Contact />);

// class ContactUs extends React.Component
// {
//     constructor(props)
//     {
//         super(props);
//         // create state 
//         this.state = {
//             name : 'Ankit Patel',
//             email : 'ankit3385@gmail.com',
//             mobile : '9662512857'
//         };
//     }
//     render()
//     {
//         return(<div className='container'>
//             <div className='row'>
//                 <div className='col-12'>
//                     <div className='card'>
//                         <div className='card-header'>
//                             <h1>{this.state.name}</h1>
//                         </div>
//                         <div className='card-body'>
//                             <b>Email </b> {this.state.email} <br/>
//                             <b>mobile </b> {this.state.mobile}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>);
//     }
// }
// var root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<ContactUs />);