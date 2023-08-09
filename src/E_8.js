import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
function scoreboard(cricketer) {
  var marksheet = (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div classNme="card">
            <div className="card-header">
              <h1>Cricketer Scoreboard</h1>
            </div>
            <div className="card-body">
              <table className="table table-bordered">
                <tr>
                  <th>Name</th>
                  <th>Matches</th>
                  <th>Run</th>
                  <th>Fifty</th>
                  <th>Hunderd</th>
                  <th>Average </th>
                </tr>
                <tr>
                  <td>{cricketer.Name}</td>
                  <td>{cricketer.Matches}</td>
                  <td>{cricketer.Run}</td>
                  <td>{cricketer.Fifty}</td>
                  <td>{cricketer.Hundred}</td>
                  <td>{cricketer.Average}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return marksheet;
}

var cricketer = {
  Name:"Virat Kohli",
  Matches:213,
  Run:19526,
  Fifty:15,
  Hundred:10,
  Average : 95
};
root.render(scoreboard(cricketer));
