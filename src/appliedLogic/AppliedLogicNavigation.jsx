import React from "react"
import App from "../App"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function AppliedLogicNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

  return (
    <div className="fullPage">
      <div className="changeChase">
        <ul>
          <li>
            <Link
              to="/AppliedLogicInfo"
              className="table"
            >
              Прикладна логіка
            </Link> 
          </li>
          <li>
            <Link
              to="/AppliedLogicUses"
              className="table"
            >
              Логіка, <br /> 
              Формальна логіка, <br /> 
              Прикладна логіка
            </Link>
          </li>
          <li>
            <Link
              to="/AppliedLogicPractice"
              className="table"
            >
              Практичне значення
            </Link>
          </li>
        </ul>
        <div className="additionallyInfo">
          <p>
            <Link
                to="#"
                className="additionalInfo"
              >
                <span onClick={additionalInfoLock}>Додаткова інформація</span>
              </Link>
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default AppliedLogicNavigation
