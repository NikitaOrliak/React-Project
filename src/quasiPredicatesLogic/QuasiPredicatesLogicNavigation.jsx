import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import MainPage from "../mainPage/MainPageNavigation";

function QuasiPredicatesLogicNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

    return (
        <div className="fullPage">
          <div className="changeChase">
            <ul>
              <li  className="changeLiSecond">
                <NavLink
                  to="/QuasiPredicatesLogicInfo"
                  className="table"
                >
                  Програмно-орієнтовані моделі <br />
                  логічних <br /> систем 
                </NavLink> 
              </li>
              <li  className="changeLiSecond">
              <NavLink
                  to="/QuasiPredicatesLogicUses"
                  className="table"
                >
                 Предакатні композиційні системи
                  {/* Практичне значення */}
                </NavLink>
              </li>
              <li  className="changeLiSecond">
                <NavLink
                  to="/QuasiPredicatesLogicPractice"
                  className="table"
                >
                  Першопорядкові логіки квазіарних предикатів
                </NavLink>
              </li>
              <li  className="changeLiSecond">
                <NavLink
                  to="/QuasiPredicatesLogicSequent"
                  className="table"
                >
                  Секвенційні числення
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

export default QuasiPredicatesLogicNavigation