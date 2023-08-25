import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
class IPLTeam extends React.Component {
    constructor(props) {
        super(props);
        this.name = props.name;
        this.logo = props.logo;
        this.captain = props.captain;
        this.winner = props.winner;
        this.newteam = props.newteam;
    }
    render() {
        <div className='container'>
            <div className='row'>
                <IPLTeam newteam='yes' winner='yes' name='Gujarat Titans' logo='https://media.crictracker.com/media/featureimage/Gujarat-Titans-logo.jpg' captain='Hardik Pandya' />
                <IPLTeam newteam='yes' winner='no' name='Lucknow Super Giants' logo='https://media.crictracker.com/media/featureimage/2022/01/Lucknow-Super-Giants-logo.jpg' captain='Krunal Pandya' />
                <IPLTeam newteam='no' winner='no' name=' Mumbai Indians' logo='https://media.crictracker.com/media/attachments/1680698558309_Mumbai-Indians-new-logo.jpeg' captain='Rohit sharma' />

            </div>
        </div>
        var output;
        if (this.winner === 'yes') {
            output = <b>Defending champion</b>;
        }

        return (<div className='col-lg-4 mb-3'>
            <div className='card shadow'>
                <div className='card-header text-bg-danger'>
                    <h4>{this.name}</h4>
                    {output}
                    <p>{(this.newteam === 'yes' ? 'new team' : 'old team')}</p>
                </div>
                <div className='card-body'>
                    <img src={this.logo} className='img-fluid' />
                    <p className='h5 text-center my-2'>{this.captain}</p>
                </div>
            </div>
        </div>)
    }
}
function IPL() {
    return (<div className='container'>
        <div className='row'>
            <IPLTeam newteam='yes' winner='yes' name='Gujarat Titans' logo='https://media.crictracker.com/media/featureimage/Gujarat-Titans-logo.jpg' captain='Hardik Pandya' />
            <IPLTeam newteam='yes' winner='no' name='Lucknow Super Giants' logo='https://media.crictracker.com/media/featureimage/2022/01/Lucknow-Super-Giants-logo.jpg' captain='Krunal Pandya' />
            <IPLTeam newteam='no' winner='no' name=' Mumbai Indians' logo='https://media.crictracker.com/media/attachments/1680698558309_Mumbai-Indians-new-logo.jpeg' captain='Rohit sharma' />

        </div>
    </div>)
}
root.render(<IPL />);