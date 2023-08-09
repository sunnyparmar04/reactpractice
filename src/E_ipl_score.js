import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
var root = ReactDOM.createRoot(document.getElementById('root'));
class Score extends React.Component {
    constructor(props) {
        super(props);

        this.criketer=props.criketer;
        this.state = {
            run0: 0,
            run1: 0,
            run2: 0,
            run3: 0,
            run4: 0,
            run6: 0,
            ball: 0,
           

        }

    }
    UpdateScore0 = (Label) => {
        if (Label === 'run0') {
            this.setState({
                run0: this.state.run0 + 0,
                ball: this.state.ball + 1,
            }, function () {
                this.UpdateTotal();
            });
        }
    }
    UpdateScore1 = (Label) => {
        if (Label === 'run1') {
            this.setState({
                run1: this.state.run1 + 1,
                ball: this.state.ball + 1,

            }, function () {
                this.UpdateTotal();
            });
        }

    }
    UpdateScore2 = (Label) => {
        if (Label === 'run2') {
            this.setState({
                run2: this.state.run2 + 2,
                ball: this.state.ball + 1,

            }, function () {
                this.UpdateTotal();
            });
        }

    }
    UpdateScore3 = (Label) => {
        if (Label === 'run3') {
            this.setState({
                run3: this.state.run3 + 3,
                ball: this.state.ball + 1,

            }, function () {
                this.UpdateTotal();
            });
        }

    }
    UpdateScore4 = (Label) => {
        if (Label === 'run4') {
            this.setState({
                run4: this.state.run4 + 4,
                ball: this.state.ball + 1,

            }, function () {
                this.UpdateTotal();
            });
        }

    }
    UpdateScore6 = (Label) => {
        if (Label === 'run6') {
            this.setState({
                run6: this.state.run6 + 6,
                ball: this.state.ball + 1,

            }, function () {
                this.UpdateTotal();
                // this.UpdateBall();
            });
        }

    }
    UpdateTotal = () => {
        console.log(this.state);
        this.setState({
            total: (this.state.run0) + (this.state.run1) + (this.state.run2) + (this.state.run3) + (this.state.run4) + (this.state.run6)
        })
    }
    
    // UpdateBall = () => {
    //     console.log(this.state);
    //     this.setState({
    //         totalball:  (this.state.ball)
    //     })
    // }

    render() {
        return (           
                <div className="col-lg-6 my-2">
                    <div className="card">
                        <div className='card-hedered'>
                            <h2>Name: {this.criketer}</h2>
                            
                        </div>
                        <div className='card-body'>
                        <td><button type="button" className="btn btn-outline-danger btn-lg" onClick={() => this.UpdateScore0('run0')}> 0 run {this.Run0}</button></td>
                            <td><button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => this.UpdateScore1('run1')}  > 1 Run </button></td>
                            <td><button type="button" className="btn btn-outline-warning btn-lg" onClick={() => this.UpdateScore2('run2')} > 2 Run</button></td>
                            <td><button type="button" className="btn btn-outline-secondary btn-lg" onClick={() => this.UpdateScore3('run3')} > 3 Run</button></td>
                            <td><button type="button" className="btn btn-outline-primary btn-lg" onClick={() => this.UpdateScore4('run4')} > 4 Run</button></td>
                            <td><button type="button" className="btn btn-outline-success btn-lg" onClick={() => this.UpdateScore6('run6')} > 6 Run</button></td>

                        </div>
                        <div className='card-footer '>
                            <button type="button" class="btn btn-primary btn-lg btn-block mx-5"> Balls: {this.state.ball}</button>
                            <button type="button" class="btn btn-secondary btn-lg btn-block">Total Runs {this.state.total}</button>
                        </div>
                    </div>
                </div>     
        );
    }
    
}
// function Totalball ()
// {
//     return (<button type="button" class="btn btn-primary btn-lg btn-block d-block"> {this.stateb.ball}</button>);
// }
function Name ()
{
   return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <h1>Score Tabel</h1>
                </div>
            </div>
            <div className='row'>
                <Score criketer='Virat Kohli'  />
                <Score criketer='Hardik Pandya'  />
            </div>
        </div>
    )
}

root.render(<Name />);