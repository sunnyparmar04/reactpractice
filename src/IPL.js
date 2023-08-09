import Team from "./team";
function IPL()
{
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
                    <div className='card'>
                    <div className='card-header text-bg-primary'>
                        <h1>IPL Points table</h1>
                    </div>
                    <div className='card-body'>
                       <table className='table table-bordered table-stripped'>
                            <tr>
                                <td>Team</td>
                                <td>Match</td>
                                <td>Win</td>
                                <td>Loss</td>
                                <td>Sucess Ratio</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <Team name='csk' match='0' win='0'  />
                            <Team name='GT' match='0' win='0'  />
                            <Team name='LSG' match='0' win='0'  />
                            <Team name='RR' match='0' win='0'  />
                            
                       </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default IPL;