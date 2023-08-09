import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
function MyHeader()
{
    return(<h1>I am header</h1>);
}
function MyFooter()
{
    return (<h1>I am footer</h1>)
}
function MyPage(props)
{
    return (<div>
        <MyHeader />
        <h1>{props.pageheading}</h1>
        <hr/>
        <p>{props.content}</p>
        <MyFooter />
    </div>)
}
// root.render(MyPage('About us'));
root.render(<MyPage content='this is page content.' pageheading='About us'  />);
