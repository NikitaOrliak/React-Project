import React from "react";
// import './navigationStyles.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Navigation() {


    return (
      <Router>
       {/* <div className="testChange">
         <h1>123</h1>
       </div> */}

        <div className="changeChase">
        <ul>
          <li><Link to="/" className="table">First</Link></li>
          <li><a href="/" className="table">Second</a></li>
          <li><a href="/" className="table">Third</a></li>
        </ul>
        <div className="additionallyInfo">
          <p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Доп інфа</a></p>
        </div>
      </div>
      </Router>
    )
}

export default Navigation