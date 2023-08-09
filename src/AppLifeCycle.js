import React, { Component } from 'react';
class AppLifeCycle extends Component
{
    constructor(props)
    {
        super(props);
        console.log('constructor called...');
        this.state = {
            count:0
        }
    }
    UNSAFE_componentWillMount()
    {
        console.log('componentWillMount called...');
    }
    componentDidMount()
    {
        console.log('componentDidMount called...');

    }
    shouldComponentUpdate()
    {
        console.log('shouldComponentUpdate called...');
        return false;
    }
    UNSAFE_componentWillUpdate()
    {
        console.log('componentWillUpdate called...');
    }
    componentDidUpdate()
    {
        console.log('componentDidUpdate called...');
    }
    updateCount = () =>{
        this.setState({
            count: this.state.count + 1
        });
    }
    render()
    {
        console.log('render called...');
        var output = (<div className='container'>
            <div className='row'>
                <div className='col-12'>
                <h1>App Life cycle concept</h1> <hr/>
                <button onClick={this.updateCount}  className='btn btn-danger'>I have been clicked {this.state.count} times</button>
                </div>
            </div>
        </div>)
        return output;
    }
}
export default AppLifeCycle