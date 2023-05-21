import React from "react"
import App from "../App"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"

function AboutMeNavigation() {

  function additionalInfoLock() {
    alert(`Додаткові джерела: 
    1 - https://ekmair.ukma.edu.ua/server/api/core/bitstreams/6e6ab0fa-c5e0-49aa-ae35-38c2b882e09a/content
    2 - http://dspace.nbuv.gov.ua/bitstream/handle/123456789/132088/07-Shkilniak.pdf?sequence=1
    3 - http://dspace.nbuv.gov.ua/bitstream/handle/123456789/85211/10-Shkilniak.pdf
    Якщо маєте конкретні запитання з приводу цих тем, ви можете написати на пошту: 
    ss.sh@knu.ua (Степан Степанович Шкільняк)`)
  }

  return (
    <div className="fullPage">
      <div className="changeChase">
        <ul>
          <li className="changeLiFirst">
            <NavLink
              to="/AboutMe"
              className="table"
            >
              Загальна інформація
            </NavLink> 
          </li>
          <li className="changeLiFirst">
            <NavLink
              to="/MyContacts"
              className="table"
            >
              Як зі мною зв'язатися?
            </NavLink>
          </li>
          <li className="changeLiFirst">
            <NavLink
              to="/MyWorks"
              className="table"
            >
              Мої роботи 
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

export default AboutMeNavigation
