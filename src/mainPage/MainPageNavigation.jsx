import React from "react"
import App from "../App"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"

function MainPageNavigation() {

  // function additionalInfoLock() {
  //   alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  // }

  return (
    <div className="fullPage">
      <div className="changeChase">
        <ul>
          <li  className="changeLiFirst">
            <NavLink
              to="/"
              className="table"
            >
              Вітання!
            </NavLink> 
          </li>
          <li className="changeLiFirst">
            <NavLink
              to="/MainPageFirst"
              className="table"
            >
              Головна сторінка
            </NavLink>
          </li>
          <li  className="changeLiFirst">
            <NavLink
              to="/HowToUse"
              className="table"
            >
              FAQ
            </NavLink>
          </li>
        </ul>
        <div className="additionallyInfo">
          <p>
            <Link
                to="/Literature"
                className="additionalInfo"
              >
                <span>Джерела</span>
              </Link>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default MainPageNavigation
