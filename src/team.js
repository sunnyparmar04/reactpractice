//1.class components
import React from 'react';
class Team extends React.Component
{
    constructor(props)
    {
        super(props);
        // create state 
        this.state = {
            name : this.props.name,
            match : this.props.match,
            win : this.props.win
        };
    }
    AddWin = () =>{
        this.setState({
            win : parseInt(this.state.win) + 1,
            match : parseInt(this.state.match) + 1
        })
    }
    AddLoss = () =>{
        // alert("hi");
        this.setState({
            match : parseInt(this.state.match) + 1
        });
    }
    render()
    {
       return (<tr>
        <td>{this.state.name}</td>
        <td>{this.state.match}</td>
        <td>{this.state.win}</td>
        <td>{this.state.match - this.state.win}</td>
        <td>{((100 * this.state.win) / this.state.match).toFixed(2)}</td>
        <td width='8%'><button onClick={(e) => this.AddWin()} type='button' className='text-bg-success '>Add Win</button></td>
        <td width='8%'><button onClick={(e)=> this.AddLoss()} type='button' className='text-bg-danger '>Add Loss</button></td>
       </tr>);
    }
}
export default Team; //required