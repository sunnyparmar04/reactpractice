import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
function LoginForm()
{
    var [message,setMessage] = useState('');
    var [email,setEmail] = useState('');
    var [password,setPassword] = useState('');

    var verifyLogin = (e) => {
        console.log('we got input');
        console.log(email,password);
        if(email === 'admin@gmail.com' && password === '123123')
        { 
            setMessage('login successfull');
        }
        else 
        {
            setMessage('login failed...');
        }
        e.preventDefault();

    }
    return (<div className='container'>
        <div className='row'>
            <div className='col-6 offset-3'>
                <div className='card'>
                    <div className='card-header text-bg-info'>
                        <h1>Login</h1>
                    </div>
                    <div className='card-body'>
                        <form onSubmit={verifyLogin}>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' id='email' name='email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='password' className='form-label'>Password</label>
                                <input type='password' id='password' name='password' className='form-control' onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <button type='submit' className='btn btn-info w-100'>Login</button>
                            <p>{message}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
root.render(< LoginForm  />);