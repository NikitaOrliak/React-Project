import React from "react"
import App from "../App"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"

function AppliedLogicNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

  return (
    <div className="fullPage">
      <div className="changeChase">
        <ul>
          <li className="changeLiFirst">
            <NavLink
              to="/AppliedLogicInfo"
              className="table"
            >
              Передмова
            </NavLink> 
          </li>
          <li className="changeLiFirst">
            <NavLink
              to="/AppliedLogicUses"
              className="table"
            >
              Прикладна логіка
              {/* , <br /> 
              Формальна логіка, <br /> 
              Прикладна логіка */}
            </NavLink>
          </li>
          <li className="changeLiFirst">
            <NavLink
              to="/AppliedLogicPractice"
              className="table"
            >
              Практичне значення
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

export default AppliedLogicNavigation
