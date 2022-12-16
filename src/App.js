import React from "react"
import Header from "./header/Header"

import MainPageInfo from "./mainPage/MainPageInfo"
import HowToUse from "./mainPage/HowToUse"

import AppliedLogicInfo from "./appliedLogic/AppliedLogicInfo"
import AppliedLogicUses from "./appliedLogic/AppliedLogicUses"
import AppliedLogicPractice from "./appliedLogic/AppliedLogicPractice"

import SequentCalculusInfo from "./sequentCalculus/SequentCalculusInfo"
import SequentCalculusUses from "./sequentCalculus/SequentCalculusUses"
import SequentCalculusPractice from "./sequentCalculus/SequentCalculusPractice"

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
        

        <Route path="AppliedLogicInfo" element={<AppliedLogicInfo />}></Route>
        <Route path="AppliedLogicUses" element={<AppliedLogicUses />}></Route>
        <Route path="AppliedLogicPractice" element={<AppliedLogicPractice />}></Route>

        <Route path="SequentCalculusInfo" element={<SequentCalculusInfo />}></Route>
        <Route path="SequentCalculusUses" element={<SequentCalculusUses />}></Route>
        <Route path="SequentCalculusPractice" element={<SequentCalculusPractice />}></Route>

        <Route path="AboutMe" element={<AboutMe />}></Route>
        <Route path="MyContacts" element={<MyContacts />}></Route>
        <Route path="MyWorks" element={<MyWorks />}></Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
