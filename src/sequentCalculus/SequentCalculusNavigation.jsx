import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import MainPage from "../mainPage/MainPageNavigation";

function SequentCalculusNavigation() {

  function additionalInfoLock() {
    alert(`If you want to ask about additional information, you can write on email: ss.sh@knu.ua (Stepan Stepanovich Shkilnyak)`)
  }

    return (
        <div className="fullPage">
          <div className="changeChase">
            <ul>
              <li>
                <Link
                  to="/SequentCalculusInfo"
                  className="table"
                >
                  Секвенційні числення
                </Link> 
              </li>
              <li>
              <Link
                  to="/SequentCalculusUses"
                  className="table"
                >
                  Побудова та <br />
                  Практичне значення
                </Link>
              </li>
              <li>
                <Link
                  to="/SequentCalculusPractice"
                  className="table"
                >
                  Приклади
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

export default SequentCalculusNavigation