import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import AppliedLogicNavigation from "./AppliedLogicNavigation";

function AppliedLogicInfo() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <AppliedLogicNavigation />
            </div> 
            <div className="fullPageWoutNavigation appliedLogic SequentCalculus">
            <div className="picturePractice">
                <img src={require("./start/3.jpg")} alt="1" className="practice1"/> 
                <img src={require("./start/4.jpg")} alt="2" className="practice1"/> 
            </div>

                
            </div>
            

        </div>
    )
}

export default AppliedLogicInfo