import React from "react"
import App from "../App"
// import "./headerStyles.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
// import { NavLink } from "react-router-dom"

function Header () {
  function userLock() {
    alert(`I will add Users in the future...`)
  }

  function registrationLock() {
    alert(`I will add Registration in the future...`)
  }

  return (

      <div>
        <nav className="header">
          <div className="logo">
            <img
              src={require("./imgs/diary.png")}
              alt="diary"
            />
            <h1>
              <span>Electronic Diary</span>
            </h1>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/">Головне меню</Link>
              </li>
              <li>
                <Link to="/AppliedLogicInfo">Прикладна логіка</Link>
              </li>
              <li>
                <Link to="/SequentCalculusInfo">Секвенційні числення</Link>
              </li>
              <li>
                <Link to="/AboutMe">Інформація про автора</Link>
              </li>
            </ul>
            <div className="future">
              <Link
                to="#"
                className="user"
              >
                <img
                  src={require("./imgs/user2.png")}
                  alt="User"
                  // style={{width: 35}}
                />
                
                <span onClick={userLock}>Вхід</span>
              </Link>
              <Link
                to="#"
                className="registration"
              >
                <img
                  src={require("./imgs/registration2.png")}
                  alt="Registration"
                  style={{width: 33}}
                />
                <span onClick={registrationLock}>Реєстрація</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* <Switch>
          <Route path="/mainPage">
            <mainPage />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch> */}
      </div>

  )
}

export default Header
