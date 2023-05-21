import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import MainPage from "../mainPage/MainPageNavigation";

function SequentCalculusNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

    return (
        <div className="fullPage">
          <div className="changeChase">
            <ul>
              <li   className="changeLiFirst">
                <NavLink
                  to="/SequentCalculusInfo"
                  className="table"
                >
                  Логіки предикатів над номінативними даними
                </NavLink> 
              </li>
              <li   className="changeLiFirst">
              <NavLink
                  to="/SequentCalculusUses"
                  className="table"
                >
                  Нетрадиційні логіки
                </NavLink>
              </li>
              <li   className="changeLiFirst">
                <NavLink
                  to="/SequentCalculusPractice"
                  className="table"
                >
                  Модальні <br />
                  логіки
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

export default SequentCalculusNavigation