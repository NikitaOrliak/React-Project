import React from "react";
import MainPageNavigation from "./MainPageNavigation";

function MainPageFirst() {

    return (
        <div className="fullPageWithNavigation">  
        <div>
            <MainPageNavigation />
            </div> 
            <div className="fullPageWoutNavigation mainPage SequentCalculus">
            
            <div className="picturePractice">
                <img src={require("./main/1.jpg")} alt="1" className="practice1"/> 
                <img src={require("./main/2.jpg")} alt="2" className="practice1"/> 
            </div>

            </div>
            

        </div>
    )
}

export default MainPageFirst