import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Page extends React.Component {
    render() {
        return (<div className="container">
            <div className="row">
                <div className="col-12">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, similique! Consectetur aspernatur doloremque et molestiae amet quam ipsum cupiditate iusto cumque magni esse suscipit nihil, laudantium, possimus, enim mollitia inventore.</p>
                </div>
            </div>
        </div>)
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Page />);

