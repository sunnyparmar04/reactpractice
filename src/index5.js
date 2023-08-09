import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function ReportCard(student)
{
    var output = (
        <div className='container'>
            <div className='row'>
                <div className='col-8 offset-2'>
                    <div className='card'>
                        <div className='card-header'>
                                <h1>Report card</h1>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered'>
                                <tr>
                                    <th>Name</th>
                                    <th>HTML</th>
                                    <th>CSS</th>
                                    <th>Bootstrap</th>
                                    <th>Javascript</th>
                                    
                                </tr>
                                <tr>
                                    <td>{student.name}</td>
                                    <td>{student.html}</td>
                                    <td>{student.css}</td>
                                    <td>{student.bootstrap}</td>
                                    <td>{student.javascript}</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    return output;
}
var student = {
    name: 'Alex',
    html:55,
    css:65,
    javascript:75,
    bootstrap:85
};
root.render(ReportCard(student));
