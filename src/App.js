import React from "react"
import Header from "./header/Header"

import MainPageInfo from "./mainPage/MainPageInfo"
import HowToUse from "./mainPage/HowToUse"
import MainPageFirst from "./mainPage/MainPageFirst"

import Literature from "./additionalInfo/Literature"

import AppliedLogicInfo from "./appliedLogic/AppliedLogicInfo"
import AppliedLogicUses from "./appliedLogic/AppliedLogicUses"
import AppliedLogicPractice from "./appliedLogic/AppliedLogicPractice"

import SequentCalculusInfo from "./sequentCalculus/SequentCalculusInfo"
import SequentCalculusUses from "./sequentCalculus/SequentCalculusUses"
import SequentCalculusPractice from "./sequentCalculus/SequentCalculusPractice"

import QuasiPredicatesLogicInfo from "./quasiPredicatesLogic/QuasiPredicatesLogicInfo"
import QuasiPredicatesLogicUses from "./quasiPredicatesLogic/QuasiPredicatesLogicUses"
import QuasiPredicatesLogicPractice from "./quasiPredicatesLogic/QuasiPredicatesLogicPractice"
import QuasiPredicatesLogicSequent from "./quasiPredicatesLogic/QuasiPredicatesLogicSequent"

import AboutMe from "./aboutMe/AboutMe"
import MyContacts from "./aboutMe/MyContacts"
import MyWorks from "./aboutMe/MyWorks"




import {
  BrowserRouter,
  // Router,
  Routes,
  // Switch,
  Route,
  // Link,
} from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
    <Header />
    {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<MainPageInfo />}></Route>
        <Route path="HowToUse" element={<HowToUse />}></Route>
        <Route path="MainPageFirst" element={<MainPageFirst />}></Route>

        <Route path="Literature" element={<Literature />}></Route>

        <Route path="AppliedLogicInfo" element={<AppliedLogicInfo />}></Route>
        <Route path="AppliedLogicUses" element={<AppliedLogicUses />}></Route>
        <Route path="AppliedLogicPractice" element={<AppliedLogicPractice />}></Route>

        <Route path="SequentCalculusInfo" element={<SequentCalculusInfo />}></Route>
        <Route path="SequentCalculusUses" element={<SequentCalculusUses />}></Route>
        <Route path="SequentCalculusPractice" element={<SequentCalculusPractice />}></Route>

        <Route path="QuasiPredicatesLogicInfo" element={<QuasiPredicatesLogicInfo />}></Route>
        <Route path="QuasiPredicatesLogicPractice" element={<QuasiPredicatesLogicPractice />}></Route>
        <Route path="QuasiPredicatesLogicUses" element={<QuasiPredicatesLogicUses />}></Route>
        <Route path="QuasiPredicatesLogicSequent" element={<QuasiPredicatesLogicSequent />}></Route>

        <Route path="AboutMe" element={<AboutMe />}></Route>
        <Route path="MyContacts" element={<MyContacts />}></Route>
        <Route path="MyWorks" element={<MyWorks />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
