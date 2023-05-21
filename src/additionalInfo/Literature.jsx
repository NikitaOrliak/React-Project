import React from "react";
import MainPageNavigation from "../mainPage/MainPageNavigation";

function Literature() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <MainPageNavigation />
            </div> 
            <div className="fullPageWoutNavigation mainPage SequentCalculus">
            
            <div className="picturePractice">
                <img src={require("./info/1.jpg")} alt="1" className="practice1"/> 
                <img src={require("./info/2.jpg")} alt="2" className="practice1"/> 
                <img src={require("./info/3.jpg")} alt="3" className="practice1"/> 
                <img src={require("./info/4.jpg")} alt="4" className="practice1"/> 
            </div>

            </div>
            

        </div>
    )
}

export default Literature