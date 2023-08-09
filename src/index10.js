import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//class componentss 
class Page extends React.Component
{
    constructor(props)
    {
        super(props); //compulsory
        this.title = props.title;
        this.detail = props.detail;
        console.log('constructor called...');
    }
    Header(){
        return(<div className='container-fluid text-bg-dark'>
            <div className='row'>
                <div className='col-12 py-3'>
                    <h1>{this.title}</h1>
                </div>
            </div>
        </div>);
    }
    //render method must return html code that you want to display
    render()
    {
        return (
            <>
            {this.Header()}
            <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <p>
                        {this.detail}
                    </p>
                </div>
            </div>
        </div>
        </>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page 
                title='My Class components' 
                detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit velit urna' />);