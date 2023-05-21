import React from "react"
import App from "../App"
// import "./headerStyles.css"
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom"
import { useLocation } from "react-router-dom";
// import { NavLink } from "react-router-dom"

function Header () {
  function userLock() {
    alert(`I will add Users in the future...`)
  }

  function registrationLock() {
    alert(`I will add Registration in the future...`)
  }

  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

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
                <Link to="/" className={splitLocation[1] === "" ? "newAdd" 
                : splitLocation[1] === "HowToUse" ? "newAdd" 
                : splitLocation[1] === "MainPageFirst" ? "newAdd"
                : ""}>Головне меню</Link>
              </li>
              <li>
                <Link to="/AppliedLogicInfo" className={splitLocation[1] === "AppliedLogicInfo" ? "newAdd" 
                : splitLocation[1] === "AppliedLogicUses" ? "newAdd" 
                : splitLocation[1] === "AppliedLogicPractice" ? "newAdd" 
                : ""}>Прикладна логіка</Link>
              </li>
              <li>
                <Link to="/QuasiPredicatesLogicInfo" className={splitLocation[1] === "QuasiPredicatesLogicInfo" ? "newAdd" 
                : splitLocation[1] === "QuasiPredicatesLogicUses" ? "newAdd" 
                : splitLocation[1] === "QuasiPredicatesLogicPractice" ? "newAdd" 
                : splitLocation[1] === "QuasiPredicatesLogicSequent" ? "newAdd" 
                : ""}>Логіки квазіарних предикатів</Link>
              </li>
              <li>
                <Link to="/SequentCalculusInfo" className={splitLocation[1] === "SequentCalculusInfo" ? "newAdd" 
                : splitLocation[1] === "SequentCalculusUses" ? "newAdd" 
                : splitLocation[1] === "SequentCalculusPractice" ? "newAdd" 
                : ""}>Нетрадиційні та модальні логіки</Link>
              </li>
              <li>
                <Link to="/AboutMe" className={splitLocation[1] === "AboutMe" ? "newAdd" 
                : splitLocation[1] === "MyContacts" ? "newAdd" 
                : splitLocation[1] === "MyWorks" ? "newAdd" 
                : ""}>Інформація про автора</Link>
              </li>
              
            </ul>
            {/* <div className="future">
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
            </div> */}
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
