import React from "react"
import App from "../App"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function AboutMeNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

  return (
    <div className="fullPage">
      <div className="changeChase">
        <ul>
          <li>
            <Link
              to="/AboutMe"
              className="table"
            >
              Загальна інформація
            </Link> 
          </li>
          <li>
            <Link
              to="/MyContacts"
              className="table"
            >
              Як зі мною зв'язатися?
            </Link>
          </li>
          <li>
            <Link
              to="/MyWorks"
              className="table"
            >
              Мої роботи 
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

export default AboutMeNavigation
